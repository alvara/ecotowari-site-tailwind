import React from 'react';
import PropTypes from 'prop-types';
import InfoCard from '../card/BlogCard';
import Link from 'next/link';

export default function LatestPosts({ posts }) {
  return (
    <div className="text-center">
      <span className="pre-title">Blog</span>
      <h2>Latest Articles</h2>
      <div className="row">
        {posts.length > 0 &&
          posts.map(
            ({
              _id,
              title = '',
              slug,
              publishedAt = '',
              mainImage,
              categories = [],
            }) => (
              <div className="col-lg-4" key={_id}>
                <InfoCard
                  className="post-card"
                  img={mainImage}
                  imgType="blog"
                  href={'/blog/[slug]'}
                  as={`/blog/${slug.current}`}
                  title={title}
                  subtitle={new Date(publishedAt).toDateString()}
                  tags={categories}
                  height={120}
                />
              </div>
            )
          )}
      </div>
      <Link href={'/blog'} passHref>
        <button className="btn mt-5">Read More Articles</button>
      </Link>
    </div>
  );
}

LatestPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};
