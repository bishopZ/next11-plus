import { PostModel } from './models';

/** moch post data, later to be replaced by an API */
export const posts: readonly PostModel[] = [
  {
    id: '123',
    title: 'post 1',
    publishDate: new Date().toDateString(),
    author: { name: 'bishop' },
    content: { document: [] },
    state: 'published'
  },
  {
    id: '124',
    title: 'post 2',
    publishDate: new Date().toDateString(),
    author: { name: 'bishop' },
    content: { document: [] },
    state: 'published'
  }
];

const defaultIndex = 0;

/** moch api to get one post */
export const getPostById = (id = posts[defaultIndex].id): PostModel => {
  const thePost = posts.find(post => post.id === id);
  return thePost ?? posts[defaultIndex];
};

/** helper function for getStaticPaths */
export const paths = posts.map(post => `/article/${post.id}`);

/** moch people data for Next API Example
 * /pages/api/people/[id].ts */
export const people = [
  {
    id: '1',
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hairColor: 'blond',
    skinColor: 'fair',
    eyeColor: 'blue',
    gender: 'male'
  }, {
    id: '2',
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hairColor: 'n/a',
    skinColor: 'gold',
    eyeColor: 'yellow',
    gender: 'n/a'
  }, {
    id: '3',
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hairColor: 'n/a',
    skinColor: 'white, blue',
    eyeColor: 'red',
    gender: 'n/a'
  }, {
    id: '4',
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hairColor: 'none',
    skinColor: 'white',
    eyeColor: 'yellow',
    gender: 'male'
  }, {
    id: '5',
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hairColor: 'brown',
    skinColor: 'light',
    eyeColor: 'brown',
    gender: 'female'
  }, {
    id: '6',
    name: 'Owen Lars',
    height: '178',
    mass: '120',
    hairColor: 'brown, grey',
    skinColor: 'light',
    eyeColor: 'blue',
    gender: 'male'
  }, {
    id: '7',
    name: 'Beru Whitesun lars',
    height: '165',
    mass: '75',
    hairColor: 'brown',
    skinColor: 'light',
    eyeColor: 'blue',
    gender: 'female'
  }, {
    id: '8',
    name: 'R5-D4',
    height: '97',
    mass: '32',
    hairColor: 'n/a',
    skinColor: 'white, red',
    eyeColor: 'red',
    gender: 'n/a'
  }, {
    id: '9',
    name: 'Biggs Darklighter',
    height: '183',
    mass: '84',
    hairColor: 'black',
    skinColor: 'light',
    eyeColor: 'brown',
    gender: 'male'
  }, {
    id: '10',
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hairColor: 'auburn, white',
    skinColor: 'fair',
    eyeColor: 'blue-gray',
    gender: 'male'
  }
];
