exports.register = (req,res,next) => {
    // res.json({message:"register"})
    const { email , password } = req.body
    res.json({email , password })

};
exports.login = (req,res,next) => {
    const { email , password } = req.body
    res.json({email , password })
}
exports.forgetPassword = (req,res,next) => {
    const { email } = req.body
    res.json({ email })
}
exports.verifyForgetPassword = (req,res,next) => {
    const { token } = req.params
    // res.json({message:"verify Forget Password"})
    res.json({ token })
}
exports.resetPassword = (req,res,next) => {
    const { token } = req.params
    const { password } = req.body
    // res.json({message:"reset password"})
    res.json({ token , password })
}