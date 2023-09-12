import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToCart,readingTimeHandler}) => {
 const [blogs,setBlogs]=useState([])
 
 useEffect(()=>{
    fetch('blogs.json')
    .then(res=> res.json())
    .then(data=> setBlogs(data))
 },[])


    return (
        <div className='md:w-2/3'>
     

        {
             blogs.map(blog=> <Blog 
               readingTimeHandler={readingTimeHandler}
                handleAddToCart={handleAddToCart}
                blog={blog}
                key={blog.id} ></Blog>)
        }
            
        </div>
    );
};

export default Blogs;