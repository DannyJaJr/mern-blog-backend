# mern-blog-backend

mongo
use myblog

db.articles.insert([{ name:'learn-react', comments:[], },{ name:'learn-javaScript', comments:[], },{ name: 'learn-express.js', comments:[], }])


db.articles.find({})
db.articles.find({}).pretty
b.articles.find({name: 'learn-react'}).pretty()
b.articles.findOne({name: 'learn-react'})