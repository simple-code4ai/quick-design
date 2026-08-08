/* ══════════════════════════════════════════════════════════
   蓝图登记清单 —— 由 AI(skill)维护。
   每次生成/修改蓝图后,读本文件现有节点,把新节点追加进 BLUEPRINTS,勿整体重建。
   树形结构,两种节点(任意嵌套,镜像文件树):
     - 蓝图(叶子):{ id, title, file, version, updated }
     - 文件夹:    { id, title, children: [ ... ] }
     file: 相对本文件所在目录的相对路径(可含子目录)
   本文件是纯 JS(index.html 用 <script src="index.js"> 加载):
   file:// 下不能 fetch,script 加载是唯一可靠方式。
   ══════════════════════════════════════════════════════════ */
var BLUEPRINTS = [
  // 默认示例条目:模板起手稿本身就是可点的演示。生成真实蓝图后,删掉本条即可。
  { id: "example-template", title: "示例 · 起手模板(可点,生成真实蓝图后删)",
    file: "template.html", version: "v1", updated: "2026-08-08" }
];
