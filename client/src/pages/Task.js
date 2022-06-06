/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

const Task = () => {
    let {id} = useParams();
    const [taskObj, setTaskObj] = useState({})
    const [workers, setWorkers] = useState([])
    const [users, setUsers] = useState([])
    const [newWorker, setNewWorker] = useState('')

    const systemUser = JSON.parse(localStorage.getItem("accessToken"))


    useEffect(() => {
        axios.get(`http://localhost:3001/tasks/${id}`).then(res=> {
          setTaskObj(res.data);
    })

        axios.get(`http://localhost:3001/workers/${id}`).then(res=> {
          setWorkers(res.data);
    })

        axios.get('http://localhost:3001/auth/users').then(res=> {
          setUsers(res.data)
          
        })
    },[])

    
    const addWorker = () => {
      axios.post('http://localhost:3001/workers', {name: newWorker, TaskId:id}, {
        headers: {
          accessToken: JSON.parse(localStorage.getItem("accessToken")).token,
        },
      }).then(res=> {
        if(res.data.error) {
          alert('You are not Authorized to do this')
        } else {

          const workerToAdd = {name: newWorker}
          setWorkers([...workers, workerToAdd])
          setNewWorker("")
        }
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
      {
        systemUser?.role===1 ?

      <div className='rightSide'>
        <div className='addWorkerContainer'>
          {/* <input type="text" placeholder="Worker Name" autoComplete='off' value={newWorker} onChange={(e)=> {setNewWorker(e.target.value)}}/> */}
          <select   onChange={(e)=> {setNewWorker(e.target.value)}} defaultValue="DEFAULT">
            <option  defaultValue="Select User" >Select User</option>
            {users && users.map((user) => (
              <option key={user.id} value={user.username}>{user.username}</option>
            ))
            }
          </select>
          <button onClick={addWorker}>Add Emploee</button>
        </div>
        <div className='listOfWorkers'>
          {workers.map(ele => {
            return <div className='worker' key={ele.id}>
              {ele.name}
            </div>
          })}
        </div>
      </div>
        :
        ''
      }
    </div>
  )
}

export default Task