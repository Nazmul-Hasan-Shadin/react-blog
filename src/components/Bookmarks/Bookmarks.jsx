import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    console.log(bookmarks);
    return (
       
        <div className='md:w1/3    '>
      
      <div className='bg-[#6047E41A] p-3 mb-4 ml-9 mt-6'>
        <p className='font-bold text-[#6047EC] text-center'> Total time spent to read :{readingTime} min </p>

      </div>

       <div className='bg-[#1111110D] p-4  ml-9'>
       <h2 className='text-center font-bold text-2xl p-2'>Bookmarked Blog : {bookmarks.length}</h2>
           <div className=''>
           {
            bookmarks.map((bookmark,idx)=> <Bookmark key={idx} bookmarks={bookmark} ></Bookmark> )
         }
           </div>
       </div>
  
        </div>
    );
};

export default Bookmarks;