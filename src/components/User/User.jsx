import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div className="text-center text-white bg-gray-500">
      <p className="font-2xl"> User: {userid}</p>
    </div>
  );
}

export default User;
