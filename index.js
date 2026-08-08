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
  // 演示集:后台端 + 手机端 蓝图组(星云演示令牌)。接入真实项目后,替换成目标项目自己的登记。
  { id: "grp-admin", title: "后台端",
    children: [
      { id: "admin-login",     title: "后台端 · 登录",     file: "demo/admin-login-blueprint.html",     version: "v1", updated: "2026-08-08" },
      { id: "admin-dashboard", title: "后台端 · 工作台",   file: "demo/admin-dashboard-blueprint.html", version: "v1", updated: "2026-08-08" },
      { id: "admin-list",      title: "后台端 · 订单列表", file: "demo/admin-list-blueprint.html",      version: "v1", updated: "2026-08-08" },
      { id: "admin-settings",  title: "后台端 · 设置",     file: "demo/admin-settings-blueprint.html",  version: "v1", updated: "2026-08-08" }
    ] },
  { id: "grp-mobile", title: "手机端",
    children: [
      { id: "mobile-home",   title: "手机端 · 首页",     file: "demo/mobile-home-blueprint.html",   version: "v1", updated: "2026-08-08" },
      { id: "mobile-list",   title: "手机端 · 商品列表", file: "demo/mobile-list-blueprint.html",   version: "v1", updated: "2026-08-08" },
      { id: "mobile-detail", title: "手机端 · 商品详情", file: "demo/mobile-detail-blueprint.html", version: "v1", updated: "2026-08-08" }
    ] }
];

/* ══════════════════════════════════════════════════════════
   常用画布尺寸参考 —— 纯参考注册表,不驱动任何 UI。
   生成蓝图时按目标端从里面挑一个尺寸,填到 h1 标题旁的
   「画布 W×H」徽标上(页面渲染非 1:1,徽标给出真实画布宽高)。
   增删改请先想清楚:后台端 / 手机端 / 平板端 各留哪些常用尺寸。
   ══════════════════════════════════════════════════════════ */
var ADAPT_PRESETS = [
  { id: "admin",  title: "后台端常用尺寸", items: [
    { label: "1920×1080", w: 1920, h: 1080 },
    { label: "1440×900",  w: 1440, h: 900  }
  ]},
  { id: "mobile", title: "手机端常用尺寸", items: [
    { label: "390×844",   w: 390,  h: 844  },
    { label: "375×667",   w: 375,  h: 667  }
  ]},
  { id: "tablet", title: "平板端常用尺寸", items: [
    { label: "768×1024",  w: 768,  h: 1024 },
    { label: "820×1180",  w: 820,  h: 1180 }
  ]}
];
