type SoundKey = "bgmMovement" | "boom" | "correctAnswer" | "wrongAnswer" | "dash";

type SoundPlayOptions = {
  loop?: boolean;
  volume?: number;
  restart?: boolean;
};

const SOUND_PATHS: Record<SoundKey, string> = {
  bgmMovement: "./assets/sounds/BGM1_FROM_PIXABAY.mp3",
  boom: "./assets/sounds/boom.wav",
  correctAnswer: "./assets/sounds/correctAnswer.wav",
  wrongAnswer: "./assets/sounds/wrongAnswer.wav",
  dash: "./assets/sounds/dash.wav",
};

export class SoundManager {
  private readonly loopedAudio = new Map<SoundKey, HTMLAudioElement>();

  public play(key: SoundKey, options: SoundPlayOptions = {}) {
    const { loop = false, volume = 1, restart = true } = options;
    const source = SOUND_PATHS[key];

    if (loop) {
      const existing = this.loopedAudio.get(key) ?? new Audio(source);
      existing.loop = true;
      existing.volume = volume;
      if (restart) {
        existing.currentTime = 0;
      }

      this.loopedAudio.set(key, existing);
      if (existing.paused) {
        void existing.play().catch(() => {});
      }
      return;
    }

    const audio = new Audio(source);
    audio.volume = volume;
    if (restart) {
      audio.currentTime = 0;
    }
    void audio.play().catch(() => {});
  }

  public stop(key: SoundKey) {
    const audio = this.loopedAudio.get(key);
    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  }
}
