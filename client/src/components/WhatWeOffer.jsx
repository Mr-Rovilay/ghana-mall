
const mallBgImage = 'https://images.pexels.com/photos/54581/escalator-stairs-metal-segments-architecture-54581.jpeg?cs=srgb&dl=pexels-pixabay-54581.jpg&fm=jpg';

const offerings = [
  {
    title: "Affordable Prices",
    description: "We offer competitive prices for all our products and services, ensuring value for your money.",
    icon: "💰",
  },
  {
    title: "Wide Product Range",
    description: "Explore a wide variety of products across multiple categories from trusted shops.",
    icon: "🛒",
  },
  {
    title: "Quality Assurance",
    description: "Our vendors go through rigorous checks to make sure the products are of the highest quality.",
    icon: "🔒",
  },
  {
    title: "24/7 Customer Support",
    description: "We offer round-the-clock customer support to assist with any issues or queries.",
    icon: "📞",
  },
];

const WhatWeOffer = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${mallBgImage})`, // The mall background image
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100vh', // Full viewport height
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center max-padd-container bg-opacity-80 backdrop-filter ">
        <h2 className="text-4xl font-bold text-white mt-14">What We Offer</h2>
        <p className="max-w-xl text-center text-white">
          Explore our range of services and products designed to bring you the best shopping experience.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {offerings.slice(0, 2).map((offering, index) => (
            <div key={index} className="p-6 mt-5 transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-xl sm:block md:hidden">
              <div className="flex items-center mb-4 text-4xl">
                <span>{offering.icon}</span>
                <h3 className="ml-4 text-2xl font-semibold text-gray-800">{offering.title}</h3>
              </div>
              <p className="text-gray-600">{offering.description}</p>
            </div>
          ))}

          {/* Display 3 offerings on medium screens */}
          {offerings.slice(0, 3).map((offering, index) => (
            <div key={index} className="hidden p-6 mt-10 transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-xl md:block">
              <div className="flex items-center mb-4 text-4xl">
                <span>{offering.icon}</span>
                <h3 className="ml-4 text-2xl font-semibold text-gray-800">{offering.title}</h3>
              </div>
              <p className="text-gray-600">{offering.description}</p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
