import { Link } from "wouter"
import "./CourseCard.css"

const CourseCard = () => {
    return (
        <div className="course-card card">
            <Link to="/cursos/1">
                <img src="assets/images/courses/course-css.jpg" className="card-img-top img-course" alt="..." />
            </Link>

            <div className="card-body">
                <Link to="/cursos/1">

                    <h5 className="card-title">
                        Introducción a CSS3
                    </h5>
                </Link>

                <div className="item">
                    <img src="assets/icons/time.svg" width="20px" alt="" />
                    2hrs 30mn
                </div>

                <div className="item">
                    <img src="assets/icons/bar-chart.svg" width="20px" alt="" />
                    Básico
                </div>

                <div className="stars">
                    <img src="assets/icons/star-full.svg" width="14px" alt="" />
                    <img src="assets/icons/star-full.svg" width="14px" alt="" />
                    <img src="assets/icons/star-full.svg" width="14px" alt="" />
                    <img src="assets/icons/star-half.svg" width="14px" alt="" />
                    <img src="assets/icons/star-void.svg" width="14px" alt="" />
                </div>

            </div>

            <div className="card-footer">
                <div className="teacher-box">
                    <img src="assets/images/teachers/1.jpg" className="img-teacher" alt="" />
                    <span>Johan Castillo</span>
                </div>

                <div className="">
                    <img src="assets/icons/bookmark-void.svg" width="20px" alt="" />
                </div>

            </div>

        </div>
    )
}


export default CourseCard
