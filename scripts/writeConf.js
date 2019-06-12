const fs = require("fs")
const url = require("url")
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

const writeConf = async () => {
  const { CMS_REPO, CMS_BRANCH, DEPLOY_URL } = process.env

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
  await writeFile('./netlify.toml', netlifyConfig
    .replace(/\${X_DEPLOY_URL}/g, DEPLOY_URL)
  )
  const updated = await readFile('./netlify.toml', 'utf8')
  console.log("Updated", updated)
}

writeConf()
