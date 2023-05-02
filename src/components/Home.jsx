import { Fragment, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import Search from "./Search";

const data = [
  { language: "Pascal", edition: "third", price: 20 },
  { language: "Python", edition: "four", price: 30 },
  { language: "SQL", edition: "second", price: 25 },
  { language: "Java", edition: "first", price: 15 },
  { language: "Java", edition: "second", price: 15 },
  { language: "JavaScript", edition: "third", price: 30 },
  { language: "Php", edition: "second", price: 35 },
  { language: "laravel", edition: "first", price: 20 },
  { language: "React", edition: "second", price: 26 },
  { language: "React", edition: "first", price: 10 },
];

const Home = () => {
  const [books, setBooks] = useState([
    { language: "Pascal", edition: "third", price: 20 },
    { language: "Python", edition: "four", price: 30 },
    { language: "SQL", edition: "second", price: 25 },
    { language: "Java", edition: "first", price: 15 },
    { language: "Java", edition: "second", price: 15 },
    { language: "JavaScript", edition: "third", price: 30 },
    { language: "Php", edition: "second", price: 35 },
    { language: "laravel", edition: "first", price: 20 },
    { language: "React", edition: "second", price: 26 },
    { language: "React", edition: "first", price: 10 },
  ]);

  const searchHandler = (newState) => {
    setBooks(newState);
  };

  return (
    <Fragment>
      <Header />
      <div className="mx-auto flex items-center justify-center">
        <Search updateState={searchHandler} books={data} />
      </div>

      <div className="w-full lg:w-[80vw] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 place-items-center py-12">
        {books.map((book) => (
          <Card
            key={Math.random()}
            language={book.language}
            edition={book.edition}
            price={book.price}
          />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
