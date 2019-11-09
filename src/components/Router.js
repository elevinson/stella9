import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/gallery" component={Gallery} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;