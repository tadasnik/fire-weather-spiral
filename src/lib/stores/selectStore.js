import { writable, readable } from 'svelte/store'

export const variables = readable(['fwi', 'isi', 'ffmc', 'dmc', 'dc'])
export const selectedVariable = writable(['fwi'])
export const regions = readable(['Northern Scotland', 'Eastern Scotland', 'Southern Scotland',
  'North-west', 'North-east', 'Northern Ireland', 'South-west', 'Central', 'South-east'])
export const selectedRegion = writable(['South-west'])

