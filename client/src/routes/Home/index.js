import React, { useState, useEffect } from 'react';
import EmptyList from '../../components/common/EmptyList/index';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../Blog/config/data';
import axios from 'axios'


const Home = () => {
  // getting the Blogs from backend
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

  //adding The Blogs from the DB to the beginning of the blogList Array
  for (let i = 0; i < dbBlogs.length; i++) {
    blogList.unshift(dbBlogs[i])
  }




  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />


      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
