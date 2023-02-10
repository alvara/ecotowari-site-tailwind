import 'server-only';

import { IArticlesFilter } from 'types';
import {
  PageObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints';
import { notionPublishedArticlesFilter } from '@/helpers/notionHelpers';
import { notionClient } from '@/lib/notion';
import { isFullPage } from '@notionhq/client';

const databaseId = process.env.NOTION_DB_BLOG;

/**
 * Fetch array of Notion pages (articles)
 */
export async function getArticlesList(args?: {
  numToFetch?: number;
  filter?: IArticlesFilter;
}): Promise<PageObjectResponse[]> {
  const filter = args?.filter ? (args?.filter as IArticlesFilter) : null;
  const securedNotionPostQuery = {
    database_id: databaseId,
    filter: notionPublishedArticlesFilter(filter?.category),
  };

  const data = await notionClient.databases.query(
    securedNotionPostQuery as QueryDatabaseParameters
  );

  const results = data.results.map((result) => {
    return isFullPage(result) && result;
  });

  return args?.numToFetch && results.length > 0
    ? results.slice(0, args.numToFetch)
    : results;
}

export async function getArticlesCategories() {
  // const databaseId = process.env.NOTION_DB_BLOG;
  const securedNotionPostQuery = {
    database_id: databaseId,
    filter: notionPublishedArticlesFilter(),
  };

  const data = await notionClient.databases.query(
    securedNotionPostQuery as QueryDatabaseParameters
  );

  // filter out pages that are not full pages
  const results = data.results.map((result) => {
    return isFullPage(result) && result;
  });

  // get unique categories
  const categories: string[] = [];

  results.map((post) => {
    const categoryName =
      post.properties.Category.type === 'select' &&
      post.properties.Category.select.name;

    // if category doesn't exist in categories array, add it
    if (!categories.some((c) => c === categoryName)) {
      categories.push(categoryName);
    }
  });

  return categories;
}
