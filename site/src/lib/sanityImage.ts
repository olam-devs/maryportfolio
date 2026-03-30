import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import {sanity} from './sanity'

const builder = imageUrlBuilder(sanity)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

