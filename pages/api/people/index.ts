import { NextApiResponse, NextApiRequest } from 'next';
import { people } from '../../../components/database/mochData';
import { FOUND, NOT_FOUND } from '../../../components/database/actions';

/** People API, return all people */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.headers) {
    res.status(FOUND).json(people);
  } else {
    res.status(NOT_FOUND);
  }
};

export default handler;
