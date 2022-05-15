import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { produce } from 'immer';
import { useHistory } from 'react-router-dom';

const Admin = () => {
    const [blog, setBlog] = useState({
        title: '',
        body: '',
        name:'Rivky Grossman',
    });

    //useEffect(() => {
    //    const getBlogs = async () => {
    //        const { data } = await axios.get('/api/Blog/getall');
    //        setBlogs(data);
    //    }

    //    getBlogs();
    //    console.log(blogs);
    //    console.log('hello');
    //}, []);

    /*const searchTextLower = searchText.toLowerCase();*/

    const history = useHistory();

    const onTextChange = (e) => {
        const newBlog = produce(blog, draft => {
            draft[e.target.name] = e.target.value;
        });

        setBlog(newBlog);
        console.log(blog);

    }

    const onSubmitClick = async () => {
        //const { title, body, date, name } = blog;
        //console.log(blog);
        console.log(blog);
        await axios.post('/api/blog/addblog', blog);
        history.push('/');
    }

    const { title, body, date, name } = blog;

    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div className="row">
                    <div className="col-md-8 offset-md-2 jumbotron">
                        <h3>Add New Post</h3>
                        <input type="text" onChange={onTextChange} className="form-control" value={title} placeholder="Title" name="title" />
                        <br />
                        <textarea name="body" onChange={onTextChange} placeholder="What's on your mind?" value={body} className = "form-control" rows="20"></textarea>
                        <br />
                        <button className="btn btn-primary" onClick={onSubmitClick} > Submit Post!</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Admin;