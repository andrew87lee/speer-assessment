import React from "react";
import concert from "../concert.jpg";

export default class Hero extends React.Component {
    render() {
        return (
            <div className="row hero">
                <div style = {{backgroundImage: `url(${concert})`}} className="overlay">
                    <h1>INTERACTIVE CONCERT EXPIERIENCE</h1>
                    <h2>Experience your favourite artists like never <br />
                        before and from the comfort of your own home.</h2>
                    <a href='/pricing' class='button' data-text='TRY IT NOW'>TRY IT NOW</a>
                </div>
            </div>
        );
    }
}
