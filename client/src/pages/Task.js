import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

const Task = () => {
    let {id} = useParams();
    const [taskObj, setTaskObj] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3001/tasks/${id}`).then(res=> {
          setTaskObj(res.data);
    })
    },[])
    console.log();
  return (
    <div className='taskPage'>
      <div className='leftSide'>
        <div className='task' id="individual">

            <div className='title'>
              {taskObj.title}
            </div>
            <div className='body'>
              {taskObj.taskText}
            </div>
            <div className='footer'>
              {taskObj.username}
            </div>
          </div>
        </div>
      <div className='rightSide'>
        who is doing this task :
      </div>
    </div>
  )
}

export default Task