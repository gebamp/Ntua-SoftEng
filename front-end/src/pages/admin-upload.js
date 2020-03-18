import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Header from "../elements/header";
import Sidebar from "../elements/adminsidebar";
import Moment from 'react-moment';

export default class FileUploadPage extends Component {

    constructor(props) {
        super(props);
        this.user_status = sessionStorage.getItem('user_status');
        this.token = sessionStorage.getItem('token');
    }

    render() {        
        if (this.user_status === null) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <Header></Header>
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">




     
                    </div>
                </div>
             </div>

        );
    }
}


