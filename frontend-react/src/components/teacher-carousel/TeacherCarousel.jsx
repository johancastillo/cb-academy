import "./TeacherCarousel.css"
import TeacherCard from "../teacher-card/TeacherCard.jsx"

const moveToLeft = e => {
    //coursesList.scrollBy(-290, 0)
    let element = e.target.parentNode

    while (!element.id.includes("carousel")) {
        element = element.parentNode
    }


    console.log("Truee!")
    let listEl = element.getElementsByClassName("teachers-list")[0]
    console.log(listEl)
    listEl.scrollBy(-290, 0)

}

const moveToRight = e => {
    //coursesList.scrollBy(290, 0)
    let element = e.target.parentNode

    while (!element.id.includes("carousel")) {
        element = element.parentNode
    }


    console.log("Truee!")
    let listEl = element.getElementsByClassName("teachers-list")[0]
    console.log(listEl)
    listEl.scrollBy(290, 0)
}

const TeacherCarousel = () => {
    return (
        <div className="container my-5" id="carousel">

            <div className="controls">
                <h3>Aprende con expertos</h3>


            </div>

            <div className="teachers-list">

                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />


            </div>

            <div className="text-center controls-teachers">
                <div className="btns">

                    <button className="btn btn-primary" onClick={e => moveToLeft(e)}>
                        <img src="assets/icons/chevron-left.svg" alt="" />
                    </button>

                    <button className="btn btn-primary" onClick={e => moveToRight(e)}>
                        <img src="assets/icons/chevron-right.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}


export default TeacherCarousel


