
import './App.css'
import { useState } from "react";
import Header from './components/Header/Header'
import Blogs from  './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
 const [bookmarks,setBookmarks]= useState([]);
 const [readingTime,setReadingTime]= useState(0);

 const  handleAddToCart=(blog)=>{
     const newBookmarks= [...bookmarks,blog]
     setBookmarks(newBookmarks)
 }
 const readingTimeHandler=(time)=>{
   setReadingTime(readingTime+time)
 }
  return (
    <>

   <Header></Header>
 
  <div className=" flex flex-col-reverse md:flex-row md:flex max-w-7xl mx-auto px-10 mt-4" >
  <Blogs handleAddToCart={handleAddToCart}  readingTimeHandler={readingTimeHandler} ></Blogs>
   <Bookmarks bookmarks={bookmarks} readingTime={readingTime}  ></Bookmarks>  
  </div>
   
   


  


    </>
  )
}

export default App
