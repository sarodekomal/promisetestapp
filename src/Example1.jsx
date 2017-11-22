import React from 'react';

const isMomHappy = true;

const willGetANewPhonePromise = new Promise(
    (resolve, reject) => {
        if(isMomHappy){
            resolve("Success: Promise is fulfilled. I will get a new Phone.");
        }
        else {
            reject("Failure: Promise is rejected. I won't get a new Phone.");
        }
    }
);

const showOffPromise = function(phone) {

        return Promise.resolve("Hey Friends! I got new Phone.");
}

export default class Example1 extends React.Component {

    constructor() {
        super();
        this.state = {
            promiseValue: ""
        }
    }
    
    askMom() {
    willGetANewPhonePromise
    .then(showOffPromise)
        .then(
            (fulfilled) => {
                console.log(fulfilled);
                this.setState({promiseValue: fulfilled});
            }
        )
        .catch(
            (error) => {
                console.log(error);
                this.setState({promiseValue: error});
            }
        );
    }

    result = this.askMom();

    render() {
        return (
            <div className="container border border-info">
                <blockquote className="blockquote">
                    <p className="mb-0">This is Example1.</p>
                    <footer className="blockquote-footer"> Result of Promise </footer>
                </blockquote>
                
                <div> Result:  {this.state.promiseValue}</div>
            </div>
        );
    }
}