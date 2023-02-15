import Airtable from 'airtable';
import { IAirtableImage, ITeam } from '../type';

export const getTeam = async () => {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID);

  const data: ITeam[] = [];
  const table = base('Team');
  const records = await table
    .select({
      view: 'Grid view', // sort by the order of the view
      filterByFormula: `AND(status = "active")`, // filter where status is active
    })
    .all();

  records.forEach(({ fields }) => {
    data.push({
      id: (fields.Id as number) || null,
      name: (fields.name as string) || null,
      email: (fields.email as string) || null,
      linkedin: (fields.linkedin as string) || null,
      facebook: (fields.facebook as string) || null,
      instagram: (fields.instagram as string) || null,
      twitter: (fields.twitter as string) || null,
      github: (fields.github as string) || null,
      website: (fields.website as string) || null,
      role: (fields.role as string) || null,
      avatar: (fields.avatar as IAirtableImage[]) || null,
      bio: (fields.bio as string) || null,
    });
  });

  // console.log(data);
  return data;
};
