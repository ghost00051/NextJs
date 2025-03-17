import React from 'react';

export interface Post {
  title: string;
  content: string;
}

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="mb-8">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

export default BlogPost;