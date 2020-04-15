import React, {Component} from "react";
import './App.css'

class Subjeuct extends Component {

    render() {
        return (
            <header>
                <h1><a href="/" onClick={function (e) {
                    // e.preventDefault();
                    this.props.onChangePage2(e);
                }.bind(this)}>  {this.props.title}</a></h1>
                {this.props.sub}
                <h1><a href="/" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangePage(e);
                }.bind(this)}>  {this.props.title}</a></h1>
            </header>

        );
    }
}
export default Subjeuct ;