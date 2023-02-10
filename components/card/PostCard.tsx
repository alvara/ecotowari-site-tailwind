'use client';

import { slugify } from '@/helpers/dataHelpers';
import { formatJapaneseDate, formatPostDate } from '@/helpers/dateHelpers';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import Link from 'next/link';
import React from 'react';
import Badge from '../badges/Badge';
import { Typography } from '../Typography';

interface PostCardProps {
  post: PageObjectResponse;
  href?: string;
}

export default function PostCard({ post, href }: PostCardProps) {
  const categorySlug =
    post.properties.Category.type === 'select'
      ? slugify(post.properties.Category.select.name)
      : '';

  const postSlug =
    post.properties.PostSlug.type === 'rich_text' &&
    post.properties.PostSlug.rich_text.length > 0
      ? slugify(post.properties.PostSlug?.rich_text[0]?.plain_text)
      : '';

  const title =
    post.properties.Title.type === 'title'
      ? post.properties.Title.title[0].plain_text
      : '';

  const description =
    post.properties.Description.type === 'rich_text' &&
    post.properties.Description.rich_text.length > 0
      ? post.properties.Description.rich_text[0].plain_text
      : '';

  const coverImage =
    post.cover?.type === 'external'
      ? post.cover?.external.url
      : post.cover?.file.url;

  const tags =
    post.properties.Tags.type === 'multi_select'
      ? post.properties.Tags.multi_select.map((tag) => tag.name)
      : [];

  const createdAt = post.created_time;

  const updatedAt = post.last_edited_time;

  return (
    <Link
      className="flex items-stretch"
      href={{
        pathname: href ?? `/blog/${categorySlug}/${postSlug}`,
      }}
    >
      <article className="card mx-auto w-full max-w-xl cursor-pointer bg-base-100 text-left text-slate-900 shadow-xl duration-300 hover:shadow-lg ">
        <figure>
          <img
            width="auto"
            height="auto"
            src={coverImage ? coverImage : '/default-cover.jpeg'}
            alt="post-cover"
            className="h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body py-4">
          <Typography variant="h3" className="m-0">
            {title}
          </Typography>
          <Typography variant="subtitle2">{description}</Typography>
          <Typography variant="small" className="text-left">
            {formatPostDate(createdAt)}
          </Typography>
          {updatedAt &&
            formatJapaneseDate(createdAt) !== formatJapaneseDate(updatedAt) && (
              <Typography variant="small" className="text-left">
                (Updated: {formatPostDate(updatedAt)})
              </Typography>
            )}

          <div className="card-actions">
            {tags?.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
