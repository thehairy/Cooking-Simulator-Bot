import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    _id: { type: String, required: true },
    warns: [{
        id: { type: Number, default: 0, required: true },
        reason: { type: String, default: '' },
        date: { type: Date, default: new Date() },
        punisher: { type: String, required: true }
    }],
    kicks: [{
        id: { type: Number, default: 0, required: true },
        reason: { type: String, default: '' },
        date: { type: Date, default: new Date() },
        punisher: { type: String, required: true }
    }],
    bans: [{
        id: { type: Number, default: 0, required: true },
        reason: { type: String, default: '' },
        date: { type: Date, default: new Date() },
        punisher: { type: String, required: true }
    }]
})

export const User = model('User', userSchema);