<script>
import { options } from '../../data'
export default {
    name: 'Search content',
    data() {
        return {
            options,
            term: ''
        }
    }
}
</script>

<template>
    <div class="filter-search">
        <div class="select">
            <font-awesome-icon icon="fa-solid fa-bars" />
            <select name="category" id="category">
                <option value="category">CATEGORY</option>
                <option v-for="option in options" :key="option.id" value="category">{{ option.category }}</option>
            </select>
        </div>
        <form @submit.prevent class="search-bar">
            <input type="text" id="field" v-model.trim="term" placeholder="Search courses">
            <button id="btn-search">Search</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/verAlignm' as *;

// section filter and search
.filter-search {
    @include vertical-flex;
    flex-basis: 40%;
}

#category {
    margin-left: 5px;
    cursor: pointer;
}

// select
.select {
    @include vertical-flex;
    margin-left: 5px;
}

// input field
.search-bar {
    padding: 0 0.5rem;

    #field {
        width: 300px;
        height: 35px;
        background-color: aliceblue;
        border: none;
    }

    #btn-search {
        width: 50px;
        height: 35px;
        cursor: pointer;
        background-color: #457993;
        color: white;

    }
}
</style>