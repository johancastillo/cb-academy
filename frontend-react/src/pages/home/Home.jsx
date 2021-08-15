import Counter from "../../components/counter/Counter.jsx"
import CoursesCarousel from "../../components/courses-carousel/CoursesCarousel.jsx"
import Header from "../../components/header/Header.jsx"
import "./Home.css"




const Home = () => {
    return (
        <>
            <Header />
            <Counter />

            <CoursesCarousel />
            <CoursesCarousel />
            <CoursesCarousel />
            <CoursesCarousel />

        </>
    )
}


export default Home