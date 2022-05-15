import { Route, Link } from 'react-router-dom';
/*import format from 'date-fns/format';*/
import React, { useState, useEffect } from 'react';


function BlogBox({ blog }) {
    const { body, title, name, date, id, comments } = blog;
    return (
        <div className="card mb-4">
            <div className="card-body">
                <Link to={`/viewblog/${id}`} >
                    <h2 className="card-title">{title}</h2>
                </Link>
                <p className="card-text">{body}</p>
                <div className="mb-3">
                    <small>{comments.length} comment(s)</small></div>
                <Link to={`/viewblog/${id}`} >
                    <button className="btn btn-primary">Read More &rarr;</button>
                </Link>
            </div>
            <div className="card-footer text-muted">
                {/*Posted on {format(new Date({ date }), 'EEEE LLLL do, R')}*/}
                Posted on {date}
                <br/>
               {name}
            </div>
        </div>
    );
}

export default BlogBox;