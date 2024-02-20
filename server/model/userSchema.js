import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     firstname: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     firstname: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     username: {
//         type: String,
//         required: true,
//         trim: true,
//         unique:true,
//         index:true,
//         lowercase:true,
//     },
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         unique:true,
//         lowercase:true
//     },
//     password:{
//         type: String,
//         required: true,
//     },
//     phone:{
//         type: String,
//         required: true,
//     }
// });




const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                // Check if the email follows a valid format
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email address!`,
        },
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                // Check if the phone number contains 10 digits and doesn't start with zero
                return /^\d{10}$/.test(v) && !v.startsWith('0');
            },
            message: (props) => `${props.value} is not a valid phone number!`,
        },
    },
});

const user = mongoose.model('user', userSchema);

export default user;
