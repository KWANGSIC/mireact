import React, {Component} from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';

class App extends Component {
    render() {
        const style = {
            backgroundColor: 'black',
            padding: '16px',
            color: 'white',
            fontSize: '12px'
        };

        return (
            <div>
                <div style={style}>
                    hi there
                </div>
                <div className="reactClass">
                    dskjfjksafjlksa
                </div>
                <MyName name = "rrrr" />

                <Counter />
            </div>
        );
    }
}

export default App;