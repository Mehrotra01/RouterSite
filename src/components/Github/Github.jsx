import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

function Github() {
  //   const [githubUser, setGithubUser] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Mehrotra01")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setGithubUser(data);
  //       });
  //   }, []);

  const githubUser = useLoaderData();

  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/mehrotra01/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepo(data);
      });
  }, []);

  return (
    <>
      <div className="m-4 bg-gray-600 text-white p-4 ">
        <h1 className=" font-serif text-5xl text-center">
          Github
        </h1>
        <div className="flex m-5">
          <div className="w-2/3 m-5 ">
            <img src={githubUser.avatar_url} alt="Git picture" width={450} />
          </div>
          <div className="m-5 font-serif ">
            <div className="text-center">
              <div className="text-5xl font-extrabold ...">
                <span className="bg-clip-text text-transparent bg-[url('/bg3.jpeg')]">
                This is {githubUser.login}
                </span>
              </div>
              <p className="text-right text-black text-xl">
                Github Repos : {githubUser.public_repos}
              </p>
            </div>
            <div className="grid grid-cols-3  gap-4">
              {repo.map((data) => (
                <Card data={data} key={data.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;

export const gitUserData = async () => {
  const res = await fetch("https://api.github.com/users/Mehrotra01");
  return res.json();
};
