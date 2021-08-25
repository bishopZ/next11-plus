
Next.js template filled with best practices and examples.

## Motivation

When you create an starter application with `create-react-app`, `create-next-app` or the majority of similiar command-line tools, the app your given is wonderful in many ways, but fails to follow best practices outside of the narrow scope of its base framework. `create-react-app` has many best practices for react, but not for CSS, Accessibility, SEO, unit tests and a host of other concerns that any person wanting to publish a well-made website needs. Next.js, as an opinionated framework, addresses some of these problems, but still lacks examples of the various features that Next itself provides.

If those repos are trying to be the simplest form of a specific technology, this repo aims to be the simplest form of a family of technologies. This repo aims to be a slightly enhanced starter library, that provides concise examples of all the features, best practices, and best-of-breed addons.

Why would you run Next without Sass? Instead of adding Sass to every project, let's just add it to the starter project.

## Collaboration

We're looking for a few good nit-pickers!

Make comments- request enhancements- find a type that can be better!

Is every pattern in this repository as good as it can possibly be?

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
+ Organized the CSS
+ Added WCAG and ARIA best practices

+ Added Next.js Document file, Layout files and error pages.
+ Added a next/image examples, local and remote.
+ Added [Next-Sitemap](https://www.npmjs.com/package/next-sitemap)
+ Addded Next.js recommended security headers

+ Added an example of every major paradym in React: Reducer, Hooks, Component, Controlled input, Context API
+ Atomized the components

+ Added Metadata for SEO
+ Added all the favicon fields

+ Upgraded ESLint to Typescript-ESLint with lots of custom rules for ease of use.
+ Added Stylelint for CSS Linting

+ Added an example API

+ Added lots of Typescript examples

+ Changed comments to use JSDoc format


## TODO

+ remove half-built features, filter, document content
+ pubDate should be a date in the reducer
+ moch is spelled mock
+ Change remote image example

+ Add Suspence

+ are sourcemaps working?
+ add unit tests, Jest
+ test-driven?, https://github.com/testjavascript/nodejs-integration-tests-best-practices

+ mobile-first, responsive CSS
+ Flexbox, https://tobiasahlin.com/blog/common-flexbox-patterns/#masonry-or-mosaic

+ Change mockData to use the Github API
+ add to counter, numbersapi.com
+ add other public APIs, https://github.com/public-apis/public-apis

+ https://next-auth.js.org/
+ Relay-nextjs
+ hasura?

+ requestAnimationFrame example
+ webworker example, https://www.smashingmagazine.com/2021/06/web-workers-2021/

+ add dtslint for testing types in unit tests


# Contributors

+ Bishop Zareh, bishopz.com

# Licence

MIT

