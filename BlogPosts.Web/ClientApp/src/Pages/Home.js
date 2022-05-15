import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import BlogBox from '../Components/BlogBox';
import ViewBlog from './ViewBlog';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [nextpage, setNextpage] = useState(2);

    useEffect(() => {
        const getBlogs = async () => {
            const { data } = await axios.get('/api/Blog/getall');
            const amount = data;
            amount.length = 3;
            setBlogs(data);
        }

        getBlogs();
    }, [blogs]);

     const generateBody = () => {
        return blogs.map((b, i) => {
            return < BlogBox
                blog={b}
                key={i}
            />
        });
    }

    return (

            <div className="container">

                <div className="row">
                    <div className="col-md-8">

                        <h1 className="my-4">
                            LIT Blog
                            <small>Nothing to see here...</small>
                    </h1>
                    {generateBody()}
                        {/*<ul class="pagination justify-content-center mb-4">*/}
                        {/*    <li class="page-item">*/}
                        {/*        <a class="page-link" href="/home/index?page=2">&larr; Older</a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}

                    </div>
            </div>
            <Link to={`/page/${nextpage}`} >
                <button className="page-link">← Older</button>
            </Link>

            
        </div>
    );
}

export default Home;