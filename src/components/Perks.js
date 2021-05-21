import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default class Perks extends React.Component {
    render() {
        return (
            <div className="row perks" >
                <div className="title"> PERKS </div>
                <div className="col-8 text">
                    <h1 style={{ color: 'rgba(211,72,72,255)' }}> Subscription Payment Model</h1>
                    <h2>No commitment, cancel anytime. Never worry about forgetting a payment again!</h2>
                </div>
                <div className="col-8 text">
                    <h1 style={{ color: 'rgbargba(31,225,233,255)' }}>No Fee Cancelation Policy</h1>
                    <h2>No commitment, cancel anytime. Never worry about forgetting a payment again!</h2>
                </div>
                <div className="col-8 text">
                    <h1 style={{ color: 'rgba(255,179,63,255)' }}>Subscription Payment Model</h1>
                    <h2>No commitment, cancel anytime. Never worry about forgetting a payment again!</h2>
                </div>
            </div>
        );
    }
}
