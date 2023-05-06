// const Product = require("../models/products");


// const addProduct = async (req, res) => {
	
//   try {
//     const {
//       productsName,
//       category,
//       description,
//       oldPrice,
//       newPrice,
//       stockAmount,
//       createdAt,
//       categoryId,
//       userName,
//     } = req.body;
//     const images = req.files.map((file) => file.filename);

//     const baseUrl = "http://localhost:5000"; 
//     const imageUrls = images.map(
//       (filename) => `${baseUrl}/uploads/${filename}`
//     ); 

//     const product = new Product({
//       productsName,
//       category,
//       description,
//       oldPrice,
//       newPrice,
//       stockAmount,
//       createdAt,
//       categoryId,
//       userName,
//       images: imageUrls,
//     });
//     await product.save();

//     res.status(201).json({ success: true, product });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };




// module.exports = {
//     addProduct
// }