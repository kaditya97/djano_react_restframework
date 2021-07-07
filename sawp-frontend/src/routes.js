import { useEffect } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import {Provider} from 'react-redux';
import { loadUser } from "./actions/auth";
import PrivateRoute from './components/common/PrivateRoute';
import Home from "./components/pages/home";
import DataInput from "./components/pages/dataInput"; 
import SuitabilityCalculation from "./components/pages/suitabilityCalculation";
import Visualization from "./components/pages/visualization";
import Signup from "./components/Account/Signup";
import Login from "./components/Account/Login";

function Routes() {
    useEffect(() => {store.dispatch(loadUser());}, [])
    return (
        <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <PrivateRoute path='/dataInput' exact component={DataInput} />
                <PrivateRoute path='/suitabilityCalculation' exact component={SuitabilityCalculation} />
                <PrivateRoute path='/visualization' exact component={Visualization} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/login' exact component={Login} />
            </Switch>
        </HashRouter>
        </Provider>
    );
}

export default Routes;