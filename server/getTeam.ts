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
      id: fields.Id as number,
      name: fields.name as string,
      email: fields.email as string,
      linkedin: fields.linkedin as string,
      facebook: fields.facebook as string,
      instagram: fields.instagram as string,
      twitter: fields.twitter as string,
      github: fields.github as string,
      website: fields.website as string,
      role: fields.role as string,
      avatar: fields.avatar as IAirtableImage[],
      bio: fields.bio as string,
    });
  });

  // console.log(data);
  return data;
};
