import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const groupProductsByName = (shops) => {
  const productMap = {};
  shops.forEach(shop => {
    shop.products.forEach(product => {
      if (!productMap[product.name]) {
        productMap[product.name] = [];
      }
      productMap[product.name].push({
        shopId: shop._id, // Include shop ID for linking
        shopName: shop.name,
        price: product.price,
        image: shop.image, // Ensure the shop's image is passed here
      });
    });
  });
  return productMap;
};

const PriceComparison = () => {
  const { id } = useParams(); // Access the id from useParams
  const { shopsData, url } = useContext(ShopContext);
  const { products } = useContext(ShopContext);
  
  // Find the product with matching id
  const product = products.find((item) => item.id === parseInt(id));
  if (!product) return <p>Product not found</p>; // Handle cases when product is not found
  
  const { title } = product;

  // Group products by name
  const groupedProducts = groupProductsByName(shopsData);
  
  return (
    <div className="flex items-center justify-center mt-16 max-padd-container">
      {Object.keys(groupedProducts)?.slice(0, 1).map((productName) => (
        <div key={productName} className="mb-8">
          <h3 className="mb-4 text-2xl font-bold text-gray-500 ">{title} - Price Comparison</h3>

          {/* Table for product price comparison */}
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-600">Shop Logo</th>
                <th className="px-4 py-2 text-left text-gray-600">Shop Name</th>
                <th className="px-4 py-2 text-right text-gray-600">Price</th>
                <th className="px-4 py-2 text-right text-gray-600">Link</th>
              </tr>
            </thead>
            <tbody>
              {groupedProducts[productName]?.slice(0, 5).map((shopProduct, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">
                    <img
                       src={url+"/images/"+shopProduct.image}
                      alt={shopProduct.shopName}
                      className="object-cover w-20 h-20 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2">{shopProduct.shopName}</td>
                  <td className="px-4 py-2 text-right">${shopProduct.price}</td>
                  <td className="px-4 py-2 text-right">
                    <Link
                      to={`/shop/${shopProduct.shopId}`}
                      className="text-blue-600 hover:text-blue-400"
                    >
                      View Shop
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PriceComparison;
