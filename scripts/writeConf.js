const fs = require("fs")
const url = require("url")
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

const writeConf = async () => {
  const { HEAD, REPOSITORY_URL, DEPLOY_URL } = process.env
  console.log(REPOSITORY_URL)
  const repo = (REPOSITORY_URL && REPOSITORY_URL.split('@')[1].replace("github.com/", '')) || null

  if (HEAD && repo) {
    const netlifyCmsConfig = await readFile('./admin/config.yml', 'utf8')
    await writeFile('./admin/config.yml', netlifyCmsConfig
      .replace('${CMS_REPO}', repo)
      .replace('${CMS_BRANCH}', HEAD)
    )
    console.info("Configuration replaced")
  } else {
    console.info("The configuration was not replaced")
  }

  const netlifyConfig = await readFile('./netlify.toml', 'utf8')
  await writeFile('./netlify.toml', netlifyConfig.replace(/\${X_DEPLOY_URL}/g, DEPLOY_URL))
  const updated = await readFile('./netlify.toml', 'utf8')
  console.log("Updated", updated)
}

writeConf()
