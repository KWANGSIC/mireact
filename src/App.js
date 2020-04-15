import React, {Component} from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';
import App2 from './Subjeuct';

class Toc extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
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

class Contents extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                HTML is HyperText Markip Language.
            </article>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: {title: 'hello!!', sub: "world wide web!"},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
            ]
        }
    }

    render() {
        const style = {
            backgroundColor: 'black',
            padding: '16px',
            color: 'white',
            fontSize: '12px'
        };

        return (
            <div>
                <App2 title={this.state.subject.title} sub="world wide web!"/>
                <Toc data={this.state.contents}/>
                <Contents title="HTML~~"/>
                <div style={style}>
                    hi there
                </div>
                <div className="reactClass">
                    dskjfjksafjlksa
                </div>
                <MyName name="rrrr"/>

                <Counter/>
            </div>
        );
    }
}

export default App;