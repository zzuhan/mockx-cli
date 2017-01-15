#!/usr/bin/env node
var program = require('commander');

if (process.argv.length <= 2) {
  console.log("欢迎使用mockx命令行工具集！\n通过 mockx-cli --help 查看可用命令");
}

program
  .version(require("./package.json").version)
  .usage("<commands> [argv...]");

program
  .command("init")
  .description("初始化一个mockx服务的目录结构")
  .action(function () {
  	require('./init')
  });

program
  .command("serve")
  .description("启动一个mockx服务，需要使用sudo")
  .action(function () {
  	require('./serve')
  });

program.parse(process.argv);