
Next.js template filled with best practices and examples.

## Motivation

When you create an starter application with `create-react-app`, `create-next-app` or the majority of similiar creation tools, the app your given is wonderful in many ways, but fails to follow best practices outside of the narrow scope of the base language. `create-react-app` has many best practices for react, but not for CSS, Accessibility, SEO and a host of other concerns that any person waning to publish a website will want and need. Next.js, as an opinionated framework, addresses this problem in many ways, but still lacks examples of the various features that Next provides.

This repo is trying to be a slightly enhanced starter library that provides a concise examples of all the features, best practices, and best-of-breed addons.  Why would you run Next without Sass? Instead of adding Sass to every project, let's just add it to the starter project.


## Collaboration

We're looking for a few good nit-pickers!

Make comments, request issues, find a type that can be better!

Is everything in this starter library as good as it can possibly be?


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

To lint both the JS and CSS, run

```
npm run lint
```

To do a production build, run

```
npm run build
```


## Hosting on Vercel

Free hosting on Vercel is only through the CLI tool.

```
npm i -g vercel
vercel
```

This should launch the project and provide both a preview URL and a vercel CNAME.


## Change Log

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

+ requestAnimationFrame example
+ webworker example

