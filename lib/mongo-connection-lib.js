import mongoose from 'mongoose';

export default async function mongoConnection() {
    const DB = process.env.MONGO_URL.replace(
        '<password>',
        process.env.MONGO_PASSWORD
    ).replace('<username>', process.env.MONGO_USERNAME);

    try {
        const con = await mongoose.connect(DB);
        console.log(con.connection.host);
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
}
