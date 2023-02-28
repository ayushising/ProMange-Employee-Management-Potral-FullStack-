import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
function EmployeeProfile() {
    const empemail="mrudula@gmail.com";
    const url=`http://localhost:9191/employeeByemail/${empemail}`;
    const [empdata, setempdata] = useState({});
    const [project,setproject]=useState({});
    const [manager,setmanager]=useState({});
    useEffect(() => {
        getlatestleave();
    }, [])
    const getlatestleave = () => {
        axios.get(url).then(res => {
            setempdata(res.data);
            setmanager(res.data.manager);
            setproject(res.data.project);
        }).catch(function (error) {
            console.log(error);
        });
    }
    return (
        <div className='items-center'>
            <div className="font-semibold flex text-4xl  justify-center mt-4"><p>Your Profile<hr className="w-36 h-1 mx-auto my-2 bg-red-700 border-0 rounded  dark:bg-red-700"/></p></div>
            <div className='flex mt-12'>
                <div className='Card-profile rounded-[12px]' style={{ marginLeft: "25%" }}>
                    <div className="image-container mt-14">
                        <img
                            className="  h-40 w-40 mb-2 mt-4 ml-2"
                            // =" rounded-full h-12 w-12 b object-contain"
                            src="https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png"
                            alt=""
                            height="100px"
                            width="100px"
                        />
                    </div>
                    <div className="Container-profile">
                        <div className=" mb-4">
                            <div className=" font-semibold  text-4xl">{empdata.firstName} </div>
                            <div className="  font-medium text-m"> {empdata.dateofbirth}</div>
                            <div className=" font-medium  text-m"> {empdata.email} </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '10px' }}>
                </div>
                <div className='Card-profile flex flex-col font-semibold  rounded-[12px]'>
                    <div className='my-8 mx-6 flex items-center ' style={{backgroundColor:'white',height:'50px'}}><p className=' text-2xl ml-2'>Mobile No : {empdata.number}</p></div>
                    <div  className='mx-6 flex items-center ' style={{backgroundColor:'#dfe6ec',height:'50px'}}><p className=' text-xl ml-2'>Designation : <span className=' text-xl'>{empdata.designation}</span></p></div>
                    <div  className='my-8 mx-6 flex items-center 'style={{backgroundColor:'white',height:'50px'}}><p className=' text-xl ml-2'>Department : <span className=' text-lg'>{empdata.department}</span></p> </div>
                    <div className='mx-6 flex items-center' style={{backgroundColor:'#dfe6ec',height:'50px'}}><p className=' text-xl ml-2'>Address : <span className=' text-xl'>{empdata.address}</span></p>  </div>
                    <div className='my-8 mx-6 flex items-center ' style={{backgroundColor:'white',height:'50px'}}><p className=' text-xl ml-2'>Skills : <span className=' text-lg'>{empdata.skills}</span></p></div>
                </div>
            </div>
            <div style={{ height: '20px' }}>
                </div>
            <div className='Card-Profile-large flex flex-col font-semibold rounded-[12px]' style={{ marginLeft: "25%" }}>
                <div className='my-8 mx-6 flex items-center ' style={{backgroundColor:'white',height:'70px'}}><p className=' text-xl ml-4'>Project Name : {project.projectName}</p></div>
                    <div  className='mx-6 flex items-center ' style={{backgroundColor:'#dfe6ec',height:'70px'}}><p className=' text-xl ml-4'>Project Description : <span className=' text-xl'>{project.projectDescription}</span></p></div>
                    <div  className='my-8 mx-6 flex items-center 'style={{backgroundColor:'white',height:'70px'}}><p className=' text-xl ml-4'>Manager Name : <span className=' text-lg'>{manager.firstName}</span></p> </div>
                    <div className='mx-6 flex items-center ' style={{backgroundColor:'#dfe6ec',height:'70px'}}><p className=' text-xl ml-4'>Manager Email : <span className=' text-xl'>{manager.email}</span></p>  </div>
                    <div className='my-8 mx-6 flex items-center ' style={{backgroundColor:'white',height:'70px'}}><p className=' text-xl ml-4'>Manager Contact : <span className=' text-lg'>{manager.number}</span></p></div>
                </div>
                <div style={{ height: '20px' }}>
                </div>
           
        </div>
    );
}
export default EmployeeProfile;
