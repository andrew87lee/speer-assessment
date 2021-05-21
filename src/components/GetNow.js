import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default class GetNow extends React.Component {

    state = {

    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="row get-now" >
                <div className="col-2 overlay">
                    <h1>GET EXP|CON NOW</h1>
                    <h2>Purchase and download the app.</h2>
                </div>
                <div className="col-2 btncontainer">
                    <a href='/pricing' class='button' data-text='TRY IT NOW'>TRY IT NOW</a>
                </div>
            </div>
        );
    }
}
