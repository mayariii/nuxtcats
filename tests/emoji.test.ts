import { describe, expect, it } from 'bun:test'
import { emojis } from '../app/data/emojis'
import { filterEmojis, getDownloadFilename, toSlackShortcode } from '../app/utils/emoji'

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

  it('filters by emoji name and alt text without changing the source list', () => {
    const result = filterEmojis(emojis, 'sleepy')

    expect(result.map(emoji => emoji.name)).toEqual(['cat-eepy', 'cat-sleepy-eepy'])
    expect(emojis[0]?.name).toBe('cat-goggles')
  })
})
