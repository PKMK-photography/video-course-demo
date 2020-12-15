import './VideoMenu.css';

const VideoMenu = props => {
    console.log(props.videos)
    return (
        <nav id='video-menu'>
            {props.videos.videos.map((video, i) => (
                <p key={video.title} onClick={() => props.changeFn(i)}>{video.title}</p>
            ))}
        </nav>
    )
}

export default VideoMenu;