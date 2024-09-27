import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registation = () => {
    const [data, setData] = useState([])

    const getApiData = async () => {
        try {
            let res = await axios.get("http://localhost:8000/api/all-registation")
            console.log(res)
            if (res.status === 200) {
                const newData = res.data.data
                setData(newData.reverse())
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteArt = async (_id) => {
        try {
            let res = await axios.delete("http://localhost:8000/api/delete-feedback/" + _id)
            if (res.status === 200) {
                toast.success("FeedBack Delete successfully")
                getApiData()
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }
    useEffect(() => {
        getApiData()
    }, [data.length])
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Registations </h4>
                </div>
            </div>

            <div className="filteration">
                <div className="selects">
                </div>
                <div className="search">
                    <label htmlFor="search">Search </label> &nbsp;
                    <input type="text" name="search" id="search" />
                </div>
            </div>

            <section className="d-table ">
                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Whatsapp Number</th>
                            <th scope="col">Address</th>
                            <th scope="col">Age</th>
                            <th scope="col">Message</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) =>
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.whatsappNumber}</td>
                                    <td>{item.address}</td>
                                    <td>{item.age}</td>
                                    <td>{item.message}</td>
                                    <td><Link className="bt delete" onClick={() => { deleteArt(item._id) }}>Delete <i class="fa-solid fa-trash"></i></Link></td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </section>
        </>
    )
}

export default Registation