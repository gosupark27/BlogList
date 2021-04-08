const dummy = require('../utils/list_helper').dummy
const totalLikes = require('../utils/list_helper').totalLikes
const favoriteBlog = require('../utils/list_helper').favoriteBlog
const mostBlogs = require('../utils/list_helper').mostBlogs

describe('dummy', () => {
  test('dummy returns one', () => {
    const blogs = []
    const result = dummy(blogs)
    expect(result).toBe(1)
  })
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    const blogs = []
    const result = totalLikes(blogs)
    expect(result).toEqual(0)

  })
  test('when list has only one blog equals the like of that', () => {
    const blogs = [{ likes: 5 }]
    const result = totalLikes(blogs)
    expect(result).toBe(5)
  })
  test('of a bigger list is calculated right', () => {
    const blogs = [{ likes: 3 }, { likes: 5 }, { likes: 7 }]
    const result = totalLikes(blogs)
    expect(result).toBe(15)
  })

})

describe('favorite blog', () => {
  test('many top favorites returns first one', () => {
    const blogs = [
      {
        title: 'My first blog',
        author: 'Allen Edmond',
        likes: 5
      },
      {
        title: 'Canonical string reduction',
        author: 'Edsger W. Dijkstra',
        likes: 5
      },
      {
        title: 'Hello World',
        author: 'Bob ',
        likes: 3
      },
    ]
    const result = favoriteBlog(blogs)
    const expected = {
      title: 'My first blog',
      author: 'Allen Edmond',
      likes: 5
    }
    expect(result).toEqual(expected)
  })
  test('returns top favorite', () =>{
    const blogs = [
      {
        title: 'My first blog',
        author: 'Allen Edmond',
        likes: 3
      },
      {
        title: 'Canonical string reduction',
        author: 'Edsger W. Dijkstra',
        likes: 12
      },
      {
        title: 'Hello World',
        author: 'Bob ',
        likes: 6
      },
    ]
    const result = favoriteBlog(blogs)
    const expected = {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12
    }
    expect(result).toEqual(expected)
  })
})

describe('most blogs', () =>{
  test('returns author with number of blogs', () => {
    const blogs = [
      {
        title: 'My first blog',
        author: 'Allen Edmond',
        likes: 3
      },
      {
        title: 'Canonical string reduction',
        author: 'Edsger Dijkstra',
        likes: 12
      },
      {
        title: 'Hello World',
        author: 'Bob ',
        likes: 6
      },
      {
        title: 'My second blog',
        author: 'Allen Edmond',
        likes: 5
      },
    ]
    const result = mostBlogs(blogs)
    const expected = {
      author:'Allend Edmond',
      blogs:2
    }
    expect(result).toEqual(expected)
  })
})