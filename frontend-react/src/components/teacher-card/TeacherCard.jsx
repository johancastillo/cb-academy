import {Link} from "wouter"


const TeacherCard = () => {
    return (
        <div className="course-card card">
            <Link to="/cursos/1">
                <img src="assets/images/teachers/01.jpg" className="card-img-top img-course" alt="..." />
            </Link>

            <div className="card-body text-center">
                <Link to="/cursos/1">

                    <h5 className="card-title text-center">
                        Johan Castillo
                    </h5>
                </Link>

                <span className="">Web developer Full Stack</span>


                <div className="stars text-center mb-2">
                    <img src="assets/icons/star-full.svg" width="14px" alt="" />
                    <img src="assets/icons/star-full.svg" width="14px" alt="" />
                    <img src="assets/icons/star-full.svg" width="14px" alt="" />
                    <img src="assets/icons/star-half.svg" width="14px" alt="" />
                    <img src="assets/icons/star-void.svg" width="14px" alt="" />
                </div>


                <div className="text-center">
                    <img src="assets/images/logos/google.png" width="120px" alt="" />
                </div>

                

               

            </div>

            

        </div>
    )
}


export default TeacherCard

