---
title: 创建任务与调试运行
sidebar:
  order: 5
---

插件在 `1.3.0+` 版本正式支持了几个任务（tasks）:

- `hdc-install-hap`: 通过 `hdc` 命令安装 `hap` 包到设备上；
- `hdc-run-ability`: 通过 `hdc` 命令运行设备上已安装应用的 `ability`;
- `hvigor-assemble-hap`: 通过 `hvigor` 命令编译并组装 `hap` 包。

:::note

在使用任务功能前，您需要先确保您的环境变量中配置了 `hdc` 和 `hvigor` 的命令行路径。

:::

您可以在您的鸿蒙项目根目录创建一个 `.vscode` 文件夹，并在其中创建一个 `tasks.json` 文件，添加以下内容：

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Hvigor AssembleHap",
      "type": "hvigor-assemble-hap",
      "projectRoot": "${workspaceFolder}",
      "moduleName": "entry",
      "productName": "default",
      "problemMatcher": []
    },
    {
      "label": "hdc install",
      "type": "hdc-install-hap",
      "dependsOn": ["Hvigor AssembleHap"],
      "projectRoot": "${workspaceFolder}",
      "moduleName": "entry",
      "productName": "default",
      "problemMatcher": []
    },
    {
      "label": "hdc run",
      "type": "hdc-run-ability",
      "dependsOn": ["hdc install"],
      "problemMatcher": []
    }
  ]
}
```

此时，您就可以打开命令面板，搜索 `运行任务` 并回车，选择您想要运行的任务，即可一键执行。
