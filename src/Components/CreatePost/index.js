import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './createPost.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CreatePost = () => {
    const navigate = useNavigate();

    const [postDetails, setPostDetails] = useState({
        title: '',
        description: '',
        postCategory: '',
        img: '',
        
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPost = {...postDetails};
        try{
            const response = await axios.post(`http://localhost:5000`, newPost);
            if(response){
                setPostDetails({
                    title: '',
        description: '',
        postCategory: '',
        img: '',
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
            <h3>Create a new Post</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" id="name" type="text" value={postDetails.title} onChange={(e) => handleForm({title: e.target.value}) } />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <CKEditor
                    editor={ ClassicEditor }
                    data={postDetails.description}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={(e) => handleForm({description: e.target.value})}
                
                />
                    </div>
                {/* <div className="form-group">
                    <label>Description</label>
                    <input className="form-control" id="description" type="text" value={postDetails.description} onChange={(e) => handleForm({description: e.target.value}) }  />
                </div> */}
                <div className="form-group">
                    <label>Post Category</label>
                    <input className="form-control" id="postCategory" type="text" value={postDetails.postCategory}  onChange={(e) => handleForm({postCategory: e.target.value}) } />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input className="form-control" id="img" type="text" value={postDetails.img}  onChange={(e) => handleForm({img: e.target.value}) }  />
                </div>
               
                <div className="form-group">
                    <input className="btn btn-primary" value="Create a Post" type="submit"  />
                </div>
            </form>
        </div>
    )
}

export default CreatePost;