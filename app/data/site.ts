export const CONTACT_EMAIL = 'dave1.t.wells@gmail.com'

export const SITE_URL = 'https://focowebsites.com'
export const STARTING_PRICE = '$1,500'

export interface ServiceArea {
  city: string
  state: 'CO' | 'WY'
}

export const SERVICE_AREAS: ServiceArea[] = [
  { city: 'Fort Collins', state: 'CO' },
  { city: 'Loveland', state: 'CO' },
  { city: 'Windsor', state: 'CO' },
  { city: 'Timnath', state: 'CO' },
  { city: 'Wellington', state: 'CO' },
  { city: 'Berthoud', state: 'CO' },
  { city: 'Johnstown', state: 'CO' },
  { city: 'Greeley', state: 'CO' },
  { city: 'Estes Park', state: 'CO' },
  { city: 'Longmont', state: 'CO' },
  { city: 'Boulder', state: 'CO' },
  { city: 'Broomfield', state: 'CO' },
  { city: 'Denver', state: 'CO' },
  { city: 'Cheyenne', state: 'WY' },
  { city: 'Laramie', state: 'WY' },
]
