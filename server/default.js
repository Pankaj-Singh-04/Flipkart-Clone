// to send default data on frontend
 import { products } from "./constants/data.js";
 import Product from "./model/productSchema.js";

 const DefaultData= async ()=>{
    try{
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log('Products data entered successfully in DB')
    }
    catch(error){
        console.log('Error while inserting default data',error.message);
    }
 }

 export default DefaultData;