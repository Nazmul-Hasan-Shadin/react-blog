import React from 'react';
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center max-w-7xl  border-b-2 p-4 mx-auto '>
         <h2 className=''>Knowledge Caffe</h2>
         <img src={profile} alt="" />
        </div>
    );
};

export default Header;