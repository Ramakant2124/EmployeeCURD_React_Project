import { useForm } from 'react-hook-form'
import axios from 'axios'

function AddEmployee(){

    const {handleSubmit,register,reset} = useForm()

    function saveData(valid_data){
        axios.post('http://localhost:3000/employee',valid_data)
        .then((res)=>{
            console.log("Employee Added",res.data)
            reset()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div className='container mt-2 p-2'>
            <h3 className='text-center'>Add Employee</h3>

            <form onSubmit={handleSubmit(saveData)} className='container w-50'>

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
                    onClick={()=>reset()} className='btn btn-outline-primary col-6 float-end'
                    
                ><i class="bi bi-x"></i>
                    Reset
                </button>

            </form>
        </div>
    )
}

export default AddEmployee