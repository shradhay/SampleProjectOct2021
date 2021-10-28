import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"

function AddCourse() {
   
    const [titlee, setTitlee] = useState("")
    const [courselength, setCourseLength] = useState("")
    const [category, setCategory] = useState("")
    const [author, setAuthor] = useState("")
    
    const history =useHistory()
    const courses=useSelector((state)=>state);
    const dispatch=useDispatch();
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!titlee || !courselength || !category || !author)
        {
              return toast.warning("Please fill in all fields...")
        }
        const data={
            id:courses.length > 0 ? courses[courses.length - 1].id + 1 : 0,
            titlee,
            courselength,
            category,
            author
    
        };
        console.log(data)
        dispatch({type:"ADD_COURSE",payload:data});
        toast.success("Data entered succesfully")
        history.push("/")

    }
    
    // console.log(courses)
    
  
     
    return (
        
        <div className="container">
        <div className="row">
            <h4 className="display-3  text-center">
                ADD 
            </h4>
            <div className="col-md-6 shadow mx-auto p-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="text-left">Title</label>
                        
                        <input 
                        type="text" 
                        value={titlee} 
                        onChange={e=>setTitlee(e.target.value)}
                        placeholder="title"
                        className="form-control" />

                    </div>
                    <div className="form-group">
                    <label className="text-left">Length</label>

                        <input type="number"
                         value={courselength} 
                         onChange={e=>setCourseLength(e.target.value)}
                        placeholder="Length" className="form-control"/>

                    </div>
                    <div className="form-group">
                    <label className="text-left">Category</label>

                        <input type="text" 
                        value={category}
                        onChange={e=>setCategory(e.target.value)}

                        placeholder="Category" className="form-control" />

                    </div>
                    <div className="form-group">
                    <label className="text-left">Author</label>

                        <input type="text"
                        value={author}
                        onChange={e=>setAuthor(e.target.value)}

                        placeholder="author"  className="form-control"/>

                    </div>
                    <div className="form-group">
                  
                     <input type="submit" value="Add course"  className="btn btn-primary mr-5"/>
                     <Link to="/" className="btn btn-danger mr-5">Cancel</Link>
                 
                    </div>
                    
                 
                </form>

            </div>

            </div>

        </div>
        
   
    )
}

export default AddCourse
