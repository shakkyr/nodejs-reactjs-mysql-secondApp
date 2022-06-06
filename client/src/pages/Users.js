import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3001/auth/users').then(res=> {
          setUsers(res.data)
          
        })

    },[])
  return (
    <div>
        {users?.map(usr => {
            return (
                
            <div className='userContainer'>
                <div className='title'>
                    {usr.username}
                </div>
                <div className='body'>
                    {usr.email}
                </div>
            </div>
                )
        })}


    </div>
  )
}

export default Users