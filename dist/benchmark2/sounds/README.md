# Sound Effects

Drop audio files here. Preferred format: `.mp3` (broadest browser support).
`.ogg` and `.wav` also work.

| File | When it plays |
|------|---------------|
| `strike.mp3` | Wrong answer / lose a life |
| `advance.mp3` | Correct answer / level complete |
| `click.mp3` | Button press |
| `guide_typing.wav` | Typewriter tick in guide panel (plays at low volume, 0.18) |
| `pong_bounce.mp3` | Pong ball hits paddle or wall |
| `pong_score.mp3` | Point scored in pong |
| `erase.mp3` | Eraser dragging on chalkboard |
| `reveal.mp3` | Secret area discovered (e.g. dark room glow) |
| `gameover.mp3` | Game over jingle |

## Playing a sound from any level

```typescript
gc.sounds.play('strike');
gc.sounds.play('advance');
gc.sounds.play('pong_bounce');
```

## Muting

The pause menu has a mute toggle. You can also call:

```typescript
gc.sounds.setMuted(true);
gc.sounds.isMuted(); // → boolean
```
