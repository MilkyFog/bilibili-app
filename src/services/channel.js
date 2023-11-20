export default {
  async getChannels() {
    try {
      const resp = await fetch('/x/web-interface/web/channel/category/list')
      const data = await resp.json()
      console.log(data)
      return data.data.categories
    } catch (err) {
      console.log(err)
      const categories = [
        {
          "id": 100,
          "name": "热门",
          "channel_count": "95"
        },
        {
          "id": 0,
          "name": "全部",
          "channel_count": "3786"
        },
        {
          "id": 1,
          "name": "动漫",
          "channel_count": "206"
        },
        {
          "id": 2,
          "name": "游戏",
          "channel_count": "472"
        },
        {
          "id": 3,
          "name": "电竞",
          "channel_count": "51"
        },
        {
          "id": 4,
          "name": "鬼畜",
          "channel_count": "51"
        },
        {
          "id": 5,
          "name": "时尚",
          "channel_count": "35"
        },
        {
          "id": 6,
          "name": "音乐",
          "channel_count": "148"
        },
        {
          "id": 7,
          "name": "科技",
          "channel_count": "47"
        },
        {
          "id": 8,
          "name": "数码",
          "channel_count": "23"
        },
        {
          "id": 9,
          "name": "知识",
          "channel_count": "24"
        },
        {
          "id": 10,
          "name": "动物圈",
          "channel_count": "27"
        },
        {
          "id": 11,
          "name": "美食",
          "channel_count": "43"
        },
        {
          "id": 12,
          "name": "虚拟UP主",
          "channel_count": "16"
        },
        {
          "id": 13,
          "name": "明星",
          "channel_count": "847"
        },
        {
          "id": 14,
          "name": "舞蹈",
          "channel_count": "25"
        },
        {
          "id": 15,
          "name": "生活",
          "channel_count": "83"
        },
        {
          "id": 16,
          "name": "综艺",
          "channel_count": "49"
        },
        {
          "id": 17,
          "name": "电影",
          "channel_count": "79"
        },
        {
          "id": 18,
          "name": "电视剧",
          "channel_count": "113"
        },
        {
          "id": 19,
          "name": "相声",
          "channel_count": "15"
        },
        {
          "id": 20,
          "name": "特摄",
          "channel_count": "17"
        },
        {
          "id": 21,
          "name": "运动",
          "channel_count": "68"
        },
        {
          "id": 22,
          "name": "星海",
          "channel_count": "7"
        }
      ]
      return categories
    }
  }
}