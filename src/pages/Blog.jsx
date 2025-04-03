
import React from 'react';
import Navbar from '../layout/Navbar';
import BlogSearch from '../components/BlogSearch';
import BlogCard from '../components/BlogCard';
import AllBlogPost from '../components/AllBlogPost';
import LocationSection from './LocationSection';

function Blog() {
    return (
        <div>
            <Navbar style={{ backgroundColor: 'white', color: 'black' }} />
            <BlogSearch />
            <BlogCard />
            <AllBlogPost />
            <LocationSection />
           
        </div>
    );
}

export default Blog;