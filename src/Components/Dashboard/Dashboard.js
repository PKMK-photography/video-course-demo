import {Link} from 'react-router-dom';
import {courses} from '../../courses';

const Dashboard = props => {
    return (
        <section>
            {courses.map(course => (
                <Link key={course.id} to={`/course/${course.id}`}>{course.title}</Link>
            ))}
        </section>

    )
}

export default Dashboard;