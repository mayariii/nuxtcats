import type { Emoji } from '../data/emojis'

export function toSlackShortcode(name: string) {
  return `:${name}:`
}

export function getDownloadFilename(emoji: Emoji) {
  const extension = emoji.src.split('.').pop()?.split('?')[0] || 'png'

  return `${emoji.name}.${extension}`
}

export function filterEmojis(emojis: Emoji[], query: string) {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return emojis
  }

  return emojis.filter((emoji) => {
    const searchableText = `${emoji.name} ${emoji.alt}`.toLowerCase()

    return searchableText.includes(normalizedQuery)
  })
}
