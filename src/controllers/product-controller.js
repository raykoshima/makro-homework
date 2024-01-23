exports.getProductsLanding = (req,res,next) => {
    res.json({message:"welcome to landing page"})

}
exports.getProducts = (req,res,next) => {
    const { search , brand , category , promotion } = req.params;
    res.json({ search , brand , category , promotion })
}
exports.getProductByID = (req,res,next) => {
    const { productID } = req.params;
    res.json({ productID })
    
}