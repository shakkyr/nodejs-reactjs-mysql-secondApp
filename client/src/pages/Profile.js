/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

function Profile() {
  let { id } = useParams();
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`http://localhost:3001/auth/basicinfo/${id}`).then((response) => {
      setUsername(response.data.username);
    });

    axios.get(`http://localhost:3001/tasks/byuserId/${id}`).then((response) => {
        setListOfTasks(response.data);
    });
  }, []);

  return (
    <div className="profilePageContainer">
      <div className="basicInfo">
        {" "}
        <h1> Username: {username} </h1>
        {authState.username === username && (
          <button
            onClick={() => {
              history.push("/changepassword");
            }}
          >
            {" "}
            Change My Password
          </button>
        )}
      </div>
      <div className="listOfTasks">
        {listOfTasks.map((value, key) => {
          return (
            <div key={key} className="task">
              <div className="title"> {value.title} </div>
              <div
                className="body"
                onClick={() => {
                  history.push(`/task/${value.id}`);
                }}
              >
                {value.postText}
              </div>
              <div className="footer">
                <div className="username">{value.username}</div>
                <div className="buttons">
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;