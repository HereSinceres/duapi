var exec = require("./util/exec");
var getQueryStr = require("./util/getQuery");

export async function searchApi(title) {
  const queryStr = getQueryStr({
    title: title || 'aj',
    page: 0,
    limit: 20,
    showHot: -1,
    sortType: 1,
    sortMode: 1,
    unionId: "",
  });
  let cmdStr = `curl -H 'Host: app.poizon.com' -H 'accept: */*' -H 'content-type: application/x-www-form-urlencoded' -H 'referer: https://servicewechat.com/wx3c12cdd0ae8b1a7b/117/page-frame.html' -H 'appid: wxapp' -H 'appversion: 4.4.0' -H 'wxapp-login-token: 3f885cf3|5805b23362561089694d1976c3f2ea84|1843f86c|13d7302d' -H 'accept-language: zh-cn' -H 'user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.12(0x17000c2f) NetType/WIFI Language/zh_CN' --compressed 'https://app.poizon.com/api/v1/h5/search/fire/search/list?${queryStr}'`;

  const { stdout, stderr } = await exec(cmdStr);
  return await new Promise((resolve, reject) => {
    resolve(JSON.parse(stdout).data.productList);
  });
}
