import React from 'react'
import {useForm} from 'react-hook-form'
import './App.css'

function App() {

  const{
    register,
    handleSubmit,
    watch,
    formState:{errors,isSubmitting},
  }=useForm()

  function onSubmit(data){
    console.log("Submitting the form",data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input {...register('firstName',{required:true , minLength:4})} />
        {errors.firstName && <p>first name is required</p>}
      </div>
      <br />
      <div>
        <label>Middle Name:</label>
        <input {...register('MiddleName')} />
      </div>
      <br />
      <div>
        <label>Last Name</label>
        <input {...register('LastName')} />
      </div>
      <br />
      <input type="Submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} />
    </form>
  )
}

export default App
