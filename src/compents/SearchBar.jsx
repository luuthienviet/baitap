// SearchBar.jsx
const SearchBar = ({ onSearch }) => {
    return (
        <input 
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchBar;