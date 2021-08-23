import { NextApiResponse, NextApiRequest } from 'next';
import { people } from '../../../components/database/mochData';

const defaultStatus = 200;

/** People API, return all people */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(defaultStatus).json(people);
};

export default handler;
