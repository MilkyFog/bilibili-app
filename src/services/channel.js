export default {
  async getChannels() {
    const resp = await fetch('/x/web-interface/web/channel/category/list')
    const data = await resp.json()
    console.log(data)
    return data.data.categories
  }
}