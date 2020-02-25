
const axios = require('axios')

const HOME = process.env['HOME']
const homeConfig = require(HOME+'/.dynalist/config')
const t = { 
  token: homeConfig.token
}

const u = 'https://dynalist.io/api/v1/file/list'
const u2 = 'https://dynalist.io/api/v1/doc/read'

const getPage = async (pageName) => { 
  try {
    const resp = await axios.post(u, t)
    const p = resp.data.files.filter( n => n.title===pageName )
    // check for p[0] exists
    const t2 = { ...t, file_id: p[0].id }
    const resp2 = await axios.post(u2, t2)
    return resp2.data
  } catch (err) {
    console.log(`err: ${err}`)
  }
}

module.exports = {
  getPage: getPage
}
