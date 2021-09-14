import { NextApiResponse, NextApiRequest } from 'next';
import { people } from '../../../components/database/mochData';

const defaultStatus = 200;
const notFoundStatus = 404;

/** People API, return all people */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.headers) {
    res.status(defaultStatus).json(people);
  } else {
    res.status(notFoundStatus);
  }
};

export default handler;
