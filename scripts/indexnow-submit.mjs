#!/usr/bin/env node
/**
 * Submit URLs to IndexNow (Bing, Yandex, Naver, Seznam, ...).
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs                      # submit all sitemap URLs
 *   node scripts/indexnow-submit.mjs https://voidimageviewer.com/download
 *   node scripts/indexnow-submit.mjs --dry-run            # validate without sending
 *
 * The key lives in indexnow.key and is served at /<key>.txt from public/.
 * Run this after deploying so the key file is reachable.
 */

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const SITE = 'https://voidimageviewer.com'
const API = 'https://api.indexnow.org/indexnow'
const key = readFileSync(resolve('indexnow.key'), 'utf8').trim()
const keyLocation = `${SITE}/${key}.txt`

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const explicitUrls = args.filter((a) => !a.startsWith('--'))

async function getSitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`)
  if (!res.ok) throw new Error(`Could not fetch sitemap: ${res.status} ${res.statusText}`)
  const xml = await res.text()
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
  if (!urls.length) throw new Error('No URLs found in sitemap')
  return urls
}

async function submit(urls) {
  const body = JSON.stringify({
    host: new URL(SITE).host,
    key,
    keyLocation,
    urlList: urls,
  })

  if (dryRun) {
    console.log(`[dry-run] Would POST ${urls.length} URL(s) to ${API}`)
    console.log(`[dry-run] keyLocation: ${keyLocation}`)
    console.log(`[dry-run] body: ${body}`)
    return
  }

  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  })
  console.log(`IndexNow responded ${res.status} ${res.statusText}`)
  if (res.status === 200 || res.status === 202) {
    console.log(`Submitted ${urls.length} URL(s) successfully.`)
  } else {
    console.error(await res.text())
    process.exitCode = 1
  }
}

const urls = explicitUrls.length ? explicitUrls : await getSitemapUrls()
console.log(`IndexNow: ${urls.length} URL(s) to submit, key ${key}`)
await submit(urls)
