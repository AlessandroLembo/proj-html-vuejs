<script>
import TransformVote from './TransformVote.vue';
export default {
    name: 'Course Card',
    components: { TransformVote },
    props: {
        course: Object
    },

    // computed to build string to print images
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

            <!-- item's card -->
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
                            <transform-vote :vote="course.vote_average"></transform-vote>
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

// structure of the card
.col {
    flex-basis: calc(100% / 6);
    padding: 0.5rem;
    height: 280px;

    .card {
        height: $h100;
        border: 1px solid rgba(0, 0, 0, 0.3);
    }
}

.promo-courses {
    img {
        height: 140px;
    }

    .description {
        padding: 0.5rem;
    }

}

.title-course {
    height: 70px;

    h6 {
        color: rgba(0, 0, 0, 0.3);
        padding-bottom: 10px;
    }

    h5 {
        padding-bottom: 10px;
    }
}

.card-bottom {
    height: 70px;
}

.info-course {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5rem;

    .price {
        font-size: 12px;
        text-align: right;
    }
}
</style>