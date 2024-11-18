import React, { useState, useEffect } from "react";
// import list from "../../public/list.json";
// import books from "../../public/books.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book"); 
        console.log(res.data); 
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    getBooks(); 
  }, []); 
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-sbold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here!:</span>
          </h1>

          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            assumenda libero commodi rem, soluta tenetur similique aspernatur
            dicta, unde totam blanditiis, dolorem voluptatum tempora quam
            excepturi quos labore molestias voluptas. Officia obcaecati maiores
            mollitia sapiente iusto ipsum molestiae nostrum ipsam error
            exercitationem culpa nulla inventore nobis provident, illo earum?
            Dolor.
          </p>

          <Link to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {books.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
