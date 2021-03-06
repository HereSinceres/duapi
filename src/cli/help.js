import chalk from "chalk";

const menus = {
  main: `
${chalk.greenBright("duapi [command] <options>")}
  ${chalk.blueBright("search")} ................ duapi search -t=yezzy
  ${chalk.blueBright("detail")} ................ 商品详情（i使用search之后的supId）  duapi detail -i=20   
  ${chalk.blueBright("version")} ................ 
  ${chalk.blueBright("help")} ............... show help menu for a command
`,
 
  search: `// duapi search -t=yezzy
        `,
};

export async function help(args) {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];
  console.log(menus[subCmd] || menus.main);
}
