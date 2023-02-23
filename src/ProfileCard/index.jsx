/* eslint-disable */
import React, { Component } from 'react';
import profilePhoto from "../profilePhoto.jpg";
import './styles.scss';
class ProfileCard extends Component {
    render() {
        return (
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={profilePhoto} alt="Kaizhi Du"/>
                    </div>
                    <ul className="social-icons">
                        <li>
                            <a href="src/ProfileCard/index">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="src/ProfileCard/index">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="src/ProfileCard/index">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="src/ProfileCard/index">
                                <i className="fab fa-dribbble"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="details">
                        <h2>Kaizhi Du
                            <br/>
                            <span className="job-title">Software Engineer</span>
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCard;
