// Simulate a dynamic content source (like API or Context)
const aboutContent = {
  title: "Welcome to Ghana Mall",
  description: `Ghana Mall is a one-stop solution for all your shopping needs, providing a wide variety of stores and products to suit everyone's preferences. 
  Our platform allows you to explore multiple shops, compare prices, and find the best deals on products ranging from electronics to fashion and groceries.`,
  mission: "Our mission is to make online shopping easier, more accessible, and enjoyable for everyone in Ghana.",
  vision: "We aim to be the largest online marketplace in Africa, connecting millions of customers with thousands of retailers.",
  team: [
    {
      name: "Kwame Boateng",
      role: "CEO",
      image: "/ceo1.jpeg",
    },
    {
      name: "Amina Mensah",
      role: "CTO",
      image: "/ceo2.jpeg",
    },
    {
      name: "Kojo Appiah",
      role: "Marketing Manager",
      image: "/ceo3.jpeg",
    },
  ],
};

const AboutPage = ({ title, description, mission, vision, team }) => {
  return (
    <div className="w-full p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{title}</h1>
      <p className="text-gray-600 mb-8">{description}</p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-gray-600 mt-2">{mission}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
        <p className="text-gray-600 mt-2">{vision}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-medium text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Simulating passing dynamic content as props
const About = () => {
  return (
    <AboutPage
      title={aboutContent.title}
      description={aboutContent.description}
      mission={aboutContent.mission}
      vision={aboutContent.vision}
      team={aboutContent.team}
    />
  );
};

export default About;
