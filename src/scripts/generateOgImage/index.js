const chromium = require('chrome-aws-lambda')
const fs = require('fs')
const path = require('path')

module.exports = async (items) => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  })

  const page = await browser.newPage()

  let html = fs
    .readFileSync(path.resolve(__dirname, './template.html'))
    .toString()

  let avatar = fs.readFileSync(path.resolve(__dirname, './avatar.jpeg'), {
    encoding: 'base64',
  })
  html = html.replace(
    './avatar.jpeg',
    `data:image/jpg;charset=utf-8;base64,${avatar}`
  )

  let font = fs.readFileSync(path.resolve(__dirname, './Rubik-Bold.ttf'), {
    encoding: 'base64',
  })
  html = html.replace(
    "'./Rubik-Bold.ttf'",
    `data:application/x-font-ttf;charset=utf-8;base64,${font}`
  )

  await page.setContent(html, {
    waitUntil: ['domcontentloaded'],
  })

  await page.evaluateHandle('document.fonts.ready')

  await page.setViewport({
    width: 1200,
    height: 632,
    deviceScaleFactor: process.env.NETLIFY === 'true' ? 1 : 2,
  })

  const dir = path.resolve(__dirname, '../../../dist/assets/og-images')
  console.log(dir)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir)

  while (items.length) {
    const item = items.pop()
    let usedPath = item.path
    if (item.path === '/') {
      usedPath = '/index'
    }

    const imagePath = `${dir}/${usedPath.replace(/\//g, '')}.jpeg`

    const title = item.rendered
      .split('<title>')[1]
      .split('</title>')[0]
      .replace('')
      .replace('undefined', '')
      .replace(' · Markus Siering', '')

    // Update the H1 element with the post title
    await page.evaluate((title) => {
      const element = document.querySelector('#title')
      element.innerHTML = title
    }, title)

    // Save a screenshot to public/og-images/slug-of-post.jpeg
    await page.screenshot({
      path: imagePath,
      type: 'jpeg',
      quality: 100,
      clip: { x: 0, y: 0, width: 1200, height: 632 },
    })

    console.log(
      '📸 ☑️ Generated og-image for: ',
      item.path,
      'saved as',
      imagePath
    )
  }

  await browser.close()
}
