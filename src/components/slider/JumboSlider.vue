<script>
import { courses_groups } from '../../data';
export default {
    data() {
        return {
            courses_groups
            // groups: [
            //     {
            //         first_group: [
            //             {
            //                 id: 0,
            //                 category: 'Development >',
            //                 name: 'The Complete iOS 10 & Swift 3 Developer Course',
            //                 vote_average: 4,
            //                 price: '$100',
            //                 original_cost: '$199.99',
            //                 image: '895786_7b4b_2-272x161.jpg',
            //                 recentCourse: true
            //             },
            //             {
            //                 id: 1,
            //                 category: 'Development >',
            //                 name: 'Web Design for Beginners: Real World Coding in HTML & CSS',
            //                 vote_average: 5,
            //                 price: '$65',
            //                 original_cost: '$129.99',
            //                 image: '246154_d8b0_3-272x161.jpg',
            //                 recentCourse: true
            //             },
            //             {
            //                 id: 2,
            //                 category: 'Development >',
            //                 name: 'GitHub Ultimate: Master Git and GitHub - Beginner to Expert',
            //                 vote_average: 4,
            //                 price: '$50',
            //                 original_cost: '$99.99',
            //                 image: '752950_b773-272x161.jpg',
            //                 recentCourse: false
            //             },
            //             {
            //                 id: 3,
            //                 category: 'Development >',
            //                 name: 'The Complete iOS 11 & Swift Developer Course - Build 20 Apps',
            //                 vote_average: 4,
            //                 price: '$100',
            //                 original_cost: '$199.99',
            //                 image: '1253188_58f7_2-272x161.jpg',
            //                 recentCourse: false

            //             }
            //         ],
            //         second_group: [
            //             {
            //                 id: 4,
            //                 category: 'Development >',
            //                 name: 'Android Java Masterclass - Become App Developer',
            //                 vote_average: 4,
            //                 price: '$50',
            //                 original_cost: '$99.99',
            //                 image: '919872_ed54_6-272x161.jpg',
            //                 recentCourse: false
            //             },
            //             {
            //                 id: 5,
            //                 category: 'Development >',
            //                 name: 'Xamarin Forms: Build Native Cross-plataform Apps with C#',
            //                 vote_average: 4,
            //                 price: '$95',
            //                 original_cost: '$189.99',
            //                 image: '951684_9c1a_2-272x161.jpg',
            //                 recentCourse: false
            //             },
            //             {
            //                 id: 6,
            //                 category: 'Design >',
            //                 name: 'CSS - The complete Guide 2020 (incl. Flexbox, Grid & Sass)',
            //                 vote_average: 5,
            //                 price: '$100',
            //                 original_cost: '$199.99',
            //                 image: '1561458_7f3b-272x161.jpg',
            //                 recentCourse: true
            //             },
            //             {
            //                 id: 7,
            //                 category: 'Design >',
            //                 name: 'Digitally Painting Light and Color: Amateur to Master',
            //                 vote_average: 4,
            //                 price: '$70',
            //                 original_cost: '$139.99',
            //                 image: '1208228_d61c_4-272x161.jpg',
            //                 recentCourse: true
            //             }
            //         ],
            //         third_group: [
            //             {
            //                 id: 8,
            //                 category: 'Arts & Crafts >',
            //                 name: 'Become an Arabic Calligraphy Artist from Scratch',
            //                 vote_average: 5,
            //                 price: '$199.99',
            //                 original_cost: '',
            //                 image: '186792_41e4_4-272x161.jpg',
            //                 recentCourse: true
            //             },
            //             {
            //                 id: 9,
            //                 category: 'Google >',
            //                 name: 'Google Searching Ninja!',
            //                 vote_average: 4,
            //                 price: '$45',
            //                 original_cost: '$89.99',
            //                 image: '1776542_30b1-272x161.jpg',
            //                 recentCourse: true
            //             },
            //             {
            //                 id: 10,
            //                 category: 'Arts & Crafts >',
            //                 name: 'Foundation for Mastering Watercolor Painting',
            //                 vote_average: 5,
            //                 price: '$10',
            //                 original_cost: '$19.99',
            //                 image: '949316_2a64_11-272x161.jpg',
            //                 recentCourse: true
            //             },
            //             {
            //                 id: 11,
            //                 category: 'Food & Beverage >',
            //                 name: 'Get Wine-Smart',
            //                 vote_average: 4,
            //                 price: '$25',
            //                 original_cost: '$49.99',
            //                 image: '366802_6fcc-272x161.jpg',
            //                 recentCourse: true
            //             }
            //         ],
            //         fourth_group: [
            //             {
            //                 id: 12,
            //                 category: 'Arts & Crafts >',
            //                 name: 'The Colored Pencil Drawing Course',
            //                 vote_average: 4,
            //                 price: '$18',
            //                 original_cost: '$34.99',
            //                 image: '381588_2e6d_4-272x161.jpg',
            //                 recentCourse: true
            //             },
            //             {
            //                 id: 13,
            //                 category: 'Arts & Crafts >',
            //                 name: 'Paint Realistic Watercolor and Botanicals - STUDIO BASICS',
            //                 vote_average: 4,
            //                 price: '$35',
            //                 original_cost: '$69.99',
            //                 image: '838056_611a_3-272x161.jpg',
            //                 recentCourse: true
            //             },
            //             {
            //                 id: 14,
            //                 category: 'Arts & Crafts >',
            //                 name: 'Mastering Brushstrokes - Part 1',
            //                 vote_average: 5,
            //                 price: '$10',
            //                 original_cost: '$19.99',
            //                 image: '1414956_d944_15-272x161.jpg',
            //                 recentCourse: true
            //             },
            //             {
            //                 id: 15,
            //                 category: 'Arts & Crafts >',
            //                 name: 'Paint Realistic Watercolour and Botanicals - MAGNOLIAS',
            //                 vote_average: 5,
            //                 price: '$35',
            //                 original_cost: '$69.99',
            //                 image: '1109398_4c13-272x161.jpg',
            //                 recentCourse: true
            //             }
            //         ]
            //     }
            // ]
        }
    },
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
                                <div>{{ group.vote_average_1 }}</div>
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
                                <div>{{ group.vote_average_2 }}</div>
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
                                <div>{{ group.vote_average_3 }}</div>
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
                                <div>{{ group.vote_average_4 }}</div>
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