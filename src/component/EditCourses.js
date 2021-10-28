import React from 'react'
import { useSelector } from 'react-redux';
import {Link,useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import { toast } from 'react-toastify';
import {useHistory} from "react-router-dom"
import { useDispatch} from 'react-redux'

function EditCourse() {
    const [titlee, setTitlee] = useState("")
    const [courselength, setCourseLength] = useState("")
    const [category, setCategory] = useState("")
    const [author, setAuthor] = useState("")
  
    
    const {id} =useParams();
    const history =useHistory()
    const courses=useSelector((state)=>state)
    const dispatch=useDispatch();
    const currentcourse=courses.find((course)=>course.id === parseInt(id))
    useEffect(() => {
        if(currentcourse)
        {
            setTitlee(currentcourse.titlee)
            setCourseLength(currentcourse.courselength)
            setCategory(currentcourse.category)
            setAuthor(currentcourse.author)
        }
        
    }, [currentcourse])
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!titlee || !courselength || !category || !author)
        {
              return toast.warning("Please fill in all fields...")
        }
        const data={
            id:parseInt(id),
            titlee,
            courselength,
            category,
            author
    
        };
        console.log(data)
        dispatch({type:"UPDATE_COURSE",payload:data});
        toast.success("Data updated succesfully")
        history.push("/")

    }
    
   
   
    return (

        <div className="container">
            {currentcourse?(
                <>
                <h4 className="display-3  text-center">
                    Edit {id}
                </h4>
                <div className="row">
                
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="title"
                            
                            value={titlee} 
                            onChange={e=>setTitlee(e.target.value)}
                            className="form-control" />
    
                        </div>
                        <div className="form-group">
                            <input type="number"
                            value={courselength} 
                            onChange={e=>setCourseLength(e.target.value)}
                            placeholder="Length" className="form-control"/>
    
                        </div>
                        <div className="form-group">
                            <input type="text" 
                              value={category}
                              onChange={e=>setCategory(e.target.value)}
                            placeholder="Category" className="form-control" />
    
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Author" 
                               value={author}
                               onChange={e=>setAuthor(e.target.value)}
       
                            className="form-control"/>
    
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Update"  className="btn btn-primary"/>
                            <Link to="/" className="btn   btn-secondary mr-3">Clear value</Link>
                             <Link to="/" className="btn  btn-danger mr-3">Cancel</Link>
                        </div>
                        
    
                    </form>
    
    
                </div>
                
    
                </div>
    
                </>
            ):(
                <h1 className="display-3 my-5 text-center">No Courses </h1>)}
        
         
        </div>
    );
};

export default EditCourse
