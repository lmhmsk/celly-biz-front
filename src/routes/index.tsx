import { Switch, Redirect } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../views/login';
import SignUp from '../views/signup';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/signup" component={SignUp} />
                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
