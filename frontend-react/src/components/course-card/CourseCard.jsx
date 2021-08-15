

const CourseCard = () => {
    return (
        <div class="course-card card">
            <img src="assets/images/courses/course-css.jpg" class="card-img-top img-course" alt="..." />

            <div class="card-body">
                <h5 class="card-title">
                    Introducción a CSS3
                </h5>

                <div class="item">
                    <img src="assets/icons/time.svg" width="20px" alt="" />
                    2hrs 30mn
                </div>

                <div class="item">
                    <img src="assets/icons/bar-chart.svg" width="20px" alt="" />
                    Básico
                </div>

                <div class="stars">
                    <img src="assets/icons/star-full.svg" width="14px" alt="" />
                    <img src="assets/icons/star-full.svg" width="14px" alt="" />
                    <img src="assets/icons/star-full.svg" width="14px" alt="" />
                    <img src="assets/icons/star-half.svg" width="14px" alt="" />
                    <img src="assets/icons/star-void.svg" width="14px" alt="" />
                </div>

            </div>

            <div class="card-footer">
                <div class="">
                    <img src="assets/images/teachers/1.jpg" class="img-teacher" alt="" />
                    <span>Johan Castillo</span>
                </div>

                <div class="">
                    <img src="assets/icons/bookmark-void.svg" width="20px" alt="" />
                </div>

            </div>

        </div>
    )
}


export default CourseCard
