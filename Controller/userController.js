const User = require("../Models/userModel")
const ErrorHandler = require("../untils/errorHandle");
const path = require("path")
const catchAsync = require("../middleware/catchAsyncErrors");
const bcrypt = require("bcryptjs")
exports.registerUser = catchAsync(async (req, res, next) => {
    const {fullname, address, phoneNumber, email,  password, repassword} = req.body;
    const user = await User.create({
        fullname, 
        address, 
        phoneNumber, 
        email, 
        password,
        repassword
    })
    const token = user.generateToken();
    res.sendFile(path.join(__dirname, "../views/dangnhap.html"));
})

exports.login = catchAsync(async(req, res, next) => {
    const {email, password} = req.body;
    // console.log("Hello");
    // console.log(password);
    if(!email || !password) {
        return next(new ErrorHandler("Email or Password is Invalid!!!", 400));
    }
    const user = await User.findOne({email});
    if(!user) {
        return next(new ErrorHandler("Invalid email or password!!!", 400));
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    // console.log(isPasswordMatched);
    if(!isPasswordMatched) {
        return next(new ErrorHandler("Email or Password is wrong!!!", 400));
    }
    res.sendFile(path.join(__dirname, "../views/trangchu.html"));
})



exports.findFilm = catchAsync(async(req, res, next) => {
    const film = req.query.findFilm;
    if(film ==='tan y thien do long ky') {
        res.sendFile(path.join(__dirname, "../views/trangthongtinphim.html"))
    }
    else if(film ==='tan bach nuong tu truyen ky') {
        res.sendFile(path.join(__dirname, "../views/trangthongtinphim3.html"))
    }
    else if(film ==='thinh tuyet lau') {
        res.sendFile(path.join(__dirname, "../views/trangthongtinphim4.html"))
    }
    else if(film ==='so kieu truyen') {
        res.sendFile(path.join(__dirname, "../views/trangthongtinphim5.html"))
    }
    else if(film ==='dororo') {
        res.sendFile(path.join(__dirname, "../views/trangthongtinphim6.html"))
    }
    
})