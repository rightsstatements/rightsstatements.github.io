const fs = require("fs")
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

const writeConf = async () => {
  console.log(process.env)
  const { CMS_REPO, CMS_BRANCH } = process.env

  if (CMS_REPO && CMS_BRANCH) {
    const config = await readFile('./admin/config.yml', 'utf8')
    let replacedConfig = config
      .replace('${CMS_REPO}', CMS_REPO)
      .replace('${CMS_BRANCH}', CMS_BRANCH)
    await writeFile('./admin/config.yml', replacedConfig)
    console.info("Configuration replaced")
  } else {
    console.info("The configuration was not replaced")
  }
}

writeConf()