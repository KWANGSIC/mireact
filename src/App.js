import React, {Component} from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';
import Subject from './Subjeuct';
import Toc from './Toc';
import Control from './Control';
import CreateContents from "./CreateContents";
import UpdateContents from "./UpdateContents";
import PhoneForm from "./PhoneForm";
import PhoneInfoList from "./PhoneInfoList";


class ReadContents extends Component {
    render() {
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
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value,
        });
    }
    handleCreate = (data) => {
        var _information = this.state.information.concat({id: this.id++, ...data})

        // console.log(_information);
        this.setState({
            information: _information
        })
    }
    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        })
    }
    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
            information: information.map(info => id === info.id
                    ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
                    : info // 기존의 값을 그대로 유지
            )
        })
    }
    //외부 펑션
    funcTest = (e) => {

        // console.log('event in', this);
        // e.preventDefault();
        // return;
        // console.log(e);
        e.preventDefault();
        // alert('hi');
        // this.state.mode = 'welcome';
        if (this.state.mode === 'welcome') {
            this.setState({
                mode: 'read'
            });
        } else if (this.state.mode === 'read') {
            this.setState({
                mode: 'welcome'
            });
        }
    }
    //
    //초기화
    constructor(props) {
        super(props);
        this.max_content_id = 3;
        this.id = 2;
        this.state = {
            mode: 'create',
            selected_content_id: 2,
            subject: {title: 'hello!!', sub: "World Wide Web!"},
            welcome: {title: 'Welcome', desc: 'Hello React'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
            ],
            information: [
                {
                    id: 0,
                    name: '김민준',
                    phone: '010-0000-0000'
                },
                {
                    id: 1,
                    name: '홍길동',
                    phone: '010-0000-0001'
                }
            ],
            keyword: ''
        }
    }
    getReadContents = () =>{
        var i = 0;
        while (i < this.state.contents.length) {
            var data = this.state.contents[i]
            // console.log(this.state.selected_content_id)
            if (data.id === Number(this.state.selected_content_id)) {
                return data;
                break;
            }
            i = i + 1
        }
    }
    getContent = () => {
        var _title, _desc, _article = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContents title={_title} desc={_desc}/>
        } else if (this.state.mode === 'read') {
           var _content = this.getReadContents();
            _article = <ReadContents title={_content.title} desc={_content.desc}/>
        } else if (this.state.mode === 'create') {
            _article = <CreateContents onSubmit={function (_title, _desc) {
                //add content to this.state.contents
                console.log(_title, _desc);
                this.max_content_id = this.max_content_id + 1;
                ////////////////////////////////////////////////////////////////////////////////////////////////
                //new array push vs cnacat
                // 참고 : 객체의 경우
                // var a = {name:'egoing'};
                // var b = Object.assign({}, a);
                // immutable js 확인해보기!!!!!!!!
                ////////////////////////////////////////////////////////////////////////////////////////////////
                //new array
                // var newArray = Array.from(this.state.contents)
                // newArray.push(
                //     {id:this.max_content_id, title:_title, desc:_desc}
                // )
                // this.setState(
                //     {
                //         contents:newArray
                //     }
                // )
                // concat
                var _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc})
                var _contents = this.state.contents.concat({id: this.max_content_id, title: _title, desc: _desc})
                this.setState(
                    {
                        contents: _contents
                    }
                )
                ////////////////////////////////////////////////////////////////////////////////////////////////
            }.bind(this)}></CreateContents>
        } else if (this.state.mode === 'update') {
            var _content = this.getReadContents();
            _article = <UpdateContents data={_content} onSubmit={function (_title, _desc) {
                //add content to this.state.contents
                console.log(_title, _desc);
                this.max_content_id = this.max_content_id + 1;
                var _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc})
                this.setState(
                    {
                        contents:_contents
                    }
                )
                ////////////////////////////////////////////////////////////////////////////////////////////////
            }.bind(this)}></UpdateContents>
        }
        return _article;
    }

    render() {

        const style = {
            backgroundColor: 'black',
            padding: '16px',
            color: 'white',
            fontSize: '12px'
        };

        const { information, keyword } = this.state;
        const filteredList = information.filter(
            info => info.name.indexOf(keyword) !== -1
        );
        return (
            <div>
                <Subject title={this.state.subject.title} sub="world wide web!"
                         onChangePage={function () {
                             // alert('hihi');
                             if (this.state.mode === 'welcome') {
                                 this.setState({mode: 'read'});
                             } else if (this.state.mode === 'read') {
                                 this.setState({mode: 'welcome'});
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
                    this.setState({
                        mode: 'read',
                        selected_content_id: Number(id)
                    });
                }.bind(this)} data={this.state.contents}/>
                <Control onChangeMode={function (_mode) {
                    // console.log(_mode);
                    this.setState({mode: _mode})
                }.bind(this)}></Control>


                {this.getContent()}
                <div style={style}>
                    hi there
                </div>
                <div className="reactClass">
                    dskjfjksafjlksa
                </div>
                <MyName name="rrrr"/>

                <Counter/>
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                <p>
                    <input
                        placeholder="검색 할 이름을 입력하세요.."
                        onChange={this.handleChange}
                        value={keyword}
                    />
                </p>
                <PhoneInfoList
                    data={filteredList}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}

export default App;