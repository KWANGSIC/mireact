import React, {Component} from "react";
import './App.css'

class UpdateContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc,
        }
    }

    InputFormHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        // console.log(this.props.data);
        return (
            <article>
                <h2>UpdateContents</h2>
                <form action="/create_process" method="post" onSubmit={function (e) {
                    e.preventDefault();
                    // debugger;
                    this.props.onSubmit(
                        this.state.id,
                        this.state.title,
                        this.state.desc)
                }.bind(this)}>
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <p><input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.InputFormHandler}
                    /></p>
                    <textarea name="desc"
                              placeholder="description"
                              value={this.state.desc}
                              onChange={this.InputFormHandler}
                    >
                    </textarea>
                    <p><input type="Submit"/></p>
                </form>
            </article>
        );
    }
}

export default UpdateContents;