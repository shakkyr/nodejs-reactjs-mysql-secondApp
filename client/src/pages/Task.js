/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

const Task = () => {
    let {id} = useParams();
    const [taskObj, setTaskObj] = useState({})
    const [workers, setWorkers] = useState([])
    const [newWorker, setNewWorker] = useState('')


    useEffect(() => {
        axios.get(`http://localhost:3001/tasks/${id}`).then(res=> {
          setTaskObj(res.data);
    })

        axios.get(`http://localhost:3001/workers/${id}`).then(res=> {
          setWorkers(res.data);
    })
    },[])
    
    const addWorker = () => {
      axios.post('http://localhost:3001/workers', {name: newWorker, TaskId:id}).then(res=> {
        const workerToAdd = {name: newWorker}
        setWorkers([...workers, workerToAdd])
      })
    }
  
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
        <div className='addWorkerContainer'>
          <input type="text" placeholder="Worker Name" autoComplete='off'  onchange={(e)=> {setNewWorker(e.target.value)}}/>
          <button onClick={addWorker}>Add Worker</button>
        </div>
        <div className='listOfWorkers'>
          {workers.map(ele => {
            return <div className='worker' key={ele.id}>
              {ele.name}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Task