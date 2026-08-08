# quick-design · 设计稿

**语言 / Language:** [English](https://github.com/simple-code4ai/quick-design-en)

**在线体验(Live demo):** [simple-code4ai.github.io/quick-design](https://simple-code4ai.github.io/quick-design/)(蓝图浏览器,点左栏条目可交互预览)

一个 Claude Code Skill:把一句话需求变成**可点的交互式 HTML 设计稿**。

单文件、浏览器直开、零依赖。它叫「可交互蓝图」——用项目真实设计令牌渲染、关键行为能上手点,既是设计文档也是可操作原型。

## 安装

**一行命令(推荐,需 Node.js 环境)**

直接从 GitHub 拉取、装成干净副本(安装物不含 `.git`)。

```bash
npx skills add -g simple-code4ai/quick-design -a claude-code   # 全局(所有项目可用)
npx skills add simple-code4ai/quick-design -a claude-code      # 项目级(仅当前项目)
```

> `-a claude-code` 指定装成真实文件而非符号链接(Windows 上更稳);要装给其它 agent(如 Cursor / Codex),换成对应名字。升级:`npx skills update quick-design`。

**手动安装(备选,无需 Node.js,用 git)**

直接 `git clone` 到目标位置(git 会自动创建父目录;克隆保留 `.git`,升级用 `git pull`):

```bash
git clone https://github.com/simple-code4ai/quick-design.git ~/.claude/skills/quick-design      # 全局(所有项目可用)
git clone https://github.com/simple-code4ai/quick-design.git .claude/skills/quick-design        # 项目级(仅当前项目)
```

> 升级:`git -C ~/.claude/skills/quick-design pull`。项目级安装是**本机专属**,换机器 / 重新 clone 后需重跑,或把 `.claude/skills/` 提交进项目共享。

> 注:设置了环境变量 `CLAUDE_CONFIG_DIR` 时,`~/.claude` 整体被它替代。

重启 Claude Code 会话即可。

## 触发

对话里说:

> **可交互蓝图:设置页 —— 固定分组骨架 + 状态驱动表单,左栏导航可切换**

含 **设计稿 / 原型 / 蓝图 / 可交互蓝图** 等词的界面需求都会命中。

## 用法

一次完整流程:

1. **触发** → Claude 读你的项目(设计令牌 / 架构文档 / 真实数据),准备起手
2. **定目录(初始化)** → 首次先问用户「设计文件目录放哪」——项目根目录、或与 `docs/` 同级的子目录,由你定;确定后记入项目 `CLAUDE.md`,下次自动复用
3. **初始化** → 把 `index.html`(索引页)+ `index.js`(登记清单)+ `template.html`(起手模板)复制到该目录
4. **生成** → 从 `template.html` 起手产出蓝图,落盘到该目录(`<界面名>-blueprint.html`)
5. **登记** → 每次生成后,AI 把节点追加进该目录 `index.js` 的 `BLUEPRINTS`(蓝图叶子或文件夹,支持树形分组;先读现有,合并追加,不重建)
6. **浏览** → 打开设计目录的 `index.html`:左文件树列出设计稿(文件夹可折叠),点条目右侧 iframe 预览,蓝图内交互可点

改稿 = 新一轮,自动 bump 版本号;说「定稿」→ 决策沉淀进对应架构文档。

## 目录

| 文件 | 作用 |
|------|------|
| `SKILL.md` | skill 入口(触发词 + 5 步工作流 + 登记规则 + 自检) |
| `DEFINITION.md` | 完整规格:11 部件结构 / 令牌铁律 / 固定骨架+动态区块 / 迭代规则 |
| `template.html` | 起手模板(新蓝图从它复制,换令牌、替换示例界面) |
| `index.html` | 蓝图索引页(左文件树 + 右 iframe 预览,文件夹可折叠;清单来自 `index.js`) |
| `index.js` | 登记清单(`var BLUEPRINTS = [...]`,支持文件夹分组;另有 `ADAPT_PRESETS` 常用画布尺寸参考(纯注册表,生成蓝图时填「画布 W×H」徽标);内置一条默认示例,由 AI 生成后登记) |

## 原则

> **只是一个简单规范,不做大。** 产物 = 单文件 HTML;浏览 = 一个索引页;登记 = 一个 index.js。
> 完整规格见 `DEFINITION.md`。

## 许可证

[Apache License 2.0](LICENSE)(宽松协议:可商用、可修改、可再分发,需保留版权声明;衍生作品无需强制开源)。
