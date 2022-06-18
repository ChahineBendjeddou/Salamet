const Blog = require('../models/blog')
const deepSanitize = require('../utils/deepSanitize')
const sanitize = require('mongo-sanitize')
module.exports.addBlog = async (req, res) => {
    try {
        // const newBlog = new Blog(req.body.blog)
        // newBlog.images = req.files.map(img => ({ url: img.path, filename: img.filename }))
        // newBlog.author = req.user._id
        // await newBlog.save()
        // console.log(await newBlog.populate('author'))

        const { title, body, type } = req.body.blog
        console.log(deepSanitize(body))
        console.log(deepSanitize(title))
        console.log(sanitize(title))
        console.log(deepSanitize(type))
        console.log(title === { _id: { '$ne': 1 } })
        console.log()
        // const newBody = req.body.blog.map(e => deepSanitize(e))
        // console.log(newBody)
        res.redirect('/BlogHome')
    } catch (err) { console.log(err) }
}

module.exports.sendBlogs = async (req, res) => {
    const blogs = await Blog.find({}).populate('author').sort({ createdAt: 1 })
    const newBlogs = blogs.map(blog => {
        if (!blog.images[0]) {
            blog.images.push({ url: 'https://res.cloudinary.com/chahineyelpcamp/image/upload/v1655521162/Salamet/johannes-blenke-ClmRtzGBFtU-unsplash_jqvgt4.jpg' })
        }
    })

    res.send(blogs)
}