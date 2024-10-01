import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllCategory = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Added state for search input

    const getApiData = async () => {
        try {
            let res = await axios.get("https://api.kanusrkgroup.in/api/event");
            console.log(res);
            if (res.status === 200) {
                const newData = res.data.data;
                setData(newData.reverse());
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteArt = async (_id) => {
        try {
            let res = await axios.delete("https://api.kanusrkgroup.in/api/event/" + _id);
            if (res.status === 200) {
                toast.success("Event deleted successfully");
                getApiData();
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    // Filter data based on search input
    const filteredData = data.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Events </h4>
                </div>
                <div className="links">
                    <Link to="/add-events" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>

            <div className="filteration">
                <div className="selects">
                </div>
                <div className="search">
                    <label htmlFor="search">Search </label> &nbsp;
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
                    />
                </div>
            </div>

            <section className="d-table ">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.length > 0 ? (
                                filteredData.map((item, index) =>
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td><img src={item.image} alt={item.name} /></td>
                                        <td><Link className="bt edit" to={`/edit-events/${item._id}`}>Edit <i className="fa-solid fa-pen-to-square"></i></Link></td>
                                        <td><Link className="bt delete" onClick={() => deleteArt(item._id)}>Delete <i className="fa-solid fa-trash"></i></Link></td>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <td colSpan="5">No events found</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AllCategory;
