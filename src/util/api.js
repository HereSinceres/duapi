var exec = require("./exec");
var getQueryStr = require("./getQuery");
const sign = require("./sign");

export async function searchApi(title) {
  const queryStr = getQueryStr({
    title: title || "aj",
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
export async function detailApi(spuId) {
  let signId = sign({
    spuId: spuId,
    productSourceName: "",
    propertyValueId: "0",
  });
  let cmdStr = `curl -H 'Host: app.poizon.com' -H 'content-type: application/json' -H 'appid: wxapp' -H 'accept: */*' -H 'appversion: 4.4.0' -H 'accept-language: zh-cn' -H 'user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.11(0x17000b21) NetType/WIFI Language/zh_CN' -H 'referer: https://servicewechat.com/wx3c12cdd0ae8b1a7b/94/page-frame.html' -H 'wxapp-login-token: c6058174|42eeb0c170d1846326a53866ff9f254f|441cd128|b022d0b4' --data-binary '{"sign":"${signId}","spuId":"${spuId}","productSourceName":"","propertyValueId":"0"}' --compressed 'https://app.poizon.com/api/v1/h5/index/fire/flow/product/detail'`; //https://app.poizon.com/api/v1/h5/index/fire/flow/product/detail
  const { stdout, stderr } = await exec(cmdStr);
  return await new Promise((resolve, reject) => {
    resolve(JSON.parse(stdout).data.saleProperties.list);
  });
}
