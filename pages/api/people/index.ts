import { NextApiResponse, NextApiRequest } from 'next';
import { people } from '../../../components/database/mochData';
import { FOUND, NOT_FOUND } from '../../../components/database/actions';

/** People API, return all people */
const handler = (
  req: Readonly<NextApiRequest>,
  res: Readonly<NextApiResponse>
) => {
  (typeof req.headers.age === 'string')
    ? res.status(FOUND).json(people)
    : res.status(NOT_FOUND);
};

export default handler;
