import mongoose from "mongoose";
const connection = async (UserName,Password) => {
    const URL=`mongodb+srv://${UserName}:${Password}@ecommerce.ndzualf.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully!!');
    }
    catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}
export default connection;