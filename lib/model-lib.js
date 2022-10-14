import mongoose, { mongo } from 'mongoose';

const contactSchema = new mongoose.Schema({
    email: String,
    name: String,
    message: String,
});

const model = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default model;
