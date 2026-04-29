import type { Emoji } from '../data/emojis'

export function toSlackShortcode(name: string) {
  return `:${name}:`
}

export function getDownloadFilename(emoji: Emoji) {
  const extension = emoji.src.split('.').pop()?.split('?')[0] || 'png'

  return `${emoji.name}.${extension}`
}
