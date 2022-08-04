<div align="center">
  <img alt="Logo" src="https://github.com/pycoder2000/blog/raw/master/public/static/images/logo.png" width="100" />
</div>

<h1 align="center">
  Knowledge Base
</h1>

<p align="center">
  <em>Base</em> is my personal knowledge base. I made this project to have a place where I can put my personal documentations / notes / any references which works for me. 
</p>

<p align="center">
It is a static site build on top of <a href="https://notion.so" target="_blank">Notion</a> and <a href="https://nextjs.org/" target="_blank">Next.js</a>, deployed on <a href="https://vercel.com?utm_source=Craigary&utm_campaign=oss" target="_blank">Vercel</a>.
</p>

<div align="center">

<a href="https://kbase.vercel.app/" target="blank" >![View Demo](https://img.shields.io/badge/-View%20Demo%20-orange?color=%23DE1D8D&style=for-the-badge)</a> <img src="https://img.shields.io/github/stars/pycoder2000/base?color=orange&style=for-the-badge"> <a aria-label="GitHub commit activity" href="https://github.com/pycoder2000/base/commits/main" title="GitHub commit activity"><img src="https://img.shields.io/github/commit-activity/m/pycoder2000/base?style=for-the-badge"></a> <a aria-label="Build status" href="#" title="Build status"><img src="https://img.shields.io/github/deployments/pycoder2000/base/Production?logo=Vercel&style=for-the-badge"></a>

</div>

![demo](https://github.com/pycoder2000/base/raw/main/desktop.png?raw=true)

# Highlights ✨

## ⚡ Fast and responsive

- Fast page render and responsive design
- Fast static generation with efficient compiler

## 🚀 Deploy instantly

- Deploy on Vercel in minutes
- Incremental regeneration and no need to redeploy after update the content in notion

## 🔩 Fully functional

- Comments, full width page, quick search and tag filter
- RSS, analytics, web vital... and much more

## 🛠️ Easy for customization

- Rich config options, support English & Chinese interface
- Built with Tailwind CSS, easy for customization

# Quick Start

- Star this repo 😉
- Duplicate [this Notion template](https://craigary.notion.site/adc3552cfc73442ab5048d4b1eb0079a), and share it to the public
- [Fork](https://github.com/pycoder2000/base/fork) this project
- Customize `blog.config.js`
- _(Optional)_ Replace `favicon.svg`, and `favicon.ico` in `/public` folder with your own
- Deploy on [Vercel](https://vercel.com), set following environment variables：
  - `NOTION_PAGE_ID` (Required): The ID of the Notion page you previously shared to the web, usually has 32 digits after your workspace address
  - `NOTION_ACCESS_TOKEN` (Optional, not recommended): If you decide not to share your database, you can use token to let Nobelium grab data from Notion database. You can find it in your browser cookies called `token_v2`
  - `NOTION_PROJECT_PAGE_ID`, `NOTION_HIGHLIGHT_PAGE_ID` & `NOTION_TWEET_PAGE_ID` are extra pages that you can remove manually.
    - Keep in mind Notion token is only valid for 180 days, make sure to update manually in vercel dashboard, we probably switch to Official API to resolve this issue in the future. Also, images in Notion database will not properly rendered
- **That's it!**

<details><summary>Wait for a sec, what is Page ID？</summary>
  <img src="https://github.com/pycoder2000/base/blob/main/pageid.png?raw=true">
</details>

# 📱 Technical details

- **Generation**: Next.js and Incremental Static Regeneration
- **Page render**: react-notion-x
- **Style**: Tailwind CSS and `@tailwindcss/jit` compiler
- **Comments**: Gitalk, Cusdis and more
