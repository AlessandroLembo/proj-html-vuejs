<script>
import TransformVote from './TransformVote.vue';
export default {
    name: 'Jumbo Slider',
    components: { TransformVote },
    props: {
        group: Object
    },

    computed: {
        courseSrc1() {
            const url = new URL(`../../assets/images/${this.group.image_1}`, import.meta.url)
            return url.href;
        },
        courseSrc2() {
            const url = new URL(`../../assets/images/${this.group.image_2}`, import.meta.url)
            return url.href;
        },
        courseSrc3() {
            const url = new URL(`../../assets/images/${this.group.image_3}`, import.meta.url)
            return url.href;
        },
        courseSrc4() {
            const url = new URL(`../../assets/images/${this.group.image_4}`, import.meta.url)
            return url.href;
        },
    }



}
</script>

<template>

    <div class="row-courses">

        <!-- print card in first position -->
        <div class="col">
            <div class="card">
                <div class="promo-courses">
                    <figure>
                        <img :src="courseSrc1" :alt="group.name_1">

                    </figure>
                    <div class="description">
                        <div class="title-course">
                            <h6>{{ group.category_1 }}</h6>
                            <h5>{{ group.name_1 }}</h5>
                        </div>

                        <div class="card-bottom">
                            <hr>
                            <div class="info-course">

                                <transform-vote :vote="group.vote_average_1"></transform-vote>

                                <div class="price">
                                    <div>{{ group.original_cost_1 }}</div>
                                    <div>{{ group.price_1 }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- print card in second position -->
        <div class="col">
            <div class="card">
                <div class="promo-courses">
                    <figure>
                        <img :src="courseSrc2" :alt="group.name_2">

                    </figure>
                    <div class="description">
                        <div class="title-course">
                            <h6>{{ group.category_2 }}</h6>
                            <h5>{{ group.name_2 }}</h5>
                        </div>

                        <div class="card-bottom">
                            <hr>
                            <div class="info-course">

                                <transform-vote :vote="group.vote_average_2"></transform-vote>

                                <div class="price">
                                    <div>{{ group.original_cost_2 }}</div>
                                    <div>{{ group.price_2 }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- print card in third position -->
        <div class="col">
            <div class="card">
                <div class="promo-courses">
                    <figure>
                        <img :src="courseSrc3" :alt="group.name_3">

                    </figure>
                    <div class="description">
                        <div class="title-course">
                            <h6>{{ group.category_3 }}</h6>
                            <h5>{{ group.name_3 }}</h5>
                        </div>

                        <div class="card-bottom">
                            <hr>
                            <div class="info-course">

                                <transform-vote :vote="group.vote_average_3"></transform-vote>

                                <div class="price">
                                    <div>{{ group.original_cost_3 }}</div>
                                    <div>{{ group.price_3 }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- print card in fourth position -->
        <div class="col">
            <div class="card">
                <div class="promo-courses">
                    <figure>
                        <img :src="courseSrc4" :alt="group.name_4">

                    </figure>
                    <div class="description">
                        <div class="title-course">
                            <h6>{{ group.category_4 }}</h6>
                            <h5>{{ group.name_4 }}</h5>
                        </div>

                        <div class="card-bottom">
                            <hr>
                            <div class="info-course">
                                <transform-vote :vote="group.vote_average_4"></transform-vote>

                                <div class="price">
                                    <div>{{ group.original_cost_4 }}</div>
                                    <div>{{ group.price_4 }}</div>
                                </div>
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

.row-courses {
    @include vertical-flex;
    height: $h100;
}

.col {
    flex-basis: 25%;
    padding: 0.5rem;
    height: 350px;

    .card {
        height: $h100;
        border: 1px solid rgba(0, 0, 0, 0.3);
    }
}

// image's size
.promo-courses {
    height: 210px;

    figure {
        width: 100%;
        height: $h100;
    }

    img {
        height: $h100;
        width: 100%;
        object-fit: cover;
    }

    .description {
        padding: 0.5rem;
    }

}

// space and color's text
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

// bottom card, vote and price style
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