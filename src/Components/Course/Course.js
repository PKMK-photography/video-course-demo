import {useState} from 'react';
import VideoMenu from '../VideoMenu/VideoMenu';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import {courseVideos} from '../../courseVideos';
import './Course.css';

const Course = props => {
    let [activeVideo, setActiveVideo] = useState(0);

    console.log(activeVideo)

    return (
        <main id='course'>
            <VideoMenu videos={courseVideos[+props.match.params.id]} changeFn={setActiveVideo}/>
            <VideoPlayer video={courseVideos[+props.match.params.id - 1].videos[activeVideo]}/>
        </main>
    )
}

export default Course;