import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({data}) {

  // let data = data.message;

// url
// name
// created_at
// downloads_url
// language
// description
// console.log(data.)
  return (
    <>
        <Link
        to={data.svn_url}
        target="_blank"
        className="flex flex-col items-center w-full min-h-64 bg-cover bg-no-repeat bg-[url('/bg3.jpeg')] rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        
        >
          {/* <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/docs/images/blog/image-4.jpg"
            alt=""
          /> */}
          <div className="flex flex-col justify-between p-4 leading-normal relative w-full">
            <h5 className="m-2 text-xl font-bold tracking-tight text-white overflow-hidden">{data.name}</h5>
            <p className="m-3 mb-5 font-normal text-md text-gray-400 overflow-hidden">{data.description}</p>
            <p className="m-3 text-sm font-serif text-gray-200 absolute bottom-0 right-5">Language: {data.language}</p>
            <button></button>
            <button></button>
          </div>
        </Link>
        
    </>
  );
}

export default Card;
