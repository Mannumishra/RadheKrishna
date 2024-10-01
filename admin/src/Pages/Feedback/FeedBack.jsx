import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedBack = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // State for search input

    const getApiData = async () => {
        try {
            let res = await axios.get("https://api.kanusrkgroup.in/api/all-feedback");
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
            let res = await axios.delete("https://api.kanusrkgroup.in/api/delete-feedback/" + _id);
            if (res.status === 200) {
                toast.success("Feedback deleted successfully");
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
                    <h4>All Feedback</h4>
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
                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                    />
                </div>
            </div>

            <section className="d-table">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Whatsapp Number</th>
                            <th scope="col">Age</th>
                            <th scope="col">Message</th>
                            <th scope="col">Date & Time</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.length > 0 ? (
                                filteredData.map((item, index) =>
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.whatsapp}</td>
                                        <td>{item.age}</td>
                                        <td>{item.message}</td>
                                        <td>{new Date(item.createdAt).toLocaleString()}</td>
                                        <td><Link className="bt delete" onClick={() => { deleteArt(item._id) }}>Delete <i className="fa-solid fa-trash"></i></Link></td>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <td colSpan="8">No feedback found</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default FeedBack;
