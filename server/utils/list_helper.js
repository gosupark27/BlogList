// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => total += blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  const maxLikes = Math.max(...blogs.map(b => b.likes))
  const popularBlog = blogs.filter(blog => blog.likes === maxLikes)
  return popularBlog[0]
}

const mostBlogs = (blogs) => {
  const sortedBlogs = blogs.reduce((sortedByAuthors, blog) => {
    sortedByAuthors[blog.author] = sortedByAuthors[blog.author] || []
    sortedByAuthors[blog.author].push(blog)
    return sortedByAuthors
  }, {})
  let max = 0
  let topAuthor = {}
  for (const author in sortedBlogs) {
    if (author.length > max) {
      max = author.length
      topAuthor.author = author.name
      topAuthor.blogs = max
    }
  }
  return topAuthor
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}