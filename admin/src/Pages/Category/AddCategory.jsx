import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from 'jodit-react';

const AddCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const editor = useRef(null); // Reference for Jodit editor
    const [data, setData] = useState({
        name: "",
        image: null,
        description: "", // New state for description
    });

    const getInputData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const getFileData = (e) => {
        const { name, files } = e.target;
        setData({ ...data, [name]: files[0] });
    };

    const handleDescriptionChange = (newContent) => {
        setData({ ...data, description: newContent });
    };

    const postData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("image", data.image);
        formData.append("description", data.description); // Append the description

        try {
            setIsLoading(true);
            const res = await axios.post("https://api.kanusrkgroup.in/api/event", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if(res.status===200){
                toast.success("Artist added successfully");
                navigate("/all-events")
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to add artist");
            setIsLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Event</h4>
                </div>
                <div className="links">
                    <Link to="/all-events" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={postData}>
                    <div className="col-md-6">
                        <label htmlFor="categoryName" className="form-label">Events Name</label>
                        <input type="text" name='name' onChange={getInputData} className="form-control" id="categoryName" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="categoryImage" className="form-label">Event Image</label>
                        <input type="file" name='image' onChange={getFileData} className="form-control" id="categoryImage" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="eventDescription" className="form-label">Event Description</label>
                        <JoditEditor
                            ref={editor}
                            value={data.description}
                            onChange={handleDescriptionChange}
                        />
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" disabled={isLoading} className={`${isLoading ? 'not-allowed' : 'allowed'}`}>
                            {isLoading ? "Please Wait..." : "Add Event"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddCategory;
