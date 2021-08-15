import CourseCard from "../../components/course-card/CourseCard.jsx"
import "./CoursesCarousel.css"


const moveToLeft = e => {
    //coursesList.scrollBy(-290, 0)
    let element = e.target.parentNode

    while(!element.id.includes("carousel")){
        element = element.parentNode
    }

    
    console.log("Truee!")
    let listEl = element.getElementsByClassName("courses-list")[0]
    console.log(listEl)
    listEl.scrollBy(-290, 0)
    
}

const moveToRight = e => {
    //coursesList.scrollBy(290, 0)
    let element = e.target.parentNode

    while(!element.id.includes("carousel")){
        element = element.parentNode
    }

    
    console.log("Truee!")
    let listEl = element.getElementsByClassName("courses-list")[0]
    console.log(listEl)
    listEl.scrollBy(290, 0)
}

const CoursesCarousel = () => {
    return (
        <div className="container my-5" id="carousel">

            <div className="controls">
                <h3>Cursos populares</h3>

                <div className="btns">

                    <button className="btn btn-primary" onClick={e => moveToLeft(e)}>
                        <img src="assets/icons/chevron-left.svg" alt="" />
                    </button>

                    <button className="btn btn-primary" onClick={e => moveToRight(e)}>
                        <img src="assets/icons/chevron-right.svg" alt="" />
                    </button>
                </div>
            </div>

            <div className="carousel-courses courses-list">

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
