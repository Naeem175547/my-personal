import React from 'react'
import {useForm} from 'react-hook-form'

export default function From() {
    const {register,handleSubmit}=useForm();
    console.log(useForm())
    const onSubmit=(data)=>{
        console.log(data)

    }
  return (
    <form>
        <label htmlFor='name' onSubmit={handleSubmit(onSubmit)}>Name</label><br/>
        <input type='text' id='name' {...register("name")}/>
        <br/><br/>
        <label htmlFor='email'>Email</label><br/>
        <input type='email' id='email'{...register("email")}/>
        <br/><br/>
        <label htmlFor='age'>Age</label><br/>
        <input type='number' id='age' {...register("age")}/>
        <br/> <br/>
        <button type='submit'>Submit</button>

    </form>
  )
}
