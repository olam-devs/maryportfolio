import {createClient} from '@sanity/client'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? '3x22qb0n'
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production'
const apiVersion = '2026-03-30'

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

