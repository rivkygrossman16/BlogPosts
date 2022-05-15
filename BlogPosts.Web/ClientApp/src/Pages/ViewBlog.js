import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { produce } from 'immer';
import { useParams, useHistory } from 'react-router-dom';
import { data } from 'jquery';
import CommentDisplay from '../Components/CommentDisplay';



const ViewBlog = () => {
    const [blog, setBlog] = useState({
        title: '',
        name: '',
        date: '',
        id: '',
        comments: [],
    });
    const [CommentName, setName] = useState('');
    const [commentBody, setBody] = useState('');
    const [blogPostId, setBlogId] = useState('');
    const [commentDate, setDate] = useState('');
    /*    const [comments, setComments] = useState([]);*/
    const history = useHistory();
    const { id } = useParams();


    const { title, body, name, date, comments } = blog;

    useEffect(() => {
        const getBlog = async () => {
            const { data } = await axios.get(`/api/blog/getblogbyid`, { params: { id: id } });
            setBlog(data);
        }

        getBlog();
    }, [id, blog]);

    const onSubmitClick = async () => {
        console.log(id);
        //const{
        //    commentBody: commentBody,
        //    name: CommentName,
        //    date: '4/08/02',
        //    blog: id,

        //};
        await axios.post('/api/blog/addcomment', { commentBody, name: CommentName, blogPostId: id });
        history.push('/');
    }


    const generateComments = () => {

        return comments.map((b, i) => {
            return < CommentDisplay
                comment={b}
               
                key={i}
            />
        });
    }

    const test = () => {
        console.log(comments);
        console.log(blog);
    }

    return (

        <div className="col-lg-8">
            <h1 className="mt-4">
                {title}
            </h1>
            <p className="lead">{name} </p>
            <p>Posted on {date}</p>
            <hr>
            </hr>
            <p>{body}</p>
            {/*<hr>*/}<div className="card my-4">
                <h5 className="card-header">Leave a Comment:</h5>
                <div className="card-body">
                    <div className="form-group">
                        <div>
                            <input type="text" onChange={e => setName(e.target.value)} placeholder="Please enter your name" class="form-control" name="CommentName" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Type your comment here but remember to be be nice..." onChange={e => setBody(e.target.value)} name="commentBody" class="form-control" rows="3"></textarea>
                        </div>
                        <button class="btn btn-primary" onClick={onSubmitClick}>Submit</button>
                                </div>
                </div>
            </div>
            {generateComments()}
        </div>


                    );
}
export default ViewBlog;