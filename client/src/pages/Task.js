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
    <div>{taskObj.title}</div>
  )
}

export default Task