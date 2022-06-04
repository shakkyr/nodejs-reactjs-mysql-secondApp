import React from 'react'
import {Formik, Form, Field, ErrorMessage, } from 'formik'
import { useHistory } from "react-router-dom";
import * as Yup from 'yup'
import axios from 'axios'

const CreateTask = () => {
  
  const initialValues = {
    title: '',
    taskText: '',
    username: '',
  }

  let history = useHistory();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    taskText: Yup.string().required(),
    username: Yup.string().min(2).max(15).required()
  })

  const submitHandler = (data) => {
    axios.post('http://localhost:3001/tasks',data).then(res=> {

      history.push(`/`)
    })
  }

  return (
    <div className="createTaskPage">
      {/* <Formik initialValues={initialValues} onSubmit={submitHandler} > */}
      <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validationSchema}>
          <Form className='formContainer'>
            <label>Title: </label>
            <ErrorMessage name="title" component='span'/>
            <Field autocomplete="off" id="inputCreateTask" name="title" placeholder="(EX. do...)" />
            <label>Task: </label>
            <ErrorMessage name="taskText" component='span'/>
            <Field autocomplete="off" id="inputCreateTask" name="taskText" placeholder="task details" />
            <label>Username: </label>
            <ErrorMessage name="username" component='span'/>
            <Field autocomplete="off" id="inputCreateTask" name="username"  />

            <button type='submit'>Create Task</button>
          </Form>
      </Formik>
    </div>
  )
}

export default CreateTask