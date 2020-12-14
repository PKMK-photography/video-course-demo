import {useState} from 'react';
import {courses} from '../../courses';
import info from '../../assets/info.svg';
import './Dashboard.css';

const Dashboard = props => {
    let [userCourses, setUserCourses] = useState([]);

    return (
        <main id='dashboard'>
            <h2>Welcome back, Matt</h2>
            {userCourses.length
            ? (
                <section id='your-courses'>
                    <h3>Your Courses</h3>
                </section>
            )
            : null}
            <h3>Top Courses</h3>
            <section id='course-flex'>
                {courses.map(course => (
                    <section key={course.id} id='course-selection'>
                        <img src={course.image} alt={course.title} id='course-image'/>
                        <p id='course-title'>{course.title}</p>
                        <p id='course-duration'>Duration: {course.duration}</p>
                        <p id='course-price'>${course.price}</p>
                        <button id='purchase-btn'>Purchase</button>
                    </section>
                ))}
            </section>
        </main>
    )
}

export default Dashboard;