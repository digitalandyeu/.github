// Generate the static .json files
import fs from 'fs'

import {contacts, labels, org, referrals, reviews, socials, team} from './data'

export const publicOrgPathBase = '.'

export const publicOrgPathProfile = `${publicOrgPathBase}/public/profile`
export const publicOrgPathPublic = `${publicOrgPathProfile}/public`
export const publicOrgPathData = `${publicOrgPathPublic}/data`

export function publicOrgGenerateDataJson(name = 'github', data = {}) {
  const path = `${publicOrgPathData}/${name}.json`
  fs.writeFileSync(path, JSON.stringify(data, null, 2))
  console.log(`publicOrgGenerateDataJson: generating  ${path}`, data)
}

export function publicOrgGenerateGenerate() {
  publicOrgGenerateDataJson('github', {org, labels})
  publicOrgGenerateDataJson('contacts', contacts)
  publicOrgGenerateDataJson('referrals', referrals)
  publicOrgGenerateDataJson('reviews', reviews)
  publicOrgGenerateDataJson('socials', socials)
  publicOrgGenerateDataJson('team', team)

  // Generate the static profile README.md file
  hbs('README.md', publicOrgPathProfile)
  hbs('static/humans.txt', publicOrgPathProfile)

  console.log('running static/generate.js', {
    src : {
      basePath : publicOrgPathBase,
      pathPublic : publicOrgPathPublic,
      pathPublicData : publicOrgPathData,
    },
  })

  let data = new Socials().data
  let langs = new Socials().langs
  console.log('data', data)
  console.log('langs', langs)
}
