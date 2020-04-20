import React, {Component} from "react";
import './App.css'

class Toc extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
        if (this.props.data === nextProps.data){
            return false;
        }
        return true;
    }

    render() {
        console.log('Toc');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {

            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].id}
                       data-id={data[i].id}
                       onClick={function (e) {
                           e.preventDefault();
                           this.props.onChangePage(e.target.dataset.id); // 이벤트로
                           // this.props.onChangePage(data[i].id);
                       }.bind(this)}> {data[i].title}</a></li>);
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {/*<li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>*/}
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default Toc;