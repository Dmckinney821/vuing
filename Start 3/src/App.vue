<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input
                                type="text"
                                id="firstName"
                                class="form-control"
                                :value='userData.firsName'
                                @input='userData.firstName = $event.target.value'>
                </div>
                <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input
                                type="text"
                                id="lastName"
                                class="form-control"
                                :value='userData.lastName'
                                @input='userData.lastName = $event.target.value'>
                </div>
                <div class="form-group">
                        <label for="email">Email</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                :value='userData.email'
                                @input='userData.email = $event.target.value'>
                </div>
                <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                :value='userData.password'
                                @input='userData.password = $event.target.value'>
                </div>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <button
                                class="btn btn-primary"
                                @click.prevent='submitted'>
                                Submit!
                            </button>
                        </div>
                    </div>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if='isSubmitted'>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.firstName }}  {{ userData.lastName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-switch v-model='dataSwitch'></app-switch>
        </div>
    </div>
    
</template>

<script>
    import Switch from './Switch.vue'
    export default {
        data() {
            return {
                userData: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                },
                dataSwitch: true,
                isSubmitted: false
            }
        },
        methods: {
            storeData() {
                this.storeData = true
            },
            submitted() {
                this.isSubmitted = true
            }
        },
        components: {
            appSwitch: Switch
        }
    }
</script>

<style>
</style>
