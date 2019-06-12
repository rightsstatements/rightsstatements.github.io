const fs = require("fs")
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

const writeConf = async () => {
  const { CMS_REPO, CMS_BRANCH, CMS_DOMAIN, CMS_PROTO } = process.env

  if (CMS_REPO && CMS_BRANCH && CMS_DOMAIN && CMS_PROTO) {
    const config = await readFile('./admin/config.yml', 'utf8')
    let replacedConfig = config
      .replace(/\${CMS_REPO}/g, CMS_REPO)
      .replace(/\${CMS_BRANCH}/g, CMS_BRANCH)
      .replace(/\${CMS_DOMAIN}/g, CMS_DOMAIN)
      .replace(/\${CMS_PROTO}/g, CMS_PROTO)
    await writeFile('./admin/config.yml', replacedConfig)
    console.info("Configuration replaced")
  } else {
    console.info("The configuration was not replaced")
  }
}

writeConf()
