
const cloudinary = require('../../utils/cloudinary/cloudinary.js')
const { validatePost } = require('../../Joi/Post/postValidation.js')
const Post = require('../../models/postModel.js')

const { dataUri } = require('../../utils/multer/multer.js')

const addingPost = async (req, res) => {
    try {
        const { error, value } = validatePost(req.body)
        if (error) return res.status(400).send(error)

        const { postText } = value

        let post;
        if (req.file) {
            const parentFolder = 'znz';
            const subFolder = 'post';

            const folderPath = `${parentFolder}/${subFolder}`;
            const result = await cloudinary.uploader.upload(dataUri(req).content, {
                folder: folderPath
            })
            post = await Post.create({ postText, image: result.secure_url })
        }
        else post = await Post.create({ postText });
        if (!post) return res.status(400).send('Could not create it try again')
        return res.send(post)

    } catch (err) {
        console.log(err);
        res.status(500).send('Server error')
    }
}

module.exports = { addingPost }