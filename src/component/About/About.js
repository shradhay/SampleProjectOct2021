import React from 'react'
import MaterialTable from 'material-table'
import { useState } from 'react'

function About() {
    const [userlist, setuserlist] = useState({
        columns:[
            {title:"Name",field:"name"},
            {title:"E-mail",field:"email"},
            {title:"Phone",field:"phone"},
            {title:"Role",field:"role"},
            {title:"Action",field:"action"}
        ],
        data:[
            {name:"shraddha",email:"shraddha@gmail.com",phone:"845761235",role:"1",action:["TableEditbutton","TableDeleteButton"]},
            {name:"Dummydata",email:"Dummydata@gmail.com",phone:"5489632145",role:"10",action:["TableEditbutton","TableDeleteButton"]},
            {name:"ABCuser",email:"ABCuser@gmail.com",phone:"8523641257",role:"3",action:["TableEditbutton","TableDeleteButton"]},
               
     
         ],


    })
    return (
        <div>
               <MaterialTable 
                        className="table"
                        title="User"
                       data={userlist.data}
                      
                       columns={userlist.columns}
                       options={{
                           paging:false,
                           filtering:true,
                           exportButton:true,
                        //    action:,
               
                rowStyle: {
                    backgroundColor: '#EEE',
                  },
                 }}
                 actions={[
                    {
                      icon:"add_box",
                      tooltip:"my tooltip",
                      position:"toolbar",
                    //   onClick:()=>adduser()
                    }
                  ]}
    />
            
        </div>
    )
}

export default About
