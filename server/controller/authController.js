const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler( async(req, res) => {
    console.log("Register User");
})

const loginUser = asyncHandler( async(req, res) => {
    console.log("Login User");
})

module.exports  = {
    registerUser,
    loginUser
}