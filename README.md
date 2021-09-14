
Next.js template filled with best practices and examples.

## Motivation

When you create an starter application with `create-react-app`, `create-next-app` or the majority of similiar command-line tools, the app your given is wonderful in many ways, but fails to follow best practices outside of the narrow scope of its base framework. `create-react-app` has many best practices for React, but not for CSS, accessibility, SEO, unit tests and a host of other concerns that any person wanting to publish a well-made website needs. Next.js, as an opinionated framework, addresses some of these problems, but still lacks examples of the various features that Next itself provides.

If those repos are trying to be the simplest form of a specific technology, this repo aims to be the simplest form of a family of technologies. This repo aims to be a slightly enhanced starter library,providing concise examples of all the features, best practices, and best-of-breed addons.

Why would you run Next without Sass? Instead of adding Sass to every project, let's add it to the starter project.


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



## Change Log

+ Started with a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

+ Updated the config files

+ Installed Sass
+ Organized the CSS
+ Added WCAG and ARIA best practices

+ Added Next.js Document file, page-level Layouts, and error pages.
+ Added a next/image examples, local and remote.
+ Added [Next-Sitemap](https://www.npmjs.com/package/next-sitemap)
+ Addded Next.js recommended security headers

+ Added an example of every major paradym in React: Reducer, Hooks, Component, Controlled input, Context API
+ Atomized the components

+ Added Metadata for SEO, and the favicon fields, site.manifest

+ Upgraded ESLint to Typescript-ESLint with lots of custom rules for ease of use.
+ Added Stylelint for CSS Linting

+ Added an example API

+ Update TSConfig and added lots of Typescript examples

+ Changed comments to use JSDoc format
+ Added some ES features: ??, Object.freeze, more


## TODO

+ remove half-built features, filter, document content
+ pubDate should be a date in the reducer
+ moch is spelled mock
+ Change remote image example
+ an example of flatMap?
+ are sourcemaps working?
+ Move SiteInfo into a Context instead of reducer
+ Can anything be memoized?, https://stackfull.dev/memoizing-async-functions-in-javascript
+ The API could use standardized Status Codes, move to Actions

+ add useCallback, and useMemo
+ Update CSS reset to use water.css
+ use !! for truthy
+ generator function example

+ update to typescript 4.4
+ add a tslint file
+ T extends HTMLElement = HTMLElement
+ TSLint rules to warn against enums, no-invalid-this, noImplicitThis

+ Update Node version and review other libraries

+ Add Suspence

+ GraphQL
+ Relay-nextjs
+ hasura?

+ mobile-first, responsive CSS
+ Flexbox, https://tobiasahlin.com/blog/common-flexbox-patterns/#masonry-or-mosaic

+ Change mockData to use the Github API
+ add to counter, numbersapi.com
+ add other public APIs, https://github.com/public-apis/public-apis

+ https://next-auth.js.org/

+ requestAnimationFrame example
+ webworker example, https://www.smashingmagazine.com/2021/06/web-workers-2021/

+ add dtslint for testing types in unit tests

+ add unit tests, Jest
+ test-driven?, https://github.com/testjavascript/nodejs-integration-tests-best-practices

+ stripe, https://www.youtube.com/watch?v=DLGF8neT8d0

+ Node logging, https://blog.appsignal.com/2021/09/01/best-practices-for-logging-in-nodejs.html

+ Content aware image crop, https://github.com/jwagner/smartcrop.js

# Contributors

+ Bishop Zareh, bishopz.com

# Licence

MIT

