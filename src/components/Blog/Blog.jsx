import React from 'react';
import { FaBeer, FaBookmark} from 'react-icons/fa';
const Blog = ({blog,handleAddToCart,readingTimeHandler}) => {
    const {author_img,posted_date,author,title,reading_time,cover,hashtags}=blog;

    return (
        <div className='space-y-4'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center  '>
              <div className='flex gap-2 ' > 
              <img  className='w-14 rounded-full' src={author_img} alt="" />
              <div>
                <h2 className='font-bold' >{author}</h2>
                <p>{posted_date}</p>

              </div>
              </div>
              
              <div>
             <span>{reading_time} min to read  </span>
             <button onClick={()=>handleAddToCart(blog)}><FaBookmark/></button>
              </div>

            </div>

            <h2 className='font-bold text-xl'>{title}</h2>
            <p> 

              {
                hashtags.map((hash,idx)=> <span key={idx}><a href="">#{hash}</a></span> )
              }   

            </p>

            <button  onClick={()=>readingTimeHandler(reading_time)}  className='text-purple-600'>Mark as Read</button>
        </div>
    );
};

export default Blog;