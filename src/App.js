import React, {Component} from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';
import Subject from './Subjeuct';
import Toc from './Toc';


class Contents extends Component {
    render() {
        console.log('contents log');
        return (
            <article>
                <h2>{this.props.title}</h2>
                HTML is HyperText Markip Language.
                <p><b>{this.props.desc}</b></p>
            </article>
        );
    }
}

class App extends Component {
    //외부 펑션
    funcTest = (e) => {

        // console.log('event in', this);
        // e.preventDefault();
        // return;
        console.log(e);
        e.preventDefault();
        // alert('hi');
        // this.state.mode = 'welcome';
        if (this.state.mode === 'welcome'){
            this.setState({
                mode:'read'
            });
        }
        else if (this.state.mode === 'read'){
            this.setState({
                mode:'welcome'
            });
        }
    }
    //
    //초기화
    constructor(props) {
        super(props);
        this.state = {
            mode: 'read',
            selected_content_id:2,
            subject: {title: 'hello!!', sub: "World Wide Web!"},
            welcome:{title:'Welcome', desc:'Hello React'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
            ]
        }
    }
    render() {
        var _title, _desc = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if(this.state.mode === 'read'){
            var i = 0;
            while (i < this.state.contents.length){
                var data = this.state.contents[i]
                if (data.id === this.state.selected_content_id){
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i = i + 1
            }
        }
        const style = {
            backgroundColor: 'black',
            padding: '16px',
            color: 'white',
            fontSize: '12px'
        };
        return (
            <div>
                <Subject title ={this.state.subject.title} sub="world wide web!"
                onChangePage={function () {
                    // alert('hihi');
                    if (this.state.mode === 'welcome'){
                        this.setState({mode:'read'});
                    }
                    else if (this.state.mode === 'read'){
                        this.setState({mode:'welcome'});
                    }
                }.bind(this)}
                onChangePage2={this.funcTest}

                />
                {/*<header>
                    <h1><a href="/" onClick={function(e){
                        // console.log('event in', this);
                        // e.preventDefault();
                        // return;
                        console.log(e);
                        e.preventDefault();
                        // alert('hi');
                        // this.state.mode = 'welcome';
                        if (this.state.mode === 'welcome'){
                            this.setState({
                                mode:'read'
                            });
                        }
                        else if (this.state.mode === 'read'){
                            this.setState({
                                mode:'welcome'
                            });
                        }
                    }.bind(this)}>{this.state.subject.title}</a></h1>
                    {this.state.subject.sub}
                    <h1><a href="/" onClick={this.funcTest}>sfjlksafj</a></h1>
                </header>*/}
                <Toc onChangePage={function (id) {
                    // alert('hi')
                    this.setState( {mode:'read',
                        selected_content_id:Number(id)
                    });
                }.bind(this)} data={this.state.contents}/>
                <Contents title={_title} desc={_desc}/>
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