
## Getting Started

```bash
npm i && npm start
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

## Tour

most of the changes were made in...

```
/pages/index.tsx - home page
/pages/person/[id].tsx - detail page
/components/database/actions.ts - constants and reducer actions
/components/database/comms.ts - all API communication
/components/database/queries.ts - all server-side data collection
/components/database/reducer.ts - the reducer
/components/database/manager.ts - data transformations
```



## Motivation

Starting with the Next11-plus starter project, then adding the starwars API.

x Use ReactJS 16 (I used React 17, hope that's okay)

x Extra credit if you can show the movie posters for the movies they’ve been in

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
√ Work by simply cloning the repo, running npm i and npm start.
√ Source code with documentation (readme, build & run instructions, etc) (can be an archive or link to personal GitHub project)


# Contributors

+ Bishop Zareh, bishopz.com

# Licence

MIT

