import axios from 'axios'
import { useEffect,useState } from 'react'
import {NavLink} from 'react-router'

function ShowEmployee(){

    const [employees,setEmployees] = useState([])

    async function fetchData() {
        const res = await axios.get('http://localhost:3000/employee')
        setEmployees(res.data)
    }
    useEffect(()=>{fetchData()},[])

    async function deleteEmployee(id){
    const res = await axios.delete(`http://localhost:3000/employee/${id}/`)
     await   fetchData()
    }


    return(
        <div className='container mt-2 p-2'>
            <h3 className='text-center'>Show Employee</h3>

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employees.map((e)=>(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{new Date(e.dob).toLocaleDateString()}</td>
                                <td>{e.gender}</td>
                                <td>{e.address}</td>
                                <td>
                                    < NavLink to={`/employee/update/${e.id}`} className='btn btn-warning btn-sm me-2 col-3'><i class="bi bi-arrow-return-right"></i>Update</NavLink>

                                    <button onClick={()=>{deleteData(e.id)}} className='btn btn-danger btn-sm col-3'><i class="bi bi-trash"></i>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ShowEmployee