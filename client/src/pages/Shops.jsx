import { Link } from "react-router-dom";

const shopsData = [
  {
    id: 1,
    name: "Electronics Hub",
    description: "Your one-stop shop for all electronics needs.",
    image: "https://www.researchgate.net/publication/326894381/figure/fig52/AS:669377519181826@1536603445025/Ankamall-Shopping-Mall-interior-view-The-shopping-mall-is-over-loaded-with-ubiquitous.jpg", // Replace with actual image URLs
    products: ["Phones", "Laptops", "Televisions", "Cameras"],
    link: "/shop/electronics-hub",
  },
  {
    id: 2,
    name: "Fashion Boutique",
    description: "Stylish and trendy clothing for men and women.",
    image: "https://i0.wp.com/blog.meqasa.com/wp-content/uploads/2020/12/maxresdefault.jpg?ssl=1",
    products: ["Men's Clothing", "Women's Clothing", "Shoes", "Accessories"],
    link: "/shop/fashion-boutique",
  },
  {
    id: 3,
    name: "Home Essentials",
    description: "All your home needs in one place.",
    image: "https://citinewsroom.com/wp-content/uploads/2024/02/mel4.jpg",
    products: ["Furniture", "Kitchenware", "Decor", "Bedding"],
    link: "/shop/home-essentials",
  },
  {
    id: 4,
    name: "Home Essentials",
    description: "All your home needs in one place.",
    image: "https://i0.wp.com/ghanatalksbusiness.com/wp-content/uploads/2019/02/Westhills-565.jpg?w=1220&ssl=1",
    products: ["Furniture", "Kitchenware", "Decor", "Bedding"],
    link: "/shop/home-essentials",
  },
  {
    id: 5,
    name: "Home Essentials",
    description: "All your home needs in one place.",
    image: "https://citinewsroom.com/wp-content/uploads/2019/07/file-photo-of-a-shopping-mall.jpg",
    products: ["Furniture", "Kitchenware", "Decor", "Bedding"],
    link: "/shop/home-essentials",
  },
  {
    id: 6,
    name: "Home Essentials",
    description: "All your home needs in one place.",
    image: "https://citibusinessnews.com/wp-content/uploads/2022/10/1383597967680_773572403006-640x375-1.jpg",
    products: ["Furniture", "Kitchenware", "Decor", "Bedding"],
    link: "/shop/home-essentials",
  },
  {
    id: 7,
    name: "Home Essentials",
    description: "All your home needs in one place.",
    image: "https://cdn.prod.website-files.com/650c63fbd98938b94565f70b/656723c54def4462a8a4e8d0_Jocent%202%20copy.jpg",
    products: ["Furniture", "Kitchenware", "Decor", "Bedding"],
    link: "/shop/home-essentials",
  },
  {
    id: 8,
    name: "Home Essentials",
    description: "All your home needs in one place.",
    image: "https://cdn.prod.website-files.com/650c63fbd98938b94565f70b/656723867d6f21f80b2218bf_Helena%27s%20collection%202%20copy.jpg",
    products: ["Furniture", "Kitchenware", "Decor", "Bedding"],
    link: "/shop/home-essentials",
  },
  {
    id: 9,
    name: "Home Essentials",
    description: "All your home needs in one place.",
    image: "https://cdn.prod.website-files.com/6501c9f08d846a3a96168368/6602f63d1282ad8df57353f7_jocent.jpg",
    products: ["Furniture", "Kitchenware", "Decor", "Bedding"],
    link: "/shop/home-essentials",
  },
  {
    id: 10,
    name: "Home Essentials",
    description: "All your home needs in one place.",
    image: "https://pbs.twimg.com/media/EeqXQlJX0AANKT1.jpg",
    products: ["Furniture", "Kitchenware", "Decor", "Bedding"],
    link: "/shop/home-essentials",
  },
  // Add more shop data as needed
];

const Shops = () => {
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
            <Link to={shop.link}>
              <img
                src={shop.image}
                alt={shop.name}
                className="object-cover w-full h-48 mb-4 rounded-md"
              />
              <h3 className="mb-2 font-bold text-gray-800 text-xm">
                {shop.name}
              </h3>
              <p className="mb-3 text-sm text-gray-600 line-clamp-1">{shop.description}</p>
              <ul className="mb-4">
                {shop.products.map((product, index) => (
                  <li key={index} className="text-gray-500">
                    - {product}
                  </li>
                ))}
              </ul>
            </Link>
            <Link
              to={shop.link}
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
