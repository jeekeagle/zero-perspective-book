# 《视角》 · Zero-Perspective-Book

> 一本关于"镜片"的小书:六副镜片,看清世界。

🔗 在线访问:https://<jeekeagle>.github.io/zero-perspective-book/

## 这是什么

本站是 [zero-perspective-hub](https://github.com/jeekeagle/zero-perspective-hub) 的**精装古籍版本**。
两站**内容完全一致**,但**视觉风格刻意区分** ——

| 站点 | 视觉 | 定位 |
|------|------|------|
| **zero-perspective-hub** | 墨韵宣纸 + 朱砂 + 山水(东方新中式) | 「镜片研究中心」门户 |
| **zero-perspective-book**(本站) | 羊皮纸 + 酒红皮装 + 古铜金(西方精装古籍) | 长篇沉浸式阅读 |

## 写作计划

- **序章** 序言
- **第一卷 · 视角(6 章)** 分类学 / 经济学 / 程序 / 拓扑 / 关系 / 架构
- **第二卷 · 方法(2 章)** 锻造法 / 检验法(撰稿中)
- **第三卷 · 附录** 索引 / 版权页

## 项目结构

```
zero-perspective-book/
├── index.html                  # 封面(hero + 目录预览 + 已收录 + 题记)
├── intro.html                  # 序言(preface)
├── archive.html                # 索引(全部镜片按时间倒序)
├── about.html                  # 版权页(colophon)
├── assets/
│   ├── css/style-book.css      # 视觉系统(羊皮纸/夜读双主题)
│   └── js/main.js              # 主题切换、平滑滚动
├── img/
│   ├── logo.svg                # 烫金 P 圆徽
│   └── favicon.svg             # 站点图标
├── pages/                      # 6 篇视角正文
│   ├── when-models-think.html         # I · 分类学视角
│   ├── skill-economy.html             # II · 经济学视角
│   ├── prompt-as-program.html         # III · 程序视角
│   ├── agent-topology.html            # IV · 拓扑学视角
│   ├── from-tool-to-colleague.html    # V · 关系视角
│   └── notes-on-rag.html              # VI · 架构视角
└── README.md
```

## 设计原则

- 主色:羊皮纸(`#efe5cc` / `#f6ecd2`)+ 酒红皮装(`#6e1f1a`)+ 古铜金(`#a87c30`)
- 字体:Cinzel(章号/装饰)+ Cormorant Garamond(正文)+ EB Garamond Italic(引言)+ JetBrains Mono(代码)
- 装饰:皮装条、烫金角饰、首字下沉、花式分隔符、罗马卷数标记
- 双主题:`parchment`(羊皮纸)/ `night`(夜读)
- 纯静态 HTML + CSS + 极少量 JS,**无构建步骤**

## 本地预览

任意 HTTP 服务器即可:

```bash
python3 -m http.server 8000
# 或
npx http-server -p 8000
```

然后访问 http://localhost:8000

## 部署到 GitHub Pages

1. 在 GitHub 创建仓库 `zero-perspective-book`(公开)
2. 把本目录 push 上去
3. Settings → Pages → Branch: `main` / `/ (root)` → Save
4. 1-2 分钟后访问 https://<jeekeagle>.github.io/zero-perspective-book/

## 许可

- 内容采用 CC BY 4.0
- 代码采用 MIT License

—— Zero · 2026
