import {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = async () => {
        try{
            const response = await axios.get(`http://localhost:5000/employees`);
            setPosts(response.data);
        }catch(err){
            console.log('Error: ', err);
        }
    }

    const handleDelete = async (postID) => {
        try{
            const response = await axios.delete(`http://localhost:5000/posts/${postID}`);

            if(response){
                getAllPosts();
            }
        }catch(error){
            console.log('Error while deleting post')
        }
    };




    return (
        <div className="postList">
            <h3>Post List</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Post Ccategory</th>
                        <th>Image</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {posts.length > 0 && posts.map((post, index) => (
                        <tr key={index}>
                            <td>{post.title}</td>
                            <td>{post.description}</td>
                            <td>{post.postCategory}</td>
                            <td>{post.img}</td>
                            
                            <td>
                                <NavLink  className="btn btn-link"  to={`/posts/${post._id}/update`}>Edit</NavLink>
                                <button className="btn btn-link" onClick={() => handleDelete(post._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PostList;