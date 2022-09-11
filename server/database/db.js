import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.3nsm7ad.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('Data connected successfully')
    } catch (error) {
        console.log('Error while connecting with database ', error.message)
    }
}

export default Connection;