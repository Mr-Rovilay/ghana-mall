import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-12 bg-gray-100 max-padd-container">
      <div className="mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">Get in Touch if you need a shop or any other enquiry</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <p className="text-gray-700">
                Ghana Mall, 123 Main Street, Accra, Ghana
              </p>
              <p className="text-gray-700">Open: 9 AM - 9 PM, Monday - Sunday</p>
              <div className="mt-4">
                <iframe
                  className="w-full h-64 rounded-lg"
                  title="Ghana Mall Location"
                  src="https://www.google.com/maps/embed/v1/place?q=Accra+Mall,+Accra,+Ghana&key=YOUR_GOOGLE_MAPS_API_KEY"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="flex items-center text-gray-700">
                <FaPhone className="mr-2" /> +233 123 456 789
              </p>
              <p className="flex items-center text-gray-700">
                <FaEnvelope className="mr-2" /> support@ghanamall.com
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
