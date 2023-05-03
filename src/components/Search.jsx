import { Fragment, useState } from "react";

const Search = (props) => {
  const [languages, setLanguages] = useState(props.books);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
    const searchValue = event.target.search.value;
    props.updateState(
      languages.filter(
        (book) =>
          book.language.toLowerCase() === searchValue.trim().toLowerCase()
      )
    );
  };

  const handleAscending = () => {
    const newArr = languages
      .sort((a, b) => (a.price > b.price ? 1 : -1))
      .slice();
    setLanguages(newArr);
    props.updateState(newArr);
  };
  const handleDescending = () => {
    const newArr = languages
      .sort((a, b) => (a.price < b.price ? 1 : -1))
      .slice();
    setLanguages(newArr);
    console.log(newArr);
    props.updateState(newArr);
  };

  return (
    <div className="flex gap-3">
      <form action="" onSubmit={submitHandler}>
        <div className="flex gap-3">
          <div className="input-group">
            <input
              type="text"
              name="search"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div className="flex gap-3">
        <button className="btn btn-primary" onClick={handleDescending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
          </svg>
        </button>
        <button className="btn btn-primary" onClick={handleAscending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
