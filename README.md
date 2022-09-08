# resume

## 该项目已被迁移至 [resume.me](https://github.com/Nauxscript/resume.me)，并基于 Astro + Unocss 重构，本项目不再更新，仅作纪念，光阴似箭啊。

#### 介绍

这是一份 Naux 的简历，欢迎指教。
简历基于 VanillaJS（哈哈哈） + Tailwind CSS 搭建，已完成了基本样式编写、移动端响应式、深色模式...等等，简简单单舒舒服服。

#### 功能 & 支持

1. 支持 PC 端
2. 支持移动端浏览
3. 支持深色模式
4. 支持页面打印
5. 简历内项目内容支持 `Markdown` 文件或 `HTML` 语法
6. 支持基于配置文件生成项目（适合无前端代码经验的朋友使用）
7. 使用 `Gihub Action` 进行 `CD/CI`

#### 安装 / 修改简历教程

1.  clone 本仓库
2.  在项目根目录 执行 `npm install`
3.  在项目根目录 执行 `npm run dev` 即可查看具体效果
4.  修改简历 **内容** 请直接页面在 `src/resume.config.js` 中更改（非二次开发）
5.  刷新网页，查看最新页面效果

#### 一点点 Tip (for 二次开发)

1.  修改项目前请先了解一下 **Tailwind CSS** 与 **EJS** 的基本语法
2.  项目中的图标为 Tailwind CSS 官方提供的 SVG Icon（除了 gitee 的 icon）；用 SVG 是因为省事（懒）。