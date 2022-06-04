import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Home = () => {

    const [taskList, setTaskList] = useState([])

    useEffect(()=> {
    axios.get('http://localhost:3001/tasks').then(res=> {
    console.log(res.data);
    setTaskList(res.data)
    })
},[])

return (
    <div>
        {taskList.map((ele, key) => {
        return (
            <div className='task' key={ele.id}>
            <div className="title">{ele.title}</div>
            <div className="body">
                {ele.taskText}</div>
            <div className="footer">{ele.username}</div>
            {/* <div className="footer">{ele.acomplished}</div>
            <div className="footer">{ele.tasks}</div> */}
            </div>

        )

    })}
    </div>
  )
}

export default Home