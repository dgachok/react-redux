import React from 'react';
import { Component } from 'react';

// show/hide a child component based on a given scene
export class Content extends Component {

    render() {
        console.log("this.props Content", this.props);
        if (this.props.scene === this.props.current ) {
            return (
                this.props.children
            );
        } else {
            return null;
        }
    }
}

export class ContentLink extends Component {
    render() {
        let styles = {
            cursor: 'pointer'
        }
        console.log("this.props.children", this.props.children);
        return (
            <a style={styles} className={this.props.className} onClick={this.props.onClick.bind(null, this.props.param)}>
                {this.props.children}
            </a>
        );
    }

}
