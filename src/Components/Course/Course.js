import {courseVideos} from '../../courseVideos';

const Course = props => {
    return (
        <main>
            {props.match.params.id}
        </main>
    )
}

export default Course;