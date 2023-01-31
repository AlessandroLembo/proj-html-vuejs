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
    <course-card v-for="course in courses" :key="course.id" :course="course"></course-card>

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
</style>