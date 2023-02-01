<script>
export default {
    name: 'Search content',
    data() {
        return {
            options: [
                {
                    id: 1,
                    category: 'Business',
                },
                {
                    id: 2,
                    category: 'Design',
                },
                {
                    id: 3,
                    category: 'Development',
                },
                {
                    id: 4,
                    category: 'Lifestyle',
                },
                {
                    id: 5,
                    category: 'Office Productivity',
                }
            ],

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

.filter-search {
    @include vertical-flex;
    flex-basis: 40%;
}

#category {
    margin-left: 5px;
    cursor: pointer;
}

.select {
    @include vertical-flex;
    margin-left: 5px;
}

.search-bar {
    padding: 0 0.5rem;

    #field {
        width: 300px;
        height: 35px;
        background-color: aliceblue;
    }

    #btn-search {
        width: 50px;
        height: 35px;
        cursor: pointer;
    }
}
</style>