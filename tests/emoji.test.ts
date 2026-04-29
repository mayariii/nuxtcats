import { describe, expect, it } from 'bun:test'
import { getDownloadFilename, toSlackShortcode } from '../app/utils/emoji'

describe('emoji helpers', () => {
  it('wraps an emoji name in Slack shortcode punctuation', () => {
    expect(toSlackShortcode('cat-goggles')).toBe(':cat-goggles:')
  })

  it('keeps the original asset extension for downloads', () => {
    expect(getDownloadFilename({
      name: 'cat-goggles',
      alt: 'cat with goggles',
      src: '/emojis/cat-goggles.png'
    })).toBe('cat-goggles.png')
  })

})
