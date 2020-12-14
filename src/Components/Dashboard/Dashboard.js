import {useState} from 'react';
import {courses} from '../../courses';
import mainImage from '../../assets/video-course-demo-4.jpg';
import info from '../../assets/info.svg';
import './Dashboard.css';

const Dashboard = props => {
    let [userCourses, setUserCourses] = useState([]),
        [descriptionModal, setDescriptionModal] = useState('');

    return (
        <main id='dashboard'>
            <img src={mainImage} alt='Learn photography' id='main-image'/>
            <h1 id='main-prompt-one'>Want to learn photography?</h1>
            <h1 id='main-prompt-two'>We've got you covered.</h1>
            <h2>Welcome back, Matt</h2>
            {userCourses.length
            ? (
                <section id='your-courses'>
                    <h3>Your Courses</h3>
                </section>
            )
            : null}
            <h3 id='top-courses'>Top Courses</h3>
            <section id='course-flex'>
                {courses.map(course => (
                    <section key={course.id} id='course-selection'>
                        <img src={course.image} alt={course.title} id='course-image'/>
                        <img src={info} alt={`More information about ${course.title}`} id='more-info' onMouseEnter={() => setDescriptionModal(course.title)} onMouseLeave={() => setDescriptionModal('')}/>
                        {descriptionModal === course.title
                        ? (
                            <section id='course-description'>{course.description}</section>
                        )
                        : null}
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