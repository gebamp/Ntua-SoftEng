import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./pages/login";
import AddPage from "./pages/insertuser";
import EditPage from "./pages/updateuser";
import NotFound from "./pages/notfound";
import FileUploadPage from "./pages/admin-upload";
import clientDashboard from "./pages/clientdashboard";
import adminDashboard from './pages/admindashboard';
import adminuserData from './pages/admin-userstatus';
import clientData from './pages/client-data';
import adminData from './pages/admin-data';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/admin/dashboard' component={adminDashboard} />
                        <Route path='/client/dashboard' component={clientDashboard} />
                        <Route path='/admin/data' component={adminData} />
                        <Route path='/client/data' component={clientData} />
                        <Route path='/admin/userstatus' component={adminuserData} />
                        <Route path='/admin/insertuser' component={AddPage} />
                        <Route path='/admin/updateuser/' component={EditPage} />
                        <Route path='/admin/importcsv/' component={FileUploadPage} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
