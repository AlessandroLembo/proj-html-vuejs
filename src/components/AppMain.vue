<script>
import { courses } from '../data';
import CourseCard from './slider/CourseCard.vue';
import JumboSlider from './slider/JumboSlider.vue';
export default {
    name: 'App Main',
    components: { CourseCard, JumboSlider },
    data() {
        return {
            courses
        }
    },


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
        <nav class="recent-courses">
            <h1>Recent courses</h1>

            <!-- to do component to print courses menu -->
        </nav>
        <!-- Using component to print course's cards -->
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

        <course-card v-for="course in courses" :key="course.id" :course="course"></course-card>
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
}

.col {
    flex-basis: calc(100% / 6);
    padding: 0.5rem;
    height: 280px;

    .card {
        border: 1px dashed black;
        height: $h100;
    }
}

// secction learning
#learning {
    height: 500px;
    background-image: url('../assets/images/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

// section recent courses
.recent-courses {
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
</style>