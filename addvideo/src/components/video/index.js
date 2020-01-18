import React from 'react';

const Video = ({id, youtube}) => {
    return (
        <div>
            {console.log(id, youtube)}
            {
            youtube?
                <iframe 
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${id}`} 
                    frameBorder="0" 
                    allowFullScreen>
                </iframe> :
                <iframe 
                    src={`https://player.vimeo.com/video/${id}`} 
                    width="640" 
                    height="360" 
                    frameBorder="0"
                    allow="autoplay; 
                    fullscreen" 
                    allowFullScreen>
                </iframe>
            }
{/* 
            <div>
                <video width="400" height="300" controls="controls" >
                    <source src={`${src}.ogg`} type='video/ogg; codecs="theora, vorbis"'/>
                    <source src={`${src}.mp4`} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                    <source src={`${src}.webm`} type='video/webm; codecs="vp8, vorbis"'/>
                    <source src={`https://www.youtube.com/watch?v=YM9VxRXEsqE/video.mp4?dl=0&raw=1`} type="video/mp4;"></source>
                </video>
            </div> */}

            
        </div>
    )
}

export default Video;