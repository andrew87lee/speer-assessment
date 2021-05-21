import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default class Yellow extends React.Component {
    render() {
        return (
            <div className="row yellow" >
                <div className="col-8 offset-6 overlay">
                    <h1> FRONT ROW SEATS</h1>
                    <h2>Experience concerts up close <br /> and personal.</h2>

                    <a href='/pricing' class='button' data-text='SEE DEMO'>SEE DEMO</a>
                </div>
            </div>
        );
    }
}
