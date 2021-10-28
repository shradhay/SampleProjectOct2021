import React from 'react'
import {Link} from "react-router-dom"
import MaterialTable from 'material-table'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'


function Home() {
    const courses =useSelector(state=>state)
    const [userlist, setuserlist] = useState({
        columns:[
            {title:"Title",field:"title"},
            {title:"Length",field:"length"},
            {title:"Category",field:"caterory"},
            {title:"Author",field:"author"},
            
        ],
        data:[
            {title:"React js",length:"12",caterory:"Js",author:"asd",role:"1",action:["TableEditbutton","TableDeleteButton"]},
            {title:"REdux",length:"22",caterory:"Libar",author:"df",role:"10",action:["TableEditbutton","TableDeleteButton"]},
            {title:"flux",length:"55",caterory:"Frame",author:"fgc",role:"3",action:["TableEditbutton","TableDeleteButton"]},
               
     
         ],


    })
    const dispatch=useDispatch()
    const deleteCourse=(id)=>{
        dispatch({type:"DELETE_COURSE",payload:id})
        toast.success("Deleted successfully..")


    }
    return (
        <div className="container">
            <div className="row text-left">
                <h1>Courses</h1>
                <div className="col-md-12 mr-5 text-left">
                   
                    <Link to="/add" className="btn btn-primary ml-5px">New</Link>
                        
                   
                    {/* <Link to="/editcourses" className="btn btn-warning ml-5">Edit</Link>
                    <Link to="/delete" className="btn btn-danger ml-5">Delete</Link> */}
                     
                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-hover">
                        <thead className="text-black bg-light text-center">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Length</th>
                                <th scope="col">Category</th>
                                <th scope="col">Author</th>
                                </tr>
                        </thead>
                        <tbody className="text-black">
                            {courses.map((course,id)=>(
                                    <tr key={id}>
                                        <td>{id+1}</td>
                                        <td>{course.titlee}</td>
                                        <td>{course.courselength}</td>
                                        <td>{course.category}</td>
                                        <td>{course.author}</td>
                                        <td>

                                            <Link to={`/editcourses/${course.id}`} className="btn btn-small btn-primary mr-2">Edit</Link>
                                            <button type="button" onClick={()=>deleteCourse(course.id)} className="btn btn-small btn-danger mr-2">Delete</button>
                                        
                                        </td>
                                        </tr>
                            ))
                            }
                        </tbody>
                    </table>
                {/* <MaterialTable 
                        className="table"
                        title="User"
                       data= {courses.map((course,id)=>(
                                    <tr key={id}>
                                        <td>{id+1}</td>
                                        <td>{course.titlee}</td>
                                        <td>{course.courselength}</td>
                                        <td>{course.category}</td>
                                        <td>{course.author}</td>
                                        <td>

                                            <Link to={`/editcourses/${course.id}`} className="btn btn-small btn-primary mr-2">Edit</Link>
                                            <button type="button" onClick={()=>deleteCourse(course.id)} className="btn btn-small btn-danger mr-2">Delete</button>
                                        
                                        </td>
                                        </tr>
                            ))
                            }
                      
                       columns={userlist.columns}
                       options={{
                           paging:false,
                           filtering:true,
                        //    exportButton:true,
                        //    action:true,
               
                rowStyle: {
                    backgroundColor: '#EEE',
                  },
                 }}
                 actions={[
                    {
                      icon:"add_box",
                    //   tooltip:"my tooltip",
                      position:"toolbar",
                    //   onClick:()=>adduser()
                    }
                  ]}
    /> */}

                </div>


            </div>
            
        </div>
    )
}

export default Home
