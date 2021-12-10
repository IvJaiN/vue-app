<template>
    <div class="form-wrapper" @click="$emit('closeModal')">
        <form class="form" @click.stop @submit.prevent>
            <h4 class="form__title">Creat new user</h4>
            <div class="form-content">
                <div class="form-colum">
                    <h6 class="form-colum__title">User data</h6>
                    <form-input
                        v-for="input in userData"
                        :key="input"
                        :name="input"
                        @onInput="onInputUser"
                    />
                </div>
                <div class="form-colum">
                    <h6 class="form-colum__title">Address</h6>
                    <form-input
                        v-for="input in address"
                        :key="input"
                        :name="input"
                        @onInput="onInputAddress"
                    />
                </div>
                <div class="form-colum">
                    <h6 class="form-colum__title">Company</h6>
                    <form-input
                        v-for="input in company"
                        :key="input"
                        :name="input"
                        @onInput="onInputCompany"
                    />
                </div>
            </div>
            <button type="submit" @click="$emit('createUser', this.user)">Send</button>
        </form>
    </div>

</template>

<script>
import FormInput from "./FormInput";
export default {
    name: "Registration",
    components: {FormInput},
    data() {
        return {
            user: {
                name: '',
                username: '',
                email: '',
                phone: '',
                website: '',
                address: {
                    street: '',
                    suite: '',
                    city: '',
                    zipcode: ''
                },
                company: {
                    name: '',
                    catchPhrase: '',
                    bs: ''
                }
            },
            userData: ['name', 'username', 'email', 'phone', 'website'],
            address: ['street', 'suite', 'city', 'zipcode'],
            company: ['name', 'catchPhrase', 'bs']
        }
    },
    methods: {
        onInputUser(name, data) {
            this.user[name] = data
        },
        onInputAddress(name, data) {
            this.user.address[name] = data
        },
        onInputCompany(name, data) {
            this.user.company[name] = data
        },
        createNewUser() {
            return fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.user)
            }).then(response => {
                if (response.ok) {
                    return response.json()
                }
            }).then(data => console.log(data))
        }
    }
}
</script>

<style>
.form-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
}

.form {
    background: white;
    width: 850px;
    min-height: 400px;
    border-radius: 15px;
    padding: 10px;
}
.form__title {
    text-align: center;
    padding: 10px 0;
}
.form-content {
    display: flex;
}
.form-colum + .form-colum {
    margin-left: 20px;
}
.form-colum__title {
    font-size: 20px;
}
.form-colum {
    width: 300px;
}
</style>