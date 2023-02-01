<script>
export default {

}
</script>

<template>
    <footer>
        <div class="container">
            <div class="info">
                <div class="row">
                    <div class="md-col">
                        <h1>About</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam assumenda nemo. In eaque
                            possimus temporibus, deserunt omnis rem alias porro, exercitationem reiciendis tempora
                            impedit! Itaque ratione assumenda tempore quam!</p>
                    </div>
                    <div class="md-col">
                        <h1>CONTACT</h1>
                        <address>
                            <div>Usa, California 20, First Avenue, Califonia</div>
                            <div class="contact">
                                <h5>tel.: +1 212 458 300 32</h5>
                                <h5> Fax: +1 212 375 2414</h5>
                            </div>
                            <div>info@masterstudy.com</div>
                        </address>
                    </div>
                    <div class="md-col">
                        <h1>SOCIAL NETWORK</h1>

                        <!-- to do component to print icons -->
                        <div class="flex-icon">
                            <font-awesome-icon class="social-icon" icon="fa-brands fa-facebook" />
                            <font-awesome-icon class="social-icon" icon="fa-brands fa-instagram" />
                            <font-awesome-icon class="social-icon" icon="fa-brands fa-linkedin" />
                            <font-awesome-icon class="social-icon" icon="fa-brands fa-pinterest" />
                            <font-awesome-icon class="social-icon" icon="fa-brands fa-twitter" />
                            <font-awesome-icon class="social-icon" icon="fa-brands fa-slack" />
                            <font-awesome-icon class="social-icon" icon="fa-brands fa-google-plus" />
                            <font-awesome-icon class="social-icon" icon="fa-brands fa-skype" />

                        </div>
                    </div>
                    <div class="md-col">

                    </div>
                </div>

            </div>
            <hr>
            <div class="copyright">

            </div>

        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/verAlignm' as *;

footer {
    background-color: #273044;
    min-height: 100px;
}

.row {
    @include vertical-flex;
    height: $h100;

    .md-col {
        flex-basis: 25%;
        height: 280px;
    }
}

.flex-icon {
    display: flex;
    flex-wrap: wrap;

    .social-icon {
        flex-basis: 25%;
        font-size: 40px;
        height: 50px;
        padding: 10px 0;
    }
}
</style>