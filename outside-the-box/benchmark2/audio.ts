export class SoundManager {
  private muted = false;

  public play(_name: string) {
    if (this.muted) {
      return;
    }
  }

  public stop(_name?: string) {}

  public stopAll() {}

  public setMuted(muted: boolean) {
    this.muted = muted;
  }

  public isMuted() {
    return this.muted;
  }
}
