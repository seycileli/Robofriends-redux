import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    //similar to try/ catch, catch this error and print out rendered message
    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError === true) {
            return <h1>Welp. We're embarrassed...</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;
