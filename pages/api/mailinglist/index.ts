import Airtable from 'airtable';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID);

  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });
    const table = base('MailingList');
    const data = await table.create({ email: email });
    res.status(200).json(data);
  }
}
