# PaywallBuster 

一个功能完整的付费墙移除工具聚合器，帮助用户突破新闻网站的付费墙限制。本项目是对 [PaywallBuster](https://paywallbuster.me/) 的完整复刻，提供相同的用户体验和功能。

## 🚀 功能特性

- **多服务聚合** — 集成 5 个主流付费墙移除服务：
  - Archive.is — 网页存档服务
  - Internet Archive — 互联网档案馆
  - Smry.ai — AI 摘要工具
  - 12ft.io — 付费墙绕过工具
  - Google Cache — 谷歌缓存

- **双语支持** — 完整的中文和英文界面，支持实时语言切换

- **社交分享** — 支持分享到 Facebook、Twitter、Reddit、WhatsApp 和邮件

- **复制链接** — 一键复制处理后的文章链接

- **常见问题** — 详细的 FAQ 部分，解答用户疑问

## 📋 技术栈

- **前端框架** — React 19 + TypeScript
- **构建工具** — Vite 7
- **样式方案** — Tailwind CSS 4 + shadcn/ui
- **路由管理** — Wouter
- **包管理** — pnpm
- **部署平台** — Vercel

## 🛠️ 本地开发

### 前置要求

- Node.js >= 18.0.0
- pnpm >= 10.4.1

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

开发服务器将在 `http://localhost:3000` 启动。

### 构建生产版本

```bash
pnpm build
```

构建输出将生成在 `dist/public` 目录。

### 预览生产构建

```bash
pnpm preview
```

### 类型检查

```bash
pnpm check
```

### 代码格式化

```bash
pnpm format
```

## 📁 项目结构

```
paywallbuster-replica/
├── client/
│   ├── src/
│   │   ├── pages/              # 页面组件
│   │   │   ├── Home.tsx        # 首页
│   │   │   └── Articles.tsx    # 文章处理页面
│   │   ├── components/         # 可复用组件
│   │   │   └── ui/             # shadcn/ui 组件
│   │   ├── contexts/           # React Context
│   │   │   └── LanguageContext.tsx  # 语言管理
│   │   ├── hooks/              # 自定义 Hooks
│   │   ├── lib/                # 工具函数
│   │   ├── App.tsx             # 应用入口
│   │   ├── main.tsx            # React 挂载点
│   │   └── index.css           # 全局样式和主题
│   ├── public/                 # 静态资源
│   └── index.html              # HTML 模板
├── shared/                     # 共享类型定义
├── patches/                    # pnpm 补丁
├── package.json                # 项目配置
├── vite.config.ts              # Vite 配置
├── vercel.json                 # Vercel 部署配置
├── tsconfig.json               # TypeScript 配置
└── README.md                   # 本文件
```

## 🎨 设计特点

- **现代化界面** — 采用简洁的设计风格，提供优秀的用户体验
- **响应式设计** — 完全支持移动设备、平板和桌面端
- **深色模式** — 内置深色模式支持（可通过 ThemeProvider 启用）
- **无障碍设计** — 遵循 WCAG 标准，确保所有用户都能使用

## 🌐 部署指南

### Vercel 部署（推荐）

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. **连接 Vercel**
   - 访问 [Vercel 官网](https://vercel.com)
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 自动检测 Vite 框架
   - 点击 Deploy

3. **配置自定义域名**
   - 在 Vercel 项目设置中进入 Domains
   - 添加自定义域名
   - 按照提示配置 DNS 记录

### 环境变量

当前项目无需环境变量。如需添加，在 Vercel 项目设置中的 Environment Variables 部分配置。

## 📝 功能说明

### 首页 (Home)

- **Hero Section** — 展示项目介绍和主要价值主张
- **URL 输入框** — 用户输入需要处理的文章链接
- **功能卡片** — 展示三个主要功能特性
- **FAQ 部分** — 回答常见问题
- **快捷指令** — iOS Shortcut 下载链接

### 文章处理页面 (Articles)

- **服务按钮** — 5 个不同的付费墙移除服务选择
- **预览窗口** — 显示选定服务的处理结果
- **分享功能** — 支持多个社交平台分享
- **复制链接** — 一键复制处理后的链接
- **返回按钮** — 返回首页进行新的查询

## 🌍 原始项目参考

本项目基于 [PaywallBuster](https://paywallbuster.me/) 的设计和功能进行复刻。原始项目提供了灵感和功能参考。

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进项目。

## 📞 支持

如有问题或建议，请通过以下方式联系：

- 提交 GitHub Issue
- 发送邮件至项目维护者

## 🔄 更新日志

### v1.0.0 (2026-03-07)

- ✅ 完成项目初始化
- ✅ 实现双语支持（中文/英文）
- ✅ 集成 5 个付费墙移除服务
- ✅ 实现社交分享功能
- ✅ 创建 FAQ 部分
- ✅ 优化 Vercel 部署配置
- ✅ 移除所有 Manus 依赖
- ✅ 生成 pnpm-lock.yaml

## 🎯 未来计划

- [ ] 添加更多付费墙移除服务
- [ ] 实现用户历史记录功能
- [ ] 添加浏览器扩展版本
- [ ] 支持更多语言
- [ ] 添加服务健康检查指示器
- [ ] 实现用户反馈系统

---

**项目状态**：✅ 生产就绪

**最后更新**：2026-03-07

**部署链接**：https://paywallbuster.me/
