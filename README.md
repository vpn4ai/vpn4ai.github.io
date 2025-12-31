# vpn4ai

一个基于 **Eleventy (11ty)** 的静态站点项目，用于发布 VPN 推荐与测评内容。

- 站点内容位于 `src/`
- 构建产物输出到 `_site/`

## 本地开发

### 环境要求

- Node.js 18+（建议使用 LTS）
- npm 9+

### 安装依赖

```bash
npm install
```

### 本地预览

```bash
npm run start
```

如你的 `package.json` 未提供 `start` 脚本，也可以使用：

```bash
npx eleventy --serve
```

### 构建

```bash
npm run build
```

构建成功后静态文件位于：

- `_site/`

## 目录结构

- `src/`：站点源文件
  - `_includes/`：Nunjucks 模板（如 `base.njk`）
  - `_data/`：全站数据（如跳转/联盟链接配置等）
  - `assets/`：CSS/静态资源
  - `recommend/`：推荐页
  - `posts/*-review/`：各 VPN 测评页
- `.eleventy.js`：Eleventy 配置
- `src/robots.txt`：爬虫规则
- `src/sitemap.xml.njk`：站点地图模板（构建生成 `/_site/sitemap.xml`）

## 部署到 Cloudflare Pages（推荐）

### 方式一：Git 集成自动部署（最推荐）

1. 在 Cloudflare 控制台进入：**Workers & Pages** -> **Pages** -> **Create a project**
2. 选择 **Connect to Git** 并选择仓库
3. 构建设置建议如下：

- **Framework preset**：Eleventy
- **Build command**：`npm run build`
- **Build output directory**：`_site`

4. 部署成功后绑定自定义域名（可选）：

- Pages 项目 -> **Custom domains** -> Add

### 方式二：Direct Upload

本地执行 `npm run build` 后，将 `_site/` 作为静态产物上传。

## SEO 相关说明

- `robots.txt`：发布后应可访问：`/robots.txt`
- `sitemap.xml`：发布后应可访问：`/sitemap.xml`
- `src/_includes/base.njk`：包含站点级结构化数据（JSON-LD）等 SEO 基础配置

## 常用排查

- **sitemap/robots 是否可访问**：打开线上 `/sitemap.xml`、`/robots.txt`
- **页面是否被错误缓存**：Cloudflare Pages 默认对 HTML 处理合理，通常无需额外强缓存配置
- **构建失败**：优先查看 Cloudflare Pages 的 Build Logs

## License

如需开源许可证请按实际情况补充。
