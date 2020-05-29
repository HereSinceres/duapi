import Table from "cli-table3";
import { getConfig } from "./configure";
import { searchApi } from "./api";
export async function search(args) {
  const title = args.title || args.t;
  const data = await searchApi(title);
  let head = ["productId", "spuId", "title", "subTitle", "price", "soldNum"];
  const table = new Table({
    head: head,
    colWidths: [15, 23, 18, 7],
    wordWrap: true,
  });
  data.forEach((element) => {
    let arr = [];
    table.push([
      element["productId"],
      element["spuId"],
      element["title"],
      element["subTitle"],
      element["price"],
      element["soldNum"],
    ]);
  });
  console.log(table.toString());
}
