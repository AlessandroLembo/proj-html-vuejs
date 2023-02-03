<script>
export default {
    name: 'Job card',
    props: {
        job: Object
    },

    // build sting image
    computed: {
        jobSrc() {
            const url = new URL(`../../assets/images/${this.job.image}`, import.meta.url)
            return url.href;
        }
    }

}
</script>

<template>
    <div class="big-col">
        <div class="card section-business">
            <figure>
                <img :src="jobSrc" :alt="job.description">
            </figure>
            <div class="start-business">
                <h1>{{ job.job }}</h1>
                <p>{{ job.description }}</p>
                <button>{{ job.action }}</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/verAlignm' as *;

.big-col {
    flex-basis: 50%;
    padding: 1rem;
    margin: 2rem 0;
    height: 280px;
    @include vertical-flex;

    .card {
        border: 1px solid rgba(0, 0, 0, 0.2);
        height: $h100;
        padding: 1rem;
    }

}

.section-business {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $h100;

    figure {
        width: 130px;
        height: 130px;
        padding-right: 1rem;
    }
}

.start-business {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
        padding: 0.5rem 0;
    }

    button {
        background-color: #ff4450;
        padding: 10px 15px;
        border-radius: 15px;
    }

}
</style>