<template>
    <ul class="users__list">
        <user-item
            v-if="users[0]"
            v-for="user in users"
            :user="user"
            :key="user.id"
            @onClickMore="onClickButton"
            @onClickHide="onClickButton"
            @onClickChecked="onClickButton"
            @onClickNominated="onClickButton"
            @onClickImportant="onClickButton"
        />
        <spinner v-else/>
    </ul>
</template>

<script>
import UserItem from "./UserItem";
import Spinner from "./Spinner";
import UserPage from "./UserPage";

export default {
    name: 'Main',
    components: {UserPage, Spinner, UserItem},
    data() {
        return {
            users: []
        }
    },
    methods: {

        onClickButton(id, flag) {
            this.users.map(user => {
                if (user.id === id) {
                    user[flag] = !user[flag]
                }
            })
        },

        async fetchData(url) {
            try {
                const response = await fetch(url)
                if (response.status === 200) {
                    return await response.json()
                } else {
                    alert('Reload please')
                }
            } catch (e) {
                console.error(e)
            }
        },

        changeDataUser(user) {
            const [firstName, lastName] = user.name.split(' ')
            return {
                ...user,
                firstName,
                lastName,
                isImportant: false,
                isNominated: false,
                isChecked: false,
                isVisitMore: false
            }
        }
    },

    mounted() {
        this.fetchData('https://jsonplaceholder.typicode.com/users').then(data => this.users = data.map(item => this.changeDataUser(item)))
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

#app {
    padding: 20px;
}


</style>
