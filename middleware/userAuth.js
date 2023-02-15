const session = require("express-session");
const User = require("../models/userModel")


let userSession = false || {}
let isLoggedin

const isLogin = async (req,res,next) => {
    try {
        userSession = req.session
        if(userSession.userId) {
            userData = await User.findById({_id:userSession.userId})
            if(userData.is_verified===1){
                
            
        next();
    } else {
        userSession.userId = null;
        res.redirect("/login");
    }
        }
        else{
            res.redirect('/login');
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

const isLogout = async (req,res,next) => {
    try {
        userSession = req.session
        if(userSession.userId){
            // userSession.userId=null
            isLoggedin = true
            res.redirect('/');
        }
        next()
       
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    isLogin,
    isLogout
}