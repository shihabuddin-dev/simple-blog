
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/blogs/Blogs'


const fetchBlogsData = async () => {
  const res = await fetch('blogs.json')
  return res.json()
}
function App() {
  const blogsPromise = fetchBlogsData()

  return (
    <>
      <Navbar></Navbar>

     
      <div className='flex justify-between mt-4'>
        <div className='w-[70%] px-4'> 
          <Suspense fallback={<h3>Blogs Data is Loading......</h3>}>
        <Blogs blogsPromise={blogsPromise} />
      </Suspense>
      </div>
        <div className='w-[30%] bg-amber-100 text-center p-4 md:mt-10'>History</div>
      </div>
    </>
  )
}

export default App
