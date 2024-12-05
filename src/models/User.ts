import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    handle: string;
    name: string
    email: string
    password: string
    description: string
    image: string
    links: string
}

const userSchema = new Schema({
    handle: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [
            (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email),
            "Por favor, ingrese un email válido."
        ]
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: '',
    },
    links: {
        type: String,
        default: '[]'
    }
})

const User = mongoose.model<IUser>('User', userSchema)
export default User