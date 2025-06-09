# Teacher AI App (教师AI助手应用)

这是一个使用 Next.js 构建的AI教师助手应用程序。它旨在提供一个平台，让教师可以利用AI进行备课、与AI对话以及管理班级等。

## ✨ 功能特性 (规划中)

*   用户登录与注册 (手机号验证码)
*   AI对话界面
*   仪表盘，包含快速操作入口
*   班级管理模块
*   从试题图片或知识点生成教学内容

## 🛠️ 技术栈

*   **框架:** [Next.js](https://nextjs.org/) (使用 App Router)
*   **UI库:** [React](https://reactjs.org/)
*   **样式:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI组件:** [shadcn/ui](https://ui.shadcn.com/)
*   **图标:** [Lucide React](https://lucide.dev/)

## 📋 先决条件

在开始之前，请确保您的开发环境中安装了以下软件：

*   [Node.js](https://nodejs.org/) (建议使用 LTS 版本，例如 v18.x 或 v20.x)
*   npm (通常随 Node.js 一起安装) 或 yarn / pnpm

## 🚀 开始使用

按照以下步骤在您的本地计算机上设置和运行项目：

1.  **克隆仓库 (如果您已将项目上传到 Git):**
    ```bash
    git clone <您的仓库URL>
    cd teacher-ai-app 
    ```
    如果您是直接在我提供的步骤基础上创建的项目，可以跳过克隆步骤，直接进入项目目录 `cd teacher-ai-app`。

2.  **安装依赖项:**
    打开终端，进入项目根目录，然后运行以下命令之一 (取决于您使用的包管理器):
    ```bash
    npm install
    # 或者
    # yarn install
    # 或者
    # pnpm install
    ```

3.  **环境变量 (如果需要):**
    如果项目将来需要连接到数据库或外部API服务，您可能需要创建一个 `.env.local` 文件，并在其中配置必要的环境变量。目前，我们的项目还没有配置这些。
    例如:
    ```env
    # .env.local
    # DATABASE_URL="your_database_connection_string"
    # OPENAI_API_KEY="your_openai_api_key"
    ```

4.  **运行开发服务器:**
    安装完依赖后，运行以下命令来启动开发服务器：
    ```bash
    npm run dev
    # 或者
    # yarn dev
    # 或者
    # pnpm dev
    ```
    应用默认会在 [http://localhost:3000](http://localhost:3000) 上运行。在浏览器中打开此地址即可看到应用。

    *   默认情况下，您会被重定向到登录页面 (`/login`)。
    *   在登录页面提交表单后（目前是模拟登录），您会被重定向到仪表盘 (`/dashboard`)。

## 🏗️ 构建生产版本

当您准备好部署应用时，可以构建生产优化版本：

1.  **构建应用:**
    ```bash
    npm run build
    ```
    此命令会在 `.next` 文件夹中生成生产版本的应用。

2.  **启动生产服务器:**
    ```bash
    npm start
    ```
    此命令会启动一个为生产环境优化的服务器来运行您构建的应用。

## 📂 项目结构 (简要)

*   `app/`: 包含应用的所有路由、页面和布局 (使用 Next.js App Router)。
    *   `app/layout.js`: 全局根布局。
    *   `app/page.js`: 应用的根页面 (主页)。
    *   `app/login/page.js`: 登录页面。
    *   `app/dashboard/`: 包含仪表盘相关的页面和布局。
*   `components/`: 包含可复用的UI组件 (特别是通过 shadcn/ui 添加的组件)。
*   `public/`: 存放静态资源，如图片、字体等。
*   `tailwind.config.js`: Tailwind CSS 的配置文件。
*   `next.config.js`: Next.js 的配置文件。
