<script>
import { courses } from '../../data/';
export default {
    data() {
        return {
            courses
        }
    },
    props: {
        course: Object
    },
    computed: {
        courseSrc() {
            const url = new URL(`../../assets/images/${this.course.image}`, import.meta.url)
            return url.href;
        },
    }
}
</script>

<template>
    <div class="col">
        <div class="card">
            <div class="promo-courses">
                <img :src="courseSrc" :alt="course.name">
                <div class="description">

                    <div class="title-course">
                        <h6>{{ course.category }}</h6>
                        <h5>{{ course.name }}</h5>
                    </div>

                    <div class="card-bottom">
                        <hr>
                        <div class="info-course">
                            <div>{{ course.vote_average }}</div>
                            <div class="price">
                                <div>{{ course.original_cost }}</div>
                                <div>{{ course.price }}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/verAlignm' as *;

.col {
    flex-basis: calc(100% / 6);
    padding: 0.5rem;
    height: 280px;

    .card {
        border: 1px dashed black;
        height: $h100;
    }
}

.promo-courses {
    img {
        // margin-bottom: 10px;
        height: 140px;
    }

    .description {
        padding: 0.5rem;
    }

}

.title-course {
    height: 80px;
}

.card-bottom {
    height: 60px;
}

.info-course {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
        font-size: 12px;
        text-align: right;
    }
}
</style>