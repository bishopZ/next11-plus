import { NextApiRequest, NextApiResponse } from 'next';
import { people } from '../../../components/database/mochData';

/** Person API, return a person */
const personHandler = (
  { query: { id } }: NextApiRequest,
  res: NextApiResponse
) => {
  const filtered = people.filter(p => p.id === id);
  const defaultStatus = 200;
  const notFoundStatus = 404;
  const limit = 0;

  // User with id exists
  if (filtered.length > limit) {
    res
      .status(defaultStatus)
      .json(filtered[limit]);
  } else {
    res
      .status(notFoundStatus)
      .json({ message: `User with id: ${id} not found.` });
  }
};

export default personHandler;
