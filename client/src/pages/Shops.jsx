import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";


const Shops = () => {
  const { shopsData, url} = useContext(ShopContext);
  
  return (
    <section className="py-10 bg-gray-100 max-padd-container">
      <h2 className="text-3xl font-bold text-center text-gray-700">Shops in Ghana Mall</h2>
      <p className="mb-8 text-center text-gray-500">
        Explore various shops offering a wide range of products.
      </p>
      
      {/* Grid of Shops */}
      <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {shopsData.map((shop) => (
          <div
            key={shop.id}
            className="p-4 transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg ring-1 ring-slate-900/5 group"
          >
          
              <img
               src={url+"/images/"+shop.image}
                alt={shop.name}
                className="object-cover w-full h-48 mb-4 rounded-md"
              />
              <h3 className="font-bold text-gray-800 text-xm">
                {shop.name}
              </h3>
              <p className="mb-3 text-sm text-gray-600 line-clamp-1">{shop.description}</p>
              <ul className="mb-3">
                {shop.products.map((product, index) => (
                  <li key={index} className="flex gap-1 text-sm text-gray-500">
                    <p className="">- {product.name} </p>
                    <p className="text-green-500">- ${product.price} </p>
                  
                  </li>
                  
                ))}
              </ul>
           
            <Link
               to={`/shop/${shop._id}`}
              className="inline-block px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500"
            >
              View Shop
            </Link>
          </div>
        ))}
      </div>

      {/* Shop Vacancies */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center text-gray-700">Available Shop Vacancies</h2>
        <p className="mb-6 text-center text-gray-500">
          Explore the latest shop vacancies in Ghana Mall.
        </p>
        <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* Example vacancy - can be dynamic */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Vacant Shop A</h3>
            <p className="mb-4 text-gray-600">
              Perfect location for retail, fashion, or electronics.
            </p>
            <Link
              to="/vacancy/shop-a"
            className="inline-block px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500"
            >
              View Vacancy
            </Link>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Vacant Shop B</h3>
            <p className="mb-4 text-gray-600">
              Spacious unit available for restaurants or cafes.
            </p>
            <Link
              to="/vacancy/shop-b"
             className="inline-block px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500"
            >
              View Vacancy
            </Link>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Vacant Shop C</h3>
            <p className="mb-4 text-gray-600">
              Spacious unit available for restaurants or cafes.
            </p>
            <Link
              to="/vacancy/shop-b"
             className="inline-block px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500"
            >
              View Vacancy
            </Link>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Vacant Shop D</h3>
            <p className="mb-4 text-gray-600">
              Spacious unit available for restaurants or cafes.
            </p>
            <Link
              to="/vacancy/shop-b"
             className="inline-block px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500"
            >
              View Vacancy
            </Link>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Vacant Shop E</h3>
            <p className="mb-4 text-gray-600">
              Spacious unit available for restaurants or cafes.
            </p>
            <Link
              to="/vacancy/shop-b"
             className="inline-block px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500"
            >
              View Vacancy
            </Link>
          </div>
          {/* Add more vacancies as needed */}
        </div>
      </div>
    </section>
  );
};

export default Shops;
