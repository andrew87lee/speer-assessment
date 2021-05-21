import React from "react";
import speakerimg from "../img.png";
import 'bootstrap/dist/css/bootstrap.css';

export default class Speakers extends React.Component {
    componentDidMount() {
        const playButton = document.querySelector('.play');
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();
        const audioElement = document.querySelector('audio');


        // play pause audio
        playButton.addEventListener('click', function () {

            // check if context is in suspended state (autoplay policy)
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            if (this.dataset.playing === 'false') {
                audioElement.play();
                this.dataset.playing = 'true';
                // if track is playing pause it
            } else if (this.dataset.playing === 'true') {
                audioElement.pause();
                this.dataset.playing = 'false';
            }

            let state = this.getAttribute('aria-checked') === "true" ? true : false;
            this.setAttribute('aria-checked', state ? "false" : "true");

        }, false);

        /*document.querySelector('.button').onmousemove = function (e) {
    
            var x = e.pageX - e.target.offsetLeft;
            var y = e.pageY - e.target.offsetTop;
        
            e.target.style.setProperty('--x', x + 'px');
            e.target.style.setProperty('--y', y + 'px');
        };
    */
    }

    render() {
        return (
            <div className="row speakers" >
                <div className="col-8 overlay">
                    <h1>SUPERIOR SOUND</h1>
                    <h2>Experience live versions of your <br /> favourite songs.</h2>
                    <a href='/pricing' class='button' data-text='SEE DEMO'>SEE DEMO</a>
                </div>

                <div className="col-4 sound">
                    <img src={speakerimg} alt="speakers" />
                    <audio src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3" crossorigin="anonymous" ></audio>
                    <button data-playing="false" class="play" role="switch" aria-checked="false">
                        <span>CLICK</span>
                    </button>
                </div>
            </div>
        );
    }
}
