const notFoundHandler = (req,res,next) => {
    res.status(404).json({message:"PAGE NOT FOUND"})
}
module.exports = notFoundHandler