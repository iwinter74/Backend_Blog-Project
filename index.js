var express = require('express')
var app = express()



let blogList = [
  {
    id: 0,
    url: "/img1.jpg",
    title:
      "A few words about this blog platform, Ghost, and how this site was made",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Apr 15, 2020",
    duration: 4,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 1,
    url: "/img2.jpg",
    title: "Here are some things you should know regarding how we work",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "June 25, 2020",
    duration: 5,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 2,
    url: "/img3.jpg",
    title:
      "Granny gives everyone the finger, and other tips from OFFF Barcelona",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Aug 30, 2020",
    duration: 3,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 3,
    url: "/img4.jpg",
    title: "Hello world, or, in other words, why this blog exists",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Sep 12, 2020",
    duration: 3,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 4,
    url: "/img5.jpg",
    title: "Here are some things you should know regarding how we work",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Jul 3, 2020",
    duration: 4,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 5,
    url: "/img6.jpg",
    title: "Connecting artificial intelligence with digital product design",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "May 22, 2020",
    duration: 3,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 6,
    url: "/img7.jpg",
    title: "It’s all about finding the perfect balance",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Oct 3, 2020",
    duration: 5,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 7,
    url: "/img8.jpg",
    title: "I believe learning is the most important skill",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Nov 26, 2020",
    duration: 4,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 8,
    url: "/img9.jpg",
    title: "Clients are part of the team",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Dec 18, 2020",
    duration: 3,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 9,
    url: "/img10.jpg",
    title: "Clients are part of the team",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Jan 6, 2020",
    duration: 5,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 10,
    url: "/img11.jpg",
    title: "Here are some things you should know regarding how we work",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Feb 5, 2020",
    duration: 4,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 11,
    url: "/img12.jpg",
    title: "Connecting artificial intelligence with digital product design",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Mar 15, 2020",
    duration: 5,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 12,
    url: "/img13.jpg",
    title:
      "How modern remote working tools get along with Old School Cowboy's methods",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Jun 26, 2020",
    duration: 4,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
];

var randomArr = [];
while(randomArr.length < 6){
    var r = Math.floor(Math.random() * blogList.length) ;
    if(randomArr.indexOf(r) === -1) randomArr.push(r);
}

console.log(randomArr)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3005


let newBlogList = blogList.slice(1)

// console.log(newBlogList)
let ejs = require('ejs');

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen(PORT, (req, res) => {
  console.log(`Server started`)
})

app.get('/', function (req, res) {
  res.status(200).render('index', { blogList: blogList, newBlogList: newBlogList, title: "all_blogs", activNav: "/" })
})

app.get('/newArticle', function (req, res) {
  res.status(200).render('newArticle', { title: "new_article", activNav: "/newArticle", randomArr: randomArr, blogList: blogList})
})
app.get('/blog/:item', (req, res) => {
  console.log(req.params.item)
  // console.log(blogList[req.params.item].body.split(" ").length)
  // res.status(200).render('singleBlog', {
  //   singleBlog: newBlogList[req.params.item - 1], title: `blog_${newBlogList[req.params.item - 1].id}`, randomArr: randomArr, blogList: newBlogList
  // })

  res.status(200).render('singleBlog', {
    singleBlog: blogList[req.params.item], title: `blog_${blogList[req.params.item].id}`, randomArr: randomArr, blogList: blogList
  })

  // res.status(200).render('singleBlog1', {
  //   singleBlog: newBlogList[req.params.item - 1]
  // })
})
app.post('/new', (req, res) => {
  console.log(req.body)
  req.body.id = blogList.length
  req.body.published_at = new Date()
  req.body.duration = (req.body.body.split(" ").length /60).toFixed(0)
  newBlogList.push(req.body)
  blogList.push(req.body)
  console.log(req.body)
  console.log()
  res.status(201).redirect('/')
})

