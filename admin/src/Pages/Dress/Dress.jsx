import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dress = () => {
    const [isLoading, setIsloding] = useState(false)
    const navigate = useNavigate()
    const [data ,setData] = useState({
        dressImage:""
    })

    const grtFileData = (e)=>{
        const{name ,files} = e.target 
         setData({...data ,[name]:files[0]})
    }

    const formData = new FormData()
    formData.append("dressImage" , data.dressImage)

    const postData = async(e)=>{
        e.preventDefault()
        try {
            setIsloding(true)
            const res =await axios.post("https://api.kanusrkgroup.in/api/dress" ,formData)
            if(res.status===200){
                toast.success("Gallery Image add successfully")
                navigate("/all-dress")
                setIsloding(false)
            }
        } catch (error) {
            console.log(error)
            setIsloding(false)

        }
    }
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Dress</h4>
                </div>
                <div className="links">
                    <Link to="/all-dress" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={postData}>
                    <div className="col-md-6">
                        <label htmlFor="title" className="form-label">Dress Image</label>
                        <input type="file"  name='dressImage' onChange={grtFileData}  className="form-control" id="title" />
                    </div>  
                    <div className="col-md-6 mt-5 text-center">
                        <button type="submit" disabled={isLoading} className={`${isLoading ? 'not-allowed':'allowed'}`}>
                            {isLoading ? "Please Wait..." : "Add Dress"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Dress;
