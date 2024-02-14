// import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import React,  { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    handleSearch = () => {
        this.props.onSearchChange(this.state.searchQuery);
    };


    render() {
        return (
            <>
                <div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <h3 className="navbar-brand"> <Link className="nav-link" to="/">News Api</Link></h3>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/general">General</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/business">Business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/health">Health</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/science">Science</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sports">Sports</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/technology">Technology</Link>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={this.state.searchQuery}
                                    onChange={this.handleInputChange} />
                                    <button className="btn btn-outline-success" type="button"  onClick={this.handleSearch}>Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}
