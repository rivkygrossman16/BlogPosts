import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import ViewBlog from './Pages/ViewBlog';
import Layout from './Layout';
import Page from './Pages/Page';

function App() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/ViewBlog/:id' component={ViewBlog} />
                <Route exact path='/Page/:nextPage' component={Page} />
            </Layout>
        );
}
export default App;