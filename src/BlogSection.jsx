import BlogCard from "./BlogCard"

const data = [
  {
    "_id": "651c052f33f3ad3bb8cf55f1",
    "name": "JBL FLIP 4",
    "imageUrl": "https://pbs.twimg.com/media/C0x6asPXUAADaWY.jpg:large",
    "date": "Oct 10,2023",
    "comment": 40,
    "countInStock": 10,
    "__v": 0
  },
  {
    "_id": "651c052f33f3ad3bb8cf55f2",
    "name": "JBL FLIP 4",
    "imageUrl": "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/recent_photo_1682836291.webp",
    "date": "Oct 1,2023",
    "comment": 21,
    "countInStock": 10,
    "__v": 0
  },
  {
    "_id": "651c052f33f3ad3bb8cf55f3",
    "name": "JBL FLIP 4",
    "imageUrl": "https://www.slashgear.com/img/gallery/top-10-tech-gadgets-were-looking-forward-to-most-in-2024/l-intro-1693323941.jpg",
    "date": "Oct 10,2023",
    "comment": 15,
    "countInStock": 10,
    "__v": 0
  },

]
const BlogSection = () => {
  return (
    <div className="container pt-16 py-5">
      <h2 className="font-bold text-xl">Latest News</h2>
      <p className="text-gray-500">Present posts in a best way to highlight interesting moments of your blog.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el) => (
          <BlogCard
            key={el._id}
            imageUrl={el.imageUrl}
            title={el.title}
            date={el.date}
            comment={el.comment}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogSection
