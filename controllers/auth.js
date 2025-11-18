const User = require('../models/User')
const sendCookie = require('../utils/sendCookie')

exports.loginPage = (req,res)=>{
    return res.render('login',{msg:""})
}

exports.login = async(req,res)=>{
    try{
        const {name,password}=req.body

        const user = await User.findOne({name:name})
        if(!user){
            return res.render('login',{msg:'Incorrect'})
        }
 
        const validation = await user.isValidatedPassword(password)

        if(!validation){
            return res.render('login',{msg:'Incorrect'})
        }
        return sendCookie(user,res)
       
    }catch(e){
        console.log(e)
        return res.send('error')
    }
}

exports.logout = (req,res)=>{
    return res.cookie('token', null).redirect('/login')

}