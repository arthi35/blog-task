import './updateEmployee.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateEmployee = () => {
    const [postDetails, setPostDetails] = useState({
        title: '',
        description: '',
        postCategory: '',
        img: ''
        
    });

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const postID = params.postID.toString();
        axios.get(`http://localhost:5000/posts/${postID}`).then(response => {
            setPostDetails(response.data[0]);
            console.log(response)
        }).catch(err => {
            console.log('Error: ', err);
        })
    }, [params.postID]);



    const handleSubmit = async (event) => {
        event.preventDefault();
        const postID = params.postID.toString();
        const updatePost = {...postDetails};
        try{
            const response = await axios.put(`http://localhost:5000/employees/${postID}`, updatePost);
            if(response){
                setPostDetails({
                    title: '',
                    description: '',
                    postCategory: '',
                    img: ''
                   
                });

                navigate('/');
            }
        }catch(error){
            console.log('Error while adding a new post.')
        }
    }

    const handleForm = (value) => {
        return setPostDetails(post => {
            return {...post, ...value};
        })
    }



    return (
        <div>
            <h3>Update an Employee</h3>
            {(
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" id="title" type="text"  onChange={(e) => handleForm({title: e.target.value}) } />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input className="form-control" id="description" type="text" onChange={(e) => handleForm({description: e.target.value}) }  />
                    </div>
                    <div className="form-group">
                        <label>Post Category</label>
                        <input className="form-control" id="postCategory" type="text"  onChange={(e) => handleForm({postCategory: e.target.value}) } />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input className="form-control" id="img" type="text"  onChange={(e) => handleForm({img: e.target.value}) }  />
                    </div>
                

                    <div className="form-group">
                        <input className="btn btn-primary" value="Update" type="submit"  />
                    </div>
                </form>
            )}
        </div>
    )
}

export default UpdateEmployee;