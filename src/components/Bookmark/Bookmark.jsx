import React from 'react';

const Bookmark = ({bookmarks}) => {

    return (
        <div className='mx-8 '>
          
     <div className=' bg-slate-200 p-4 text-center rounded-xl mb-4'>
       <h2>{bookmarks.title}</h2>
  
     </div>
        </div>
    );
};

export default Bookmark;