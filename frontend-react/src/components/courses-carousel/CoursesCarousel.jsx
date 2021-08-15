import CourseCard from "../../components/course-card/CourseCard.jsx"
import "./CoursesCarousel.css"

let carousel = document.getElementById("carousel-courses")

const moveToLeft = () => {
    carousel.scrollBy(-290, 0)
}

const moveToRight = () => {
    carousel.scrollBy(290, 0)
}

const CoursesCarousel = () => {
    return (
        <div class="container my-5">

            <div className="controls">
                <h3>Cursos populares</h3>

                <div className="btns">

                    <button className="btn btn-primary" onClick={moveToLeft}>
                        <img src="assets/icons/chevron-left.svg" alt="" />
                    </button>

                    <button className="btn btn-primary" onClick={moveToRight}>
                        <img src="assets/icons/chevron-right.svg" alt="" />
                    </button>
                </div>
            </div>

            <div class="carousel-courses" id="carousel-courses">

                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />


            </div>
        </div>
    )
}


export default CoursesCarousel
