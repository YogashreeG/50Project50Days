import React, { Component } from "react";

export class Wall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }
    componentDidMount() {
        this.timeId = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.timeId)
    }
    render() {
        return (
          <div className="clock">
                <div className="hour_hand" style={{transform: "rotateZ()"}}>
                    
            </div>
          </div>
        );
    }
}


