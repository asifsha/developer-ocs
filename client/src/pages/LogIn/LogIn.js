import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { FormBtn } from '../../components/Form';

import './LogIn.css';
import API from '../../utils/API';

class LogIn extends Component {
  render() {
    return (
      // Creates LogIn
      <div>
        <div className="welcome-text">
          <h1>Welcome to Developer OCS</h1>
          <h3 className="summary">
            An interactive, open source web application for developers to
            post, find and collaborate on portfolio-grade projects. This is
            a resource for developers of all skill levels: students,
            graduates (bootcamp or university), or anywhere in between. It's
            also an open bulletin for companies to have pilot projects built
            or try out new technologies while finding skilled resources
            dedicated to their craft who are looking to work on real-world
            applications.
          </h3>
        </div>
        <br /><br />
        <div className="login-selections">
          <h3 className="login-choice">Choose a Login Method:</h3>
          {/* Google+ LogIn Button */}
          <div className="google__img__wrap">
            <a href="/auth/google" rel="external" className="btn btn-danger google">
              <span className="fa fa-google-plus fa-3x" />
            </a>
            <p className="google__img__description">Google+</p>
          </div>
          &nbsp; &nbsp;
          {/* Github LogIn Button */}
          <div className="github__img__wrap">
            <a href="/auth/github" rel="external" className="btn btn-default github">
              <span className="fa fa-github fa-3x" />
            </a>
            <p className="github__img__description">Github</p>
          </div>
        </div>
        <br/>
        <div className="github__activeuser__description">
          <Counter labeltext="Active Users :" total={500}> </Counter>
        </div>
      </div>
      );
  }
}

export default LogIn;
