import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const url = "https://api.github.com/users";
  const Url = "https://api.github.com/users/QuincyLarson";

  const [value, setValue] = useState(0);

  const [size, setSize] = useState(window.innerWidth);

  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIserror] = useState(false);
  const [user, setUser] = useState("default user");
  const [text,setText]=useState('');
  // const [isError,setIsError]=useState(false);
  const firstValue=text||'hello world';
  const secondValue=text&&'hello world';

  useEffect(() => {
    if (value > 1) {
      document.title = "New Message " + value;
    }
  }, [value]);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Use effect render");
    window.addEventListener("resize", checkSize);
    //    Clean up in USEEFFECT
    //   return()=>{
    //       console.log('cleanup');
    //       window.removeEventListener('resize',checkSize)
    //   }
  }, []); //aslo u can fix this by dependency array

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // console.log(users);
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    fetch(Url)
      .then((resp) =>{
        if(resp.status>=200&&resp.status<=299){
          return resp.json()
        }else{
          setIsLoading(false);
          setIserror(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user)=>{
          const {login}=user;
          setUser(login)
          setIsLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error....</h2>;
  }

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
      <h1>Window</h1>
      <h2>{size} PX</h2>

      <h3>github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>

      <h1>{user}</h1>

      <h1>{firstValue}</h1>
      <h1>Value :{secondValue}</h1>
      {!isError&&<h1>Error......!</h1>}
      {!isError?<p>There is a error</p>:<div>There is no error</div>}
    </>
  );
};

export default UseEffect;
