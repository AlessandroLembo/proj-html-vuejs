<script>
import { courses_groups, categories, courses, jobs } from '../data';
import CourseCard from './mainComponent/CourseCard.vue';
import JumboSlider from './mainComponent/JumboSlider.vue';
import Business from './mainComponent/Business.vue';
export default {
    name: 'App Main',
    components: { CourseCard, JumboSlider, Business, },
    data() {
        return {
            term: '',
            index: 0,
            courses,
            courses_groups,
            categories,
            jobs,
            recent_courses: [],
            development_courses: [],

        }
    },
    computed: {
        // get an array with recently courses searched
        showRecentCourse() {
            this.courses.filter(course => {
                if (course.recentCourse === true) {
                    this.recent_courses.push(course);
                }
                return this.recent_courses;
            })
        },


        // get an array with all courses of development
        showDevelopmentCourses() {
            this.courses.filter(course => {
                if (course.category === 'Development >') {
                    this.development_courses.push(course);
                }
                return this.development_courses;
            })
        },

    },

    methods: {
        returnToFirstGroup() {
            if (this.index === this.courses_groups.length) this.index = 0;
        },

        returnToLastGroup() {
            if (this.index < 0) this.index = this.courses_groups.length - 1;
        },

        scrollToLeftGroup() {
            this.index--;
            this.returnToLastGroup();
        },

        scrollToRightGroup() {
            this.index++;
            this.returnToFirstGroup();

        }
    }


}
</script>

<template>
    <!-- jumbo slider -->
    <section id="jumbo-udemy">
        <div class="jumbo-claim">
            <h1>Udemy Affiliate Sales</h1>
            <p>Monetize your audience and attract new customers with Udemy</p>
        </div>
        <figure>
            <img src="../assets/images/slide-1.jpg" alt="jumbo">
        </figure>
    </section>

    <!-- Course card component -->
    <section id="development-courses">
        <div class="container">
            <h1>Popular Development Courses</h1>
            <div class="row">
                <course-card v-for="course in development_courses" :key="course.id" :course="course"></course-card>
            </div>
        </div>
    </section>

    <!-- section Limitless learning -->
    <section id="learning">
        <div class="container learning-claim">
            <div class="text-claim">
                <h1>Limitless learning, more possibilities</h1>
                <p>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling
                    commitments</p>
                <button>READ MORE</button>
            </div>
            <div></div>

        </div>
    </section>

    <!-- section recent courses -->
    <div class="container">

        <h1 id="recent-courses">Recent courses</h1>
        <nav class="courses">
            <div v-for="category in categories" :key="category.id">{{ category.category }}</div>
        </nav>
        <!-- Using component to print course's cards -->
        <div class="row">
            <course-card v-for="course in recent_courses" :key="course.id" :course="course"></course-card>
        </div>
        <div class="btn">
            <button class="btn-shaw">SHOW ALL</button>
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

            <div class="subscribe">
                <form @submit="prevent" id="register">
                    <label for="email">YOUR E-MAIL ADDRESS</label>
                    <div class="search-field">
                        <input type="text" id="email-field" v-model.trim="term" placeholder="Enter your E-mail">
                        <button>SUBSCRIBE</button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- section popular courses -->
    <section id="carousel">
        <div class="container">
            <div>
                <h1>Popular courses</h1>
                <h3>Discover our most popular courses for self learning</h3>
            </div>

            <!-- slider -->
            <jumbo-slider v-for="(group, i) in courses_groups" :key="group.id" :group="group"
                v-show="i === index"></jumbo-slider>

            <div class="btn">
                <button @click="scrollToLeftGroup">prev</button>
                <button @click="scrollToRightGroup">next</button>
            </div>

        </div>

    </section>

    <!-- section business -->
    <section id="find-business">


        <div class="container">
            <div class="row">
                <business v-for="job in jobs" :key="job.description" :job="job"></business>
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
                        <div class="text-testimonials">
                            <h1>Investing for Your Future</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, obcaecati excepturi
                                rem culpa neque dignissimos provident voluptatem labore veniam, quae quia cupiditate
                                maiores? Voluptate doloribus adipisci aut, vitae voluptas quasi.</p>
                            <div>
                                <h3>Linda</h3>
                                <h5>Product Manage, Apple Inc</h5>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    .jumbo-claim {
        color: white;
        padding-left: 18rem;

        h1 {
            font-size: 40px;
            padding-bottom: 1rem;
        }

        p {
            font-size: 25px;
        }
    }

}

figure {
    height: 100%;

    img {
        height: $h100;
        object-fit: cover;
    }
}

// section development courses
#development-courses {
    padding: 2.5rem 0;

    h1 {
        font-weight: 800;
        padding: 1.5rem 0;
        margin-left: 1rem;
    }
}

.row {
    @include vertical-flex;
    height: $h100;

}

// section learning
#learning {
    height: 500px;
    background-image: url('../assets/images/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.learning-claim {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    .text-claim {
        width: 40%;

        h1 {
            font-size: 40px;
            font-weight: bold;
        }

        p {
            padding: 1rem 0;
            font-weight: bold;
        }

        button {
            background-color: #ff4450;
            padding: 10px 15px;
            border-radius: 20px;

        }
    }
}


// section recent courses
#recent-courses {
    @include vertical-flex;
    justify-content: center;
    padding-top: 3rem;

}

.courses {
    @include vertical-flex;
    justify-content: center;
    height: 70px;

    div {
        padding: 0 1rem;
    }
}

.btn {
    @include vertical-flex;
    justify-content: center;

    .btn-shaw {
        background-color: #ff4450;
        border-radius: 20px;
        padding: 10px 15px;
        margin: 2rem 0 3rem;
    }
}

// section newsletter
#newsletter {
    background-color: #ff4450;
    height: 130px;
    color: white;

    .row {
        justify-content: center;
    }

}

.our-newsletter {
    flex-basis: 50%;
    padding-right: 2rem;

    p {
        font-size: 14px;
    }
}

.subscribe {
    height: $h100;

    #register {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: $h100;
    }
}

.search-field {
    padding-top: 10px;

    #email-field {
        height: $h100;
        width: 250px;
    }

    button {
        background-color: #457993;
        padding: 10px 15px;
    }
}

// section popular courses

#carousel {
    background-color: aliceblue;
    padding-top: 3rem;

    h1,
    h3 {
        text-align: center;
    }

    h3 {
        padding: 5px 0 15px;
        color: rgba(0, 0, 0, 0.8);
    }
}

.btn {
    padding: 2rem 0 3rem;

    button {
        background-color: aqua;
        padding: 10px 15px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        margin: 0 10px;

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

.text-testimonials {
    padding: 5rem 2rem 2rem;

    h1 {
        font-size: 30px;
        font-weight: bold;
    }

    p {
        padding: 1.5rem 0;
    }

    p,
    h5 {
        color: rgba(0, 0, 0, 0.7);
    }
}
</style>