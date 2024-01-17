const multer = require('multer')
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();


const storage = multer.memoryStorage()

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB maximum size
    },
})


const dataUri = (req) => {
    return parser.format('new', req.file.buffer)
}


module.exports = { upload, dataUri }