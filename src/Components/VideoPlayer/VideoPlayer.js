import './VideoPlayer.css';

const VideoPlayer = props => {
    console.log(props.video)

    return (
        <video key={props.video.url} id='video-player' controls>
            <source src={props.video.url} type='video/mp4'/>
        </video>
    )
}

export default VideoPlayer;