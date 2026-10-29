// Sound manager (sound completely disabled per user preference)
class SoundManager {
  play(_type?: string): void {
    // Muted: all sounds removed per user request
  }
}

export const soundFx = new SoundManager();
