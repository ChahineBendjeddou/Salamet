import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from './config/data';
import Chip from '../../components/common/Chip/index';
import EmptyList from '../../components/common/EmptyList/index';
import './styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  //getting the Blogs from backend
  let [dbBlogs, setDbBlogs] = useState(async () => {
    await axios.get('/getBlogs', { withCredentials: true })
      .then(res => {
        const newdata = res.data.map(blog => ({
          id: blog._id,
          title: blog.title,
          category: blog.type,
          subCategory: [blog.type],
          description: blog.body,
          authorName: `${blog.author.lastname} ${blog.author.firstname}`,
          authorAvatar: '/assets/images/author.jpg',
          createdAt: blog.createdAt.slice(0, 10),//.format('MMMM Do YYYY'), 
          cover: blog.images[0].url
        }))
        setDbBlogs(newdata)
      })
      .catch(err => console.log(err))
  })

  for (let i = 0; i < dbBlogs.length; i++) {
    blogList.unshift(dbBlogs[i])
  }

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
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
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
