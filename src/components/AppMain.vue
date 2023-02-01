<script>
import { courses } from '../data';
import CourseCard from './slider/CourseCard.vue';
import JumboSlider from './slider/JumboSlider.vue';
export default {
    name: 'App Main',
    components: { CourseCard, JumboSlider },
    data() {
        return {
            courses,
            recent_courses: []

        }
    },
    computed: {
        showRecentCourse() {
            // const recentCourses = []
            this.courses.filter(course => {
                if (course.recentCourse === true) {
                    this.recent_courses.push(course);
                }
                return this.recent_courses;
            })

        }
    }


}
</script>

<template>
    <!-- to do jumbo slider -->
    <jumbo-slider></jumbo-slider>
    <section id="jumbo-udemy">
        <h1>titolo</h1>
        <figure>
            <!-- <img src="../assets/images/slide-1.jpg" alt=""> -->
            <p>img</p>
        </figure>
    </section>

    <!-- to do Course card -->
    <section id="development-courses">
        <div class="container">
            <h1>development courses</h1>
            <div class="container row">
                <div class="col">
                    <div class="card"></div>
                </div>
                <div class="col">
                    <div class="card"></div>
                </div>
                <div class="col">
                    <div class="card"></div>
                </div>
                <div class="col">
                    <div class="card"></div>
                </div>
                <div class="col">
                    <div class="card"></div>
                </div>
                <div class="col">
                    <div class="card"></div>
                </div>
            </div>

        </div>
    </section>

    <!-- section Limitless learning -->
    <section id="learning">
        <div class="container row">
            <h1>Limitless</h1>

        </div>
    </section>

    <!-- section recent courses -->
    <div class="container">
        <nav class="courses">
            <h1>Recent courses</h1>

            <!-- to do component to print courses menu -->
        </nav>
        <!-- Using component to print course's cards -->
        <div class="row">
            <course-card v-for="course in recent_courses" :key="course.id" :course="course"></course-card>
        </div>
        <div class="btn">
            <button>SHOW ALL</button>
        </div>

    </div>

    <!-- section subscribe newsletter -->
    <section id="newsletter">
        <div class="container row">
            <div class="our-newsletter">
                <h3>Subscribe oure newsletter</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words</p>
            </div>

            <form class="subscribe">
                <label for="email">YOUR E-MAIL ADDRESS</label>
                <div>
                    <input type="text">
                    <button>SUBSCRIBE</button>
                </div>
            </form>
        </div>
    </section>

    <!-- section popular courses -->
    <section id="carousel">
        <div class="container">
            <div>
                <h1>Popular courses</h1>
                <h3>Discover our most popular courses for self learning</h3>
            </div>

            <!-- to do component to print cards -->
            <div class="row">
                <div class="col">
                    <div class="card">

                    </div>
                </div>
                <div class="col">
                    <div class="card">

                    </div>
                </div>
                <div class="col">
                    <div class="card">

                    </div>
                </div>
                <div class="col">
                    <div class="card">

                    </div>
                </div>
                <div class="col">
                    <div class="card">

                    </div>
                </div>
                <div class="col">
                    <div class="card">

                    </div>
                </div>
            </div>

            <div class="btn">
                <button>prev</button>
                <button>next</button>
            </div>
        </div>

    </section>

    <!-- section business -->
    <section id="find-business">


        <div class="container">
            <div class="row">
                <!-- to do component to get card -->
                <div class="big-col">
                    <div class="card section-business">
                        <figure>
                            <img src="../assets/images/image_box_1-221x231.png" alt="">
                        </figure>
                        <div class="start-business">
                            <h1>Become</h1>
                            <p>become an instructor</p>
                            <button>Start</button>
                        </div>
                    </div>
                </div>
                <div class="big-col">
                    <div class="card">

                    </div>
                </div>

            </div>
        </div>

    </section>

    <!-- section testimonials -->
    <section id="testimonials">
        <div class="container">
            <div class="row">

                <!-- to do component to change image (jumbo slider) -->
                <div class="big-col description">
                    <div class="card section-testimonials">
                        <div>
                            <h1>Investing</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, obcaecati excepturi
                                rem culpa neque dignissimos provident voluptatem labore veniam, quae quia cupiditate
                                maiores? Voluptate doloribus adipisci aut, vitae voluptas quasi.</p>
                            <div>
                                <h3>Linda</h3>
                                <h5>Manager</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/verAlignm' as *;

// section jumbo udemy
#jumbo-udemy {
    background-color: #ff4450;
    height: 300px;
    @include vertical-flex;
    justify-content: space-between;

    figure {
        // width: 100%;
        height: 100%;

        img {
            height: $h100;
            object-fit: cover;
        }
    }
}

// section development courses
.row {
    @include vertical-flex;
    flex-wrap: wrap;
    height: $h100;

}

// .col {
//     flex-basis: calc(100% / 6);
//     padding: 0.5rem;
//     height: 280px;

//     .card {
//         border: 1px dashed black;
//         height: $h100;
//     }
// }



// secction learning
#learning {
    height: 500px;
    background-image: url('../assets/images/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

// section recent courses
.courses {
    @include vertical-flex;
    justify-content: center;
}

.btn {
    @include vertical-flex;
    justify-content: center;
}

// section newsletter
#newsletter {
    background-color: #ff4450;
    height: 100px;

    .our-newsletter {
        flex-basis: 50%;
    }

    .subscribe {
        display: flex;
        flex-direction: column;
    }
}

// section popular courses
#carousel {
    background-color: aliceblue;

    h1,
    h3 {
        text-align: center;
    }
}

// section business
#find-business {

    .big-col {
        flex-basis: 50%;
        padding: 1rem;
        height: 280px;

    }
}

.section-business {
    @include vertical-flex;

    figure {
        width: 130px;
        height: 130px;
    }
}

// section testimonials
#testimonials {
    background-image: url('../assets/images/testimonial-1-1917x640-1-1914x639.jpg');
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .description {
        @include vertical-flex;
    }

    .section-testimonials {
        background-color: white;
        width: 600px;
        height: 480px;
        padding: 1rem;
        margin-left: 15rem;

    }
}
</style>