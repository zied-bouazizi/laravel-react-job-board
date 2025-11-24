import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchForm({ searchKeywords = "", onSearch, onChangeKeywords }) {
  const [keywords, setKeywords] = useState(searchKeywords);

  useEffect(() => {
    onChangeKeywords(keywords);
  }, [keywords]);

  const onSubmit = (ev) => {
    ev.preventDefault();

    onSearch(keywords);
  };

  return (
    <div className="relative border-2 border-gray-100 shadow-md rounded-lg mb-8">
      <form onSubmit={onSubmit}>
        <div className="absolute top-4 left-3">
          <FaSearch className="text-gray-400 hover:text-gray-500" size={20} />
        </div>

        <input
          type="text"
          value={keywords}
          onChange={(ev) => setKeywords(ev.target.value)}
          className="h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
          placeholder="Search Jobs..."
        />

        <div className="absolute top-2 right-2">
          <button
            type="submit"
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
