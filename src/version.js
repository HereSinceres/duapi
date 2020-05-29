export async function version() {
  const pkgjson = require("../package.json");
  console.log(pkgjson.version || "未知版本");
}
