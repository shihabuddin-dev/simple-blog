
import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/blogs/Blogs'
import History from './components/history/History'


const fetchBlogsData = async () => {
  const res = await fetch('blogs.json')
  return res.json()
}
function App() {
  const blogsPromise = fetchBlogsData()
  const [bookmark, setBookmark] = useState([])
  const handleBookMark = (blog) => {
    const newMark = [...bookmark, blog]
    setBookmark(newMark)
  }
  const [markAsRead, setMarkAsRead] = useState(0)
  const handleMarkAsRead = (time, id) => {
    setMarkAsRead(markAsRead + time)
    handleRemoveBookMarks(id)
  }
  const handleRemoveBookMarks = () => {
    const remainBookMarks = bookmark.filter(mark => mark.id !== mark.id)
    setBookmark(remainBookMarks)
  }

  return (
    <>
      <Navbar></Navbar>


      <div className='flex justify-between mt-4'>
        <div className='w-[70%] px-4'>
          <Suspense fallback={<h3 className='text-center'>Blogs Data is Loading......</h3>}>
            <Blogs
              blogsPromise={blogsPromise}
              handleBookMark={handleBookMark}
              handleMarkAsRead={handleMarkAsRead}
              markAsRead={markAsRead}
            />
          </Suspense>
        </div>
        <div className='w-[30%] bg-gray-100 text-center p-4 md:mt-10'>
          <p className='text-xl font-bold'>Bookmarked Blogs: {bookmark.length}</p>
          <p className='text-xl font-bold'>Spent Time On Read: {markAsRead} Min</p>
          <div className='space-y-2 mt-2'>
            {
              bookmark.map(mark => <History key={mark.id} mark={mark}></History>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
