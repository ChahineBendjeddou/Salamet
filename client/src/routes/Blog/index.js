import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from './config/data';
import Chip from '../../components/common/Chip/index';
import EmptyList from '../../components/common/EmptyList/index';
import './styles.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog([...new Map(blogList.map(v => [v.id, v])).values()].find((blog) => blog.id === id))
  }, [id]);

  return (
    <>
      <Link className='blog-goBack' to='/BlogHome'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <pre className='blog-desc'>{blog.description}</pre>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
