import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import img from "../fivestarsimg.png";

export default class Reviews extends React.Component {
    render() {
        return (

            <div className="row reviews" >
                <div className="title col-8 offset-1"> REVIEWS </div>
                <div className="col-8 offset-1 text">
                    <img src={img} alt="fivestars" />
                    <h1>ARTIST</h1>
                    <h2>"Love it, it's the Best. I can't live without it!"</h2>
                </div>
                <div className="col-8 text">
                    <img src={img} alt="fivestars" />
                    <h1>PRODUCER</h1>
                    <h2>"Love it, it's the Best. I can't live without it!"</h2>
                </div>
                <div className="col-8 text">
                    <img src={img} alt="fivestars" />
                    <h1>MUSIC FAN</h1>
                    <h2>"Love it, it's the Best. I can't live without it!"</h2>
                </div>
            </div>
        );
    }
}
