## Description

Next.js template filled with best practices and examples.

+ Started with a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

+ Updated the config files

+ Installed Sass
+ Organized the CSS.
+ Added WCAG and ARIA best practices

+ Added Next.js Document file, Layout files and error pages.
+ Added a next/image examples, local and remote.
+ Added [Next-Sitemap](https://www.npmjs.com/package/next-sitemap)
+ Addded Next.js recommended security headers

+ Added an example of every major paradym in React: Reducer, Hooks, Component, Controlled input, Context API
+ Atomized the components

+ Added Metadata for SEO.
+ Added all the favicon fields

+ Upgraded ESLint to Typescript-ESLint with lots of custom rules for ease of use.
+ Added Stylelint for CSS Linting

+ Added an example API

+ Added lots of Typescript examples

+ Change comments to use JSDoc format

## TODO

+ add tests

+ https://next-auth.js.org/

+ Change remote image example

+ Flexbox, https://tobiasahlin.com/blog/common-flexbox-patterns/#masonry-or-mosaic

+ HTML Review, compare to apple google
+ Code Review

+ test-driven, https://github.com/testjavascript/nodejs-integration-tests-best-practices

+ Suspence


+ Change mochData to use the Github API

+ add public APIs, https://github.com/public-apis/public-apis

+ Relay-nextjs
+ hasura?


## Getting Started

Create a `.env.local` file and add these lines

```
NODE_ENV=development
SITE_URL=http://localhost:3000
```

Then, run the development server.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Hosting on Vercel

Free hosting on Vercel is only through the CLI tool.

```
npm i -g vercel
vercel
```

This should launch the project and provide both a preview URL and a vercel CNAME.
