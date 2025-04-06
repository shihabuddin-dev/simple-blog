import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
    const { id, cover, author_img, author, posted_date
        , reading_time, title, hashtags } = blog
    const [first, second, third] = hashtags

    return (
        <div className='space-y-1 md:space-y-2'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex md:gap-2'>
                    <div>
                        <img className='w-16' src={author_img} alt="" />
                    </div>
                    <div>
                        <h2 className='md:text-2xl font-bold'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <p>{reading_time} Minutes Read</p>
                    <button
                        onClick={() => handleBookMark(blog)}
                        className='text-xl'
                    >
                        <FaRegBookmark /></button>
                </div>
            </div>
            <h3 className='text-xl md:text-3xl font-semibold'>{title}</h3>
            <p>#{first} #{second} {third && `#${third}`}</p>
            <button
                onClick={() => handleMarkAsRead(reading_time, id)}
                className= 'bg-blue-500 btn text-white'
            >Mark as Read</button>
        </div>
    );
};

export default Blog;