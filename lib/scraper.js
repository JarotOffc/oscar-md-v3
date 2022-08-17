# scraper

Install package
```sh
npm i @bochilteam/scraper
```
Install latest version from github (not recommended)
```sh
npm i github:bochilteam/scraper
```

## Example use
```js
// ESM 
import * as scraper from '@bochilteam/scraper'
// CJS
const scraper = require('@bochilteam/scraper')
```
### Instagram Downloader
```js
// Instagram Downloader
import { 
    instagramdl, 
    instagramdlv2, 
    instagramStory,
    instagramStoryv2
} from '@bochilteam/scraper'
const url = 'https://www.instagram.com/reel/CXK49yFLtJ_/?utm_source=ig_web_copy_link'
instagramdl(url).then(console.log).catch(console.error)
instagramdlv2(url).then(console.log).catch(console.error)
// use both to handle error
instagramdl(url).catch(_ => instagramdlv2(url)).then(console.log)
// Use async/await or top level await
console.log(await instagramdl(url).catch(console.error))
console.log(await instagramdlv2(url).catch(console.error))
// Instagram Story downloader
const username = 'freefirebgid'
const story = await instagramStory(username).catch(async _ => await instagramStoryv2(username))
console.log(story)
```
- `instagramdl` use website https://snapinsta.app, 
- `instagramdlv2` use website https://downloadgram.org
- `instagramdlv3` use website https://downvideo.quora-wiki.com
- `instagramdlv4` use website https://instadownloader.co
- `instagramStory` use website https://storydownloader.app
- `instagramStoryv2` use website https://www.instadp.com [**not working**]


### Tiktok downloader
```js
// Tiktok downloader
import { 
    tiktokdl,
    tiktokdlv2 
} from '@bochilteam/scraper'
// Tiktok downloader v1
const url = 'https://www.tiktok.com/@tiktok/video/6844446901010982300'
tiktokdl(url).then(console.log).catch(console.error)
// tiktokdl v2
tiktokdlv2(url).then(console.log).catch(console.error)
// async / await 
console.log(await tiktokdl(url).catch(console.error))
console.log(await tiktokdlv2(url).catch(console.error))
```
- `tiktokdl` use website https://snaptik.app
- `tiktokdlv2` use website https://api.tikmate.app
- `tiktokdlv3` use website 'https://ssstik.io
- `tiktokfyp` use website https://t.tiktok.com [**Not Working**]

### All in One Downloader
```js
import {
    aiovideodl,
    savefrom,
    snapsave
} from '@bochilteam/scraper'
// Facebook video downloader
console.log(await aiovideodl('https://fb.watch/9WktuN9j-z/'))
// Twitter video downloader
console.log(await aiovideodl('https://twitter.com/jen_degen/status/1458167531869458440?s=20'))

// Tiktok downloader
console.log(await savefrom('https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226'))
// Instagram downloader
console.log(await savefrom('https://www.instagram.com/reel/CXK49yFLtJ_/?utm_source=ig_web_copy_link'))

// Instagram downloader
console.log(await snapsave('https://www.instagram.com/reel/CXK49yFLtJ_/?utm_source=ig_web_copy_link'))
// Facebook video downloader
console.log(await snapsave('https://fb.watch/9WktuN9j-z/'))
```
- `aiovideodl` use website https://aiovideodl.ml [**Not Working**]
- `savefrom` use website https://id.savefrom.net
- `snapsave` use website https://snapsave.app

