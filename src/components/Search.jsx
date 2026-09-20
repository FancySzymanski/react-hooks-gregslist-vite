function Search({  onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(e.target.elements.search.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="search free stuff"
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
