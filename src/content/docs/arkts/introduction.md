---
title: 插件介绍
sidebar:
  order: 1
---

长久以来，鸿蒙开发只能在 `DevEco Studio` 中进行，而 `DevEco Studio` 的一些体验可能对一些人来说不是特别友好，毕竟它是基于 `idea` 系列的 IDE 二开的；同时，鸿蒙的开发语言 `ArkTS` 本身是基于 `TypeScript` Fork 二开出来的，而 `vscode` 本身也是基于 `TypeScript` 开发的，进而使我萌生出在 `vscode` 中开发鸿蒙项目的想法，并尝试研究它的可行性。

目前，实践证明，这一切是行得通的，目前该插件仍然在积极开发中，并且已经取得了一定的成果，目前已经支持以下功能：

- 1.x版本开始具备完整的`ArkTS`语言支持，全量支持所有`ArkTS`语法，包括各种 `代码补全`、`代码高亮`、`引用跳转`、`错误提示`、`代码格式化` 等完备的语言功能；
- 完善的`JSON Schema`支持。支持以下文件的`JSON Schema`：
  - `build-profile.json5` 模块级别/项目级别配置
  - `oh-package.json5` 模块级别/项目级别配置
  - `module.json5` 模块级别/项目级别配置
  - `code-linter.json5` 模块级别/项目级别配置
  - `resources/element/`下所有的`color.json`、`string.json`等的kv值配置
  - `main_pages.json5`
  - 以及更多!
- 1.x版本开始支持安装和管理`OpenHarmony SDK`，并且支持根据当前打开的项目自动探测`API版本`，发出弹窗提示`下载`或`切换`;
- 1.1.6+ 版本开始支持完美的 `$r` 函数补全和跳转、支持 `module.json5` 文件的补全和跳转、`resources/element/` 下所有`json`文件点击查询全局引用；由 [@arkts/project-detector](https://github.com/ohosvscode/project-detector) hvigor项目分析器提供强力支撑;
- 1.1.8+ 版本开始支持 `module.json5` 文件路径补全和跳转、引用表达式错误诊断、`requestPermissions` 权限补全等一系列新功能。
- 1.3.0+ 版本开始支持任务 `tasks`，支持以下任务：
  - `hdc-install-hap`: 通过 `hdc` 命令安装 `hap` 包到设备上；
  - `hdc-run-ability`: 通过 `hdc` 命令运行设备上已安装应用的 `ability`;
  - `hvigor-assemble-hap`: 通过 `hvigor` 命令编译并组装 `hap` 包。
