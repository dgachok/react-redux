import React from 'react';
import { Component } from 'react';

import Splash from './content/Splash';
import Home from './content/Home';
import About from './content/About';

import {Content, ContentLink} from './Content';

export default class App extends Component {

    render() {
        // extract some fields from the props (to avoid use this.prop.bla after)
        const { scene } = this.props;

        console.log(this.props, "this.props");

        return (
            <div className="container">

                <ul className="nav nav-tabs">
                    {/* this should be inside another component because is repeating, but.. */}
                    <li role="presentation" className={this.props.scene === 'home' ? 'active' : ''}>
                        <ContentLink param="home" onClick={this.props.navigate}>Home</ContentLink>
                    </li>

                    <li role="presentation" className={this.props.scene === 'about' ? 'active' : ''}>
                       <ContentLink param="about" onClick={this.props.navigate}>About</ContentLink>
                    </li>

                    <li role="presentation" className={this.props.scene === 'splash' ? 'active' : ''}>
                        <ContentLink param="splash" onClick={this.props.navigate}>Splash</ContentLink>
                    </li>

                </ul>

                <Content scene="home" current={scene}>
                    <Home />
                </Content>

                <Content scene="about" current={scene}>
                    <About />
                </Content>

                <Content scene="splash" current={scene}>
                    <Splash />
                </Content>

                <hr />
                <p className="help-block">
                    <strong>Use CTRL + H to show/hide the redux dev tool.</strong> <br />
                    <strong>Note</strong> that the state and the application data are independent,
                    so despite you can time travel on the state you can not do it on changes pushed to the API
                    just like when you are working with a real remote database. <br />
                    <a target="_blank" href="https://github.com/cristianszwarc/react_crud_localStorage">GitHub</a>
                </p>

            </div>
        );

    }
}
