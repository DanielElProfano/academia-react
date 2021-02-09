import './Course.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { allCourses,
    deleteProfessorService } from '../../api/CourseService';
import  CourseCard  from '../../components/CourseCard';
// import CreateCourse from '../../containers/CreateCourse';

const Course = () => {
    const [listOfCourses, setListofCourses] = useState();
    // const [isModalOpen , setModalOpen] = useState(false)

    useEffect(() => {
        
        courseList();
    },[]);

    const  courseList = async() => {
        const data = await allCourses();
        setListofCourses(data);
     
    }
    const deleteCourse = async id => {
        await deleteProfessorService(id)
        courseList()
    }

    return (
        <>
        <Table Striped className="b-table__container--course">
            <thead className="b-table__header">
                <tr>asrfgsrg
                    <th className="b-table__header">Name</th>
                </tr>
            </thead>
            <tbody>
                {listOfCourses && listOfCourses.map(course => {
                    return (
                        <tr key={course._id}><CourseCard 
                            course={course}
                            deleteCourse={deleteCourse}
                            />
                        </tr>
                    )})
                } 
            </tbody>   
        </Table>
        </>
    )
}

export default Course;