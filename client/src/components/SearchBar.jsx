import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => { 
    // Check if the current path is either 'home' ('/') or 'shops'
    if (location.pathname === '/' || location.pathname.includes('shops')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="text-center border-t border-b bg-gray-50">
      <div className="inline-flex items-center justify-center px-5 mx-3 my-5 rounded-md w-8/9 sm:w-1/2">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:border-blue-300"
        />
        <button
          onClick={() => setShowSearch(false)} // To close the search bar if needed
          className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md cursor-pointer hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  ) : null;
};

export default SearchBar;
