/**
 * SoundManager — full Wolfie2D audio pipeline.
 *
 * Uses:
 *   ResourceManager  → loads audio files into AudioBuffers
 *   Emitter          → fires PLAY_SFX events into the EventQueue
 *   AudioManager     → listens for events and plays sounds (via update())
 *
 * main.ts calls gc.sounds.update() once per render so AudioManager
 * processes queued events and actually plays the sounds.
 */

import AudioManager, { AudioChannelType } from '../../Wolfie2D/Sound/AudioManager';
import ResourceManager from '../../Wolfie2D/ResourceManager/ResourceManager';
import EventQueue from '../../Wolfie2D/Events/EventQueue';
import Emitter from '../../Wolfie2D/Events/Emitter';
import { GameEventType } from '../../Wolfie2D/Events/GameEventType';

export type SoundName =
  | 'strike'         // wrong answer / lose a life
  | 'lose_life'      // life lost flash/sting
  | 'advance'        // correct answer / level complete
  | 'click'          // button press
  | 'guide_typing'   // typewriter tick in guide panel
  | 'pong_bounce'    // pong ball hits paddle or wall
  | 'pong_score'     // pong point scored
  | 'erase'          // eraser dragging on chalkboard
  | 'reveal'         // secret area discovered
  | 'gameover';      // game over jingle

const SOUND_FILES: Partial<Record<SoundName, string>> = {
  guide_typing: 'sounds/guide_typing.mp3',
  lose_life:    'sounds/lose_life.mp3',
  // Add more here as you drop files into sounds/:
  // strike:      'sounds/strike.mp3',
  // advance:     'sounds/advance.mp3',
  // click:       'sounds/click.mp3',
  // pong_bounce: 'sounds/pong_bounce.mp3',
  // pong_score:  'sounds/pong_score.mp3',
  // erase:       'sounds/erase.mp3',
  // reveal:      'sounds/reveal.mp3',
  // gameover:    'sounds/gameover.mp3',
};

export class SoundManager {
  private emitter: Emitter;
  private muted = false;
  private loaded = false;
  private stopTimers: Map<SoundName, ReturnType<typeof setTimeout>> = new Map();

  constructor() {
    // Boot the Wolfie2D AudioManager singleton
    AudioManager.getInstance();

    this.emitter = new Emitter();

    // Register all audio files with ResourceManager
    const rm = ResourceManager.getInstance();
    for (const [key, path] of Object.entries(SOUND_FILES) as [SoundName, string][]) {
      rm.audio(key, path);
    }

    // Load them all, then mark ready
    rm.loadResourcesFromQueue(() => {
      this.loaded = true;
      console.log('[audio] all sounds loaded');
    });
  }

  /** Must be called once per frame (from main.ts render) so AudioManager processes its event queue. */
  update(): void {
    // Step 1: distribute queued events to all receivers (mirrors Game.update in HW3)
    EventQueue.getInstance().update(0);
    // Step 2: AudioManager processes events from its receiver and plays sounds
    AudioManager.getInstance().update(0);
  }

  play(name: SoundName, volume = 1): void {
    if (this.muted) return;
    if (!this.loaded) return;
    if (AudioManager.getInstance().getAudioContext().state === 'suspended') return;

    AudioManager.setVolume(AudioChannelType.SFX, Math.max(0, Math.min(1, volume)));

    this.emitter.fireEvent(GameEventType.PLAY_SFX, {
      key: name,
      loop: false,
      holdReference: false,
    });
  }

  /**
   * Play a sound and automatically stop it after `durationMs` milliseconds.
   * Uses holdReference so the sound can be cut short via STOP_SOUND.
   */
  playFor(name: SoundName, durationMs: number, volume = 1): void {
    if (!this.loaded) return;
    const ctx = AudioManager.getInstance().getAudioContext();
    if (ctx.state === 'suspended') { ctx.resume(); return; }

    // Cancel any previous timer for this sound and stop it immediately
    const existing = this.stopTimers.get(name);
    if (existing !== undefined) clearTimeout(existing);
    this.emitter.fireEvent(GameEventType.STOP_SOUND, { key: name });

    if (this.muted) return;

    AudioManager.setVolume(AudioChannelType.SFX, Math.max(0, Math.min(1, volume)));

    this.emitter.fireEvent(GameEventType.PLAY_SFX, {
      key: name,
      loop: false,
      holdReference: true,
    });

    const timer = setTimeout(() => {
      this.emitter.fireEvent(GameEventType.STOP_SOUND, { key: name });
      this.stopTimers.delete(name);
    }, durationMs);

    this.stopTimers.set(name, timer);
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (muted) {
      this.emitter.fireEvent(GameEventType.MUTE_CHANNEL, { channel: AudioChannelType.SFX });
      this.emitter.fireEvent(GameEventType.MUTE_CHANNEL, { channel: AudioChannelType.MUSIC });
    } else {
      this.emitter.fireEvent(GameEventType.UNMUTE_CHANNEL, { channel: AudioChannelType.SFX });
      this.emitter.fireEvent(GameEventType.UNMUTE_CHANNEL, { channel: AudioChannelType.MUSIC });
    }
  }

  isMuted(): boolean {
    return this.muted;
  }
}
