# Hono + Vercel + Drizzle ORM + Neon Deployment Guide 🚀

This tutorial will guide you through setting up a basic API project using **Hono.js**, **Drizzle ORM**, and **Neon Postgres** and deploying it on **Vercel**. Follow along for a smooth, beginner-friendly experience!

---

## Project Setup

1. **Get Started with Hono:**
   - Use the [Hono.js documentation](https://hono.dev/docs/) for the initial project setup.
   - Initialize a basic Hono project (or start with `hono-starter` if available).

2. **Add Drizzle ORM:**
   - Install and configure Drizzle ORM by following their [official documentation](https://orm.drizzle.team/docs).

---

## Deployment Steps

### Step 1: Create the API Directory

- Inside your project root, create a folder named `api`.
- Inside `api`, add a file named `index.ts`.

### Step 2: Build the Project

Run the following command to build your project:
  
```bash
npm run dev
```

### Step 3: Configure api/index.ts

In api/index.ts, set up your imports and handle different HTTP methods as shown below:

```
import { handle } from 'hono/vercel'
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line antfu/no-import-dist
import app from '../dist/src/index.js';

export const runtime = 'edge'

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const PUT = handle(app)
export const OPTIONS = handle(app)

```
### Step 4: Configure vercel.json

In the root directory, create a file named vercel.json and add the following rewrite rule to route all traffic to your API:
```
{
    "rewrites": [
        { "source": "/(.*)", "destination": "/api" }
    ]
}

```

### Step 5: Set Up the Public Folder

Create a folder named public in your root directory and add a .gitkeep file to ensure the folder is retained during deployment.

```
mkdir public
touch public/.gitkeep
```
### Step 6: Deploy to Vercel

```
vercel
```
Follow the prompts:<br>

Select your project.<br>
When asked "Link to an existing project?" select No.<br>
Choose a project name.<br>
Set the directory to ./.<br>
When asked "Want to modify settings?", select No.<br>
Configure Environment Variables:<br>
After deploying, go to your Vercel dashboard and add any necessary environment variables.


### 🎉 That's it! Your Hono app is now live on Vercel!






```
npm install
npm run dev
```

```
open http://localhost:3000
```
