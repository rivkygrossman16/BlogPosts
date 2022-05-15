import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import BlogBox from '../Components/BlogBox';
import ViewBlog from './ViewBlog';
import { useParams, useHistory } from 'react-router-dom';
import { data } from 'jquery';

const Page = () => {
    const [blogs, setBlogs] = useState([]);
    const [allBlogs, setAllBlogs] = useState([]);
    const [theNextpage, setNextPage] = useState();
    const [thePreviousPage, setPrevPage] = useState();

    const history = useHistory();
    const { nextPage } = useParams();

    useEffect(() => {
        const getBlogs = async () => {
            let skip = (nextPage - 1) * 3;
            const { data } = await axios.get('/api/Blog/getpaginated', { params: { skip, take: 3 } });
            setBlogs(data);
        }
        const getAllBlogs = async () => {
            const { data } = await axios.get('/api/Blog/getall');
            setAllBlogs(data);
        }
        let next = nextPage;
        next++;
        setNextPage(next);
        let prev = nextPage;
        prev--;
        setPrevPage(prev);
        getBlogs();
        getAllBlogs();
    }, [nextPage, blogs]);

    const generateBody = () => {
       
        return blogs.map((b, i) => {
            console.log(b);
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

                </div>
            </div>

            <Link to={`/page/${theNextpage}`} >
                <button hidden={allBlogs.length <= (theNextpage - 1) * 3} className="page-link">← Older</button>
            </Link>
            <Link to={`/page/${thePreviousPage}`} >
                <button hidden={thePreviousPage == 0} className="page-link">← Newer</button>
            </Link>
        </div>
    );
}

export default Page;