import Counter from "../../components/counter/Counter.jsx"
import CoursesCarousel from "../../components/courses-carousel/CoursesCarousel.jsx"
import Header from "../../components/header/Header.jsx"
import TeacherCarousel from "../../components/teacher-carousel/TeacherCarousel.jsx"
import "./Home.css"




const Home = () => {
    return (
        <>
            <Header />
            <Counter />
            
            <TeacherCarousel />

            <CoursesCarousel />
            <CoursesCarousel />
            <CoursesCarousel />
            <CoursesCarousel />

        </>
    )
}


export default Home