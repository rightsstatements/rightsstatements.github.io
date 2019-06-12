const fs = require("fs")
const url = require("url")
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

const writeConf = async () => {
  const { CMS_REPO, CMS_BRANCH, DEPLOY_URL, URL } = process.env

  if (CMS_REPO && CMS_BRANCH) {
    const netlifyCmsConfig = await readFile('./admin/config.yml', 'utf8')
    await writeFile('./admin/config.yml', netlifyCmsConfig
      .replace(/\${CMS_REPO}/g, CMS_REPO)
      .replace(/\${CMS_BRANCH}/g, CMS_BRANCH)
    )
    console.info("Configuration replaced")
  } else {
    console.info("The configuration was not replaced")
  }

  const netlifyConfig = await readFile('./netlify.toml', 'utf8')
  const X_FORWARDED_URL = url.parse(DEPLOY_URL || URL)
  console.log(X_FORWARDED_URL)
  await writeFile('./netlify.toml', netlifyConfig
    .replace(/\${X_FORWARDED_HOST}/g, X_FORWARDED_URL.host)
    .replace(/\${X_FORWARDED_PROTO}/g, X_FORWARDED_URL.protocol.slice(0, -1))
  )
  const updated = await readFile('./netlify.toml', 'utf8')
  console.log("Updated", updated)
}

writeConf()
