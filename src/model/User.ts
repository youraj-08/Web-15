import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    content: string;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages : Message[] // This is not a normal array, a special array of type "Message".
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required."], // required field is set true, in case of username not present it prints the error message provided in the array.
        trim: true, // removes any extra spaces given.
        unique: true // the username must be unique
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
        match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, "Enter a valid email"] //explained
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    },
    verifyCode: {
        type: String,
        required: [true, "Verification Code is required."]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Code expiry is required."]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) 
|| mongoose.model<User>("User", UserSchema); 

export default UserModel;

