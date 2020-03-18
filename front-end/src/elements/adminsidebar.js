import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <div id="wrapper">
                <ul className="sidebar navbar-nav">                    
                    <li className="nav-item">
                        <Link to={'/admin/data'} className="nav-link"><i className="fas fa-fw fa-chart-area"></i>
                            <span>&nbsp;Data</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/admin/importcsv'} className="nav-link"><i className="fas fa-fw fa-file-archive"></i>
                            <span>&nbsp;Import csv</span></Link>
                    </li>
					 <li className="nav-item">
                        <Link to={'/admin/userstatus'} className="nav-link"><i className="fas fa-fw fa-file-archive"></i>
                            <span>&nbsp;User status</span></Link>
                    </li>
					<li className="nav-item">
                        <Link to={'/admin/updateuser'} className="nav-link"><i className="fas fa-fw fa-file-archive"></i>
                            <span>&nbsp;Update user</span></Link>
                    </li>
					<li className="nav-item">
                        <Link to={'/admin/insertuser'} className="nav-link"><i className="fas fa-fw fa-file-archive"></i>
                            <span>&nbsp;Insert user</span></Link>
                    </li>
                    
                </ul>
            </div>
        );
    }
}
