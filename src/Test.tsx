import React from 'react';

interface IProps {}

interface IState {
    person: {
        name?: string;
        age?: number;
    };
}

export default class Test extends React.Component<IProps, IState> {
    state = {
        person: {
            name: 'jinxin',
            age: 25
        }
    };
    handleClick = () => {
        this.setState({
            person: {
                name: 'ouyang'
            }
        });
    };
    render() {
        return (
            <>
                <h3>{JSON.stringify(this.state)}</h3>
                <button onClick={this.handleClick}>setState</button>
            </>
        );
    }
}
