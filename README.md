
## Motivation

Starting with the Next11-plus starter project, then adding the starwars API.

x Use ReactJS 16 (I used React 17, hope that's okay)

√ All data will come from the Star Wars API at https://swapi.dev/api/species/
√ Browse people in a “tile-style” rectangular grid
√ People need to be organized by species
√ Each person must show their name and link to a detail page about them
√ Pagination must be handled
√ Allow searching a person by their name
√ Person searching by name can be done at https://swapi.dev/api/people/?search=han
√ We will check for responsiveness
√ Have navigation that brings the user back to the listing page
√ When clicking on a person, show all stats provided by API including name, height, mass, hair color, skin color, eye color, birth year, gender, number of movies, starships and vehicles.

○ Extra credit if you can show the movie posters for the movies they’ve been in

● Work by simply cloning the repo, running npm i and npm start.
● Source code with documentation (readme, build & run instructions, etc) (can be an archive or link to personal GitHub project)


## Tour

most of the changes were made in...

```
/pages/index.tsx
/pages/person/[id].tsx
/components/cardList.tsx
/components/pagination.tsx
/components/database/comms.ts
/components/database/*
```


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


# Contributors

+ Bishop Zareh, bishopz.com

# Licence

MIT

