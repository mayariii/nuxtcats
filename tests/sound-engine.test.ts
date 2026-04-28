import { describe, expect, it, mock } from 'bun:test'
import * as soundEngine from '../app/lib/sound-engine'

describe('sound engine', () => {
  it('installs one-shot user activation listeners that resume audio', async () => {
    const listeners = new Map<string, EventListener>()
    const addEventListener = mock((event: string, listener: EventListener) => {
      listeners.set(event, listener)
    })
    const removeEventListener = mock()
    const resume = mock(async () => {})
    const OriginalAudioContext = globalThis.AudioContext

    globalThis.AudioContext = class {
      state = 'suspended'
      resume = resume
    } as unknown as typeof AudioContext

    try {
      expect(typeof soundEngine.installAudioUnlockListeners).toBe('function')

      soundEngine.installAudioUnlockListeners({
        addEventListener,
        removeEventListener
      } as unknown as Window)

      expect(addEventListener).toHaveBeenCalledTimes(2)

      listeners.get('pointerdown')?.(new Event('pointerdown'))

      await Promise.resolve()

      expect(resume).toHaveBeenCalledTimes(1)
      expect(removeEventListener).toHaveBeenCalledTimes(2)
    } finally {
      globalThis.AudioContext = OriginalAudioContext
    }
  })
})
