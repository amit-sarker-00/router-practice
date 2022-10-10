import React from "react";
import Home from "../Home/Home";

const ErrorPage = () => {
  return (
    <div className=" mt-48">
      <h2 className="text-5xl font-mono font-bold">
        Opps!Something Went Wrong.
      </h2>
      <h3 className="text-red-500 text-4xl mt-4">Page Not Found</h3>
      <p className="text-red-500 text-5xl">404</p>
      <button className="border bg-blue-600 rounded-md p-2 mt-4 text-zinc-100">
        Back To Home
      </button>
    </div>
  );
};

export default ErrorPage;
