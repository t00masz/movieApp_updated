import React from 'react'
import PageNotFound from '../components/PageNotFound'
import Favourites from '../components/Favourites';
import Header from "../components/Header";
import Search from '../components/Search';
import Comments from '../components/Comments';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = (
    <BrowserRouter>
        <div className="container">
            <Header 
                title="Movie app" 
                subtitle="Find the movie and write a comment!" 
            />
            <Switch>
                <Route path="/" component={Search} exact={true} />
                <Route path="/favourites" component={Favourites} />
                <Route path="/comments" component={Comments} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>    
);

export default AppRouter;