
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

      <Suspense fallback={<h3>Blogs Data is Loading......</h3>}>
        <Blogs blogsPromise={blogsPromise} />
      </Suspense>
    </>
  )
}

export default App
