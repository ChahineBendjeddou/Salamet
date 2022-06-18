const Blog = require('../models/blog')



module.exports.addBlog = async (req, res) => {
    try {
        const newBlog = new Blog(req.body.blog)
        newBlog.images = req.files.map(img => ({ url: img.path, filename: img.filename }))
        newBlog.author = req.user._id
        await newBlog.save()
        res.redirect('/BlogHome')
    } catch (err) { console.log(err) }
}

module.exports.sendBlogs = async (req, res) => {
    const blogs = await Blog.find({}).populate('author').sort({ createdAt: 1 })
    res.send(blogs)
}