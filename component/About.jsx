import React from 'react';
import banner from "../../public/img/Banner.jpg";
import {Link} from "react-router-dom"


function About() {
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500"> new everyday!!! </span>
            </h1>
            <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis assumenda libero commodi rem, soluta tenetur similique aspernatur dicta, unde totam blanditiis, dolorem voluptatum tempora quam excepturi quos labore molestias voluptas. Officia obcaecati maiores mollitia sapiente iusto ipsum molestiae nostrum ipsam error exercitationem culpa nulla inventore nobis provident, illo earum? Dolor.
            </p>

          
             
          </div>
          <Link to="/course">
          <button className="btn mt-6 btn-secondary">Discover Books
            </button>
          </Link>
        </div>
        <div className="order-1 w-full md:w-1/2">
        <img src={banner} className="w-92 h-92" alt="" />
        </div>
      </div>

    </>
  )
}

export default About
