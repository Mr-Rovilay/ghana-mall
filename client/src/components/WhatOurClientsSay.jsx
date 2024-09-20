
const clientBgImage = 'https://www.chapmantaylor.com/uploads/MUVI-Haifa-Mall-9.jpeg';

const testimonials = [
  {
    name: "John Doe",
    comment: "This platform has completely changed the way I shop! The prices are unbeatable, and the delivery is super fast.",
    company: "XYZ Inc.",
    avatar: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726704000&semt=ais_hybrid",
  },
  {
    name: "Jane Smith",
    comment: "I love the variety of products available. The price comparison feature is a game-changer for me.",
    company: "ABC Corp.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "David Lee",
    comment: "Excellent customer service and very reliable vendors. I always have a great experience shopping here.",
    company: "Tech Solutions",
    avatar: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
];

const WhatOurClientsSay = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${clientBgImage})`, 
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '60vh', // Full viewport height
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[50%] max-padd-container bg-opacity-80 backdrop-filter">
        <h2 className="mt-6 mb-6 text-4xl font-bold text-white">What Our Clients Say</h2>
        <p className="max-w-xl mb-8 text-center text-white">
          Here&#39;s what our customers are saying about us!
        </p>

        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 transition-shadow duration-200 bg-white rounded-tl-none rounded-br-none shadow-md rounded-tr-xl rounded-bl-xl hover:shadow-xl">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                  loading="lazy"
                />
                  {/* <img src="image.jpg" loading="lazy" height="300px" width="300px" /> */}
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatOurClientsSay;
