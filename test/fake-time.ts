import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const mock1 = vi.fn()
const mock2 = vi.fn()

describe('delayed execution', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should not execute the function', () => {
    setTimeout(mock1, 3000)
    setTimeout(mock2, 5000)
    // advancing by 2ms won't trigger the func
    vi.advanceTimersByTime(4000)
    expect(mock1).toHaveBeenCalled()
    expect(mock2).not.toHaveBeenCalled()
  })
})