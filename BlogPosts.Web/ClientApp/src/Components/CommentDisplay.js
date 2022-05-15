import { Route, Link } from 'react-router-dom';
/*import format from 'date-fns/format';*/
/*import { compareAsc, format } from 'date-fns'*/
import React, { useState, useEffect } from 'react';


const test = () => {
    console.log(Comment);
}

function CommentDisplay({ comment }) {
    const { commentBody, name, date, blogPostId, id } = comment;
    return (
        <div className="media mb-4">
              <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
            <div className="media-body">
                <h5 className="mt-0">
                    {name}
                </h5>
                {/* <small>Posted on {format(new Date(date), 'EEEE LLLL do, R')}</small>*/}
                <small> Posted on {date}</small>
                <br />
                <h5 className="mt-0">
                    {commentBody}
                </h5>

            </div>
        </div>
    );
}

export default CommentDisplay;