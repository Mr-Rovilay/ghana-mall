import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#222] text-white max-padd-container py-12 rounded-t-xl"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col items-center md:items-start">
          <NavLink to={"/"} className="mb-4 text-xl font-bold">
            <span className="text-red-600">GHANA</span>
            <span className="text-green-600">MALL</span>
          </NavLink>
          <p className="text-left text-gray-30">
            At Ghana Mall, we bring the best of retail to your fingertips,
            offering a wide range of products at competitive prices.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-start">
          <h4 className="mb-4 bold-20">Quick links</h4>
          <ul className="space-y-2 regular-15 text-gray-30">
            <li className="">
              <Link to={"/"} className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li className="">
              <Link to={"/about"} className="hover:text-secondary">
                About
              </Link>
            </li>
            <li className="">
              <Link to={"/shops"} className="hover:text-secondary">
                Shops
              </Link>
            </li>
            <li className="">
              <Link to={"/contact"} className="hover:text-secondary">
                Foods
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start md:items-start">
          <h4 className="mb-4 bold-20">Policies</h4>
          <ul className="space-y-2 regular-15 text-gray-30">
            <li className="">
              <Link to={"/"} className="hover:text-secondary">
                Terms of service
              </Link>
            </li>
            <li className="">
              <Link to={"/"} className="hover:text-secondary">
                Privacy Policy
              </Link>
            </li>
            <li className="">
              <Link to={"/"} className="hover:text-secondary">
                Shipping Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2 md:items-start ">
          <h4 className="mb-3 bold-20">Contact us</h4>
          <p className="text-gray-30">
            Email:{" "}
            <a
              href="mailto:support@ghanamall.nc"
              className="hover:text-secondary"
            >
              support@ghanamall.nc
            </a>
          </p>
          <p className="text-gray-30">
            Phone: <a href="tel:11234567" className="hover:text-secondary"></a>
            123455566
          </p>
          <p className="text-gray-30">Address:11234 street, ghana city</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <hr className="h-[1px] w-full max-w-screen-md my-4 border-white" />
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Ghana Mall | All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
