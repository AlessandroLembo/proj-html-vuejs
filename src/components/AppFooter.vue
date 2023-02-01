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
                        <div class="img-udemy">
                            <figure>
                                <img src="../assets/images/Top-udemy-courses-90-percent-off.jpg" alt="Udemy">
                            </figure>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <hr>
        <div class="container">
            <div class="copyright">
                <figure>
                    <img src="../assets/images/footer-logo2x-50x56.png" alt="logo master study ">
                </figure>
                <div>Copiright c 2020.<span>MasterStudy</span>Theme by <span>StylemixThemes</span></div>
            </div>

        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/verAlignm' as *;

footer {
    background-color: #273044;
    min-height: 200px;
}

// Footer Contacts
.info {
    height: $h100;
    padding: 2rem 0;
}

.row {
    @include vertical-flex;
    height: $h100;

    .md-col {
        flex-basis: 25%;
        @include vertical-flex;
        padding: 0 1rem;

        figure {
            width: 250px;
            height: 130px;
        }
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

.img-udemy {
    @include vertical-flex;
    justify-content: center;
    height: $h100;

    img {
        height: $h100;
    }
}

// Footer copyright

.copyright {
    @include vertical-flex;
    padding: 1rem 0;

    figure {
        width: 35px;
        height: 35px;
        margin-right: 1rem;

        img {
            height: $h100;
        }
    }

    span {
        text-decoration: underline;
    }
}
</style>