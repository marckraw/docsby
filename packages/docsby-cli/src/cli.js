var shell = require('shelljs');

export function cli(args) {
    console.log(args);
    const onlyCmds = args.slice(2);
    const npmCmdToExecute = "npm run " + onlyCmds.join(" ");
    shell.exec(npmCmdToExecute);
}