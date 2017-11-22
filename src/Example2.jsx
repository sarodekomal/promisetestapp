import React from 'react';

const failedUrl = "https://reqres.in/pooja/komal/2";
const successUrl = "https://reqres.in/api/users/2";

export default class Example2 extends React.Component {
    constructor() {
        super();
        this.state = {
            apiResponse: "",
            isSuccess: true
        }
    }

    callApiPromise(apiUrl) {
        return new Promise(
            (resolve, reject) => {
                fetch(apiUrl)
                .then(response => { 
                    if (!response.ok) {
                            reject("API call failed: " + response.status);
                        }
                        //console.log(response.json());
                        resolve(response.json())
                    }
                )
              }
            );
    }

    usePromise() {
        this.callApiPromise(successUrl)
        .then(
            (fulfilled) => {
                //console.log(fulfilled.data.id);
                this.setState({apiResponse: fulfilled.data, isSuccess: true});
            }
        )
        .catch(
            (error) => {
                this.setState({apiResponse: error, isSuccess: false});
            }
        );
    }

    result = this.usePromise();

    render() {
        return (
            <div className="container border border-info">
                <blockquote className="blockquote">
                    <p className="mb-0">This is Example2.</p>
                    <footer className="blockquote-footer">Response for URL <cite title="Source Title">{successUrl}</cite></footer>
                </blockquote>
                
                    {
                        (!this.state.isSuccess) ?
                        <div className="alert alert-danger"> {this.state.apiResponse} </div> : 
                        <div>
                        <img src={this.state.apiResponse.avatar} class="rounded" alt="Avatar"/>
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">{this.state.apiResponse.id}</th>
                            <td>{this.state.apiResponse.first_name}</td>
                            <td>{this.state.apiResponse.last_name}</td>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                    }
            </div>
        );
    }
}