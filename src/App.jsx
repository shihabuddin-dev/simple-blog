
import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/blogs/Blogs'


const fetchBlogsData = async () => {
  const res = await fetch('blogs.json')
  return res.json()
}
function App() {
  const blogsPromise = fetchBlogsData()
  const [bookmark, setBookmark]=useState([])
  const handleBookMark=(blog)=>{
   const newMark= [...bookmark, blog]
   setBookmark(newMark)
  }
  

  return (
    <>
      <Navbar></Navbar>

     
      <div className='flex justify-between mt-4'>
        <div className='w-[70%] px-4'> 
          <Suspense fallback={<h3 className='text-center'>Blogs Data is Loading......</h3>}>
        <Blogs 
        blogsPromise={blogsPromise} 
        handleBookMark={handleBookMark}/>
      </Suspense>
      </div>
        <div className='w-[30%] bg-amber-100 text-center p-4 md:mt-10'>History

          {
            bookmark.map(mark=> <div> {mark.id}</div>)
          }
        </div>
      </div>
    </>
  )
}

export default App
