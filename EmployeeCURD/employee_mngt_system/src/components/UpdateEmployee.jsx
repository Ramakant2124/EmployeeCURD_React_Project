import axios from 'axios'
import { useEffect } from 'react'
import {useParams, useNavigate} from 'react-router'
import {useForm} from 'react-hook-form'

function UpdateEmployee(){
    const {handleSubmit,register,reset,setValue} = useForm()

    const params = useParams()
    console.log('params-->',params)

    async function fetchData() {
        const res = await axios.get(`http://localhost:3000/employee/${params.id}/`)
       // console.log('data-->',res.data)

        setValue('name',res.data.name)
        setValue('dob',res.data.dob)
        setValue('gender',res.data.gender)
        setValue('address',res.data.address)
        
    }

    useEffect(()=>{fetchData()},[])

    async function updateData(valid_data) {
        const res = await axios.put (`http://localhost:3000/employee/${params.id}/`,valid_data)
        nav('/employee/show')
        
    }

    return(
        <div className='container mt-2 p-2'>
            <h3 className='text-center'>UpdateEmployee</h3>
            <form onSubmit={handleSubmit(updateData)} className='container w-50'>
                <label>Name :</label>
                <input type='text' {...register('name')} className='form-control mb-2'/>

                <label>DOB :</label>
                <input type='date' {...register('dob')} className='form-control mb-2'/>

                <label>Gender :</label>
                <select className='form-select mb-2' {...register('gender')}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>

                <label>Address :</label>
                <textarea className='form-control mb-3' {...register('address')}></textarea>

                <button type='submit' className='btn btn-outline-success col-6'><i class="bi bi-bookmark-check"></i>
                    Submit
                </button>

                <button
                    type='button'
                    className='btn btn-outline-primary col-6 float-end'
                    onClick={()=>{reset()}}
                ><i class="bi bi-x"></i>
                    Reset
                </button>


            </form>





        </div>
    )
}

export default UpdateEmployee