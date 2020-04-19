import React, {Component} from "react";
import './App.css'

class CreateContents extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post" onSubmit={function (e) {
                    e.preventDefault();
                    // debugger;
                    this.props.onSubmit(e.target.title.value, e.target.desc.value)
                    alert('submit!!!!');
                }.bind(this)}>
                    <p><input type="text" name="title" placeholder="title"/></p>
                    <textarea name="desc" placeholder="description"></textarea>
                    <p><input type="Submit"/></p>
                </form>
            </article>
        );
    }
}

export default CreateContents;