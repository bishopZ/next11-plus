import { NextApiRequest, NextApiResponse } from 'next';
import { people } from '../../../components/database/mochData';
import { FOUND, NOT_FOUND } from '../../../components/database/actions';

/** Person API, return a person */
const personHandler = (
  req: Readonly<NextApiRequest>,
  res: Readonly<NextApiResponse>
) => {
  const { query: { id } } = req;
  const filtered = people.filter(p => p.id === id);
  const limit = 0;

  // User with id exists
  return (filtered.length > limit)
    ? res
      .status(FOUND)
      .json(filtered[limit])
    : res
      .status(NOT_FOUND)
      .json({ message: `User with id: ${id} not found.` });
};

export default personHandler;
