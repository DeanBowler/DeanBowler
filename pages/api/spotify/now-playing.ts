import { getNowPlaying } from '@/lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (_: NextApiRequest, res: NextApiResponse<unknown>) => {
  const nowPlaying = await getNowPlaying();

  res.status(200).json(nowPlaying);
};
