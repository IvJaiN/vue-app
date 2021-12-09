<template>
    <button
        class="user-page__btn"
        @click="$router.push('/')"
    >Return</button>

    <header class="user-page__header">User #{{ user.id }}</header>

    <section class="user-page__data-wrapper" v-if="user">
        <div class="user-page__photo">
            <img :src="photos[0].url" alt="my photo" v-if="photos[0]">
            <spinner v-else/>
        </div>
        <div class="user-page__data">
            <span class="user-page__name">{{ user.name }}</span>
            <ul class="user-page__contacts">
                <li class="user-item__footer-phone"><span>Phone: </span>{{ user.phone }}</li>
                <li class="user-item__footer-email"><span>Email: </span>{{ user.email }}</li>
                <li class="user-item__footer-website"><span>Website: </span>{{ user.website }}</li>
            </ul>
            <div class="user-page__places" v-if="user.address">
                <div class="user-page__address">
                    <h6 class="user-item__footer-title">Address:</h6>
                    <p class="user-item__footer-city"><span>City: </span>{{ user.address.city }}</p>
                    <p class="user-item__footer-street"><span>Street: </span>{{ user.address.street }}</p>
                    <p class="user-item__footer-suite"><span>Suite: </span>{{ user.address.suite }}</p>
                    <p class="user-item__footer-zipcode"><span>Zipcode: </span>{{ user.address.zipcode }}</p>
                </div>
                <div class="user-page__company">
                    <h6 class="user-item__footer-title">Company:</h6>
                    <p class="user-item__footer-name"><span>Name: </span>{{ user.company.name }}</p>
                    <p class="user-item__footer-catchPhrase"><span>Catch phrase: </span>{{ user.company.catchPhrase }}</p>
                    <p class="user-item__footer-bs"><span>Bs: </span>{{ user.company.bs }}</p>
                </div>
            </div>
            <spinner v-else/>
        </div>
    </section>
    <spinner v-else/>

    <button
        class="user-page__btn"
        v-if="!visiblePosts"
        @click="fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${this.currentId}`, 'userId')
            .then(data => this.posts = data)
            .then(() => this.visiblePosts = true)"
    >Get posts</button>

    <section class="user-page__posts" v-if='visiblePosts'>
        <ul class="user-page__posts-list" v-if="posts[0]">
            <li
                class="user-page__posts-item"
                v-for="(post, idx) in posts"
                :key="idx"
            >
                <h4 class="user-page__posts-title">{{post.id}}. {{post.title}}</h4>
                <p class="user-page__posts-body">{{post.body}}</p>
            </li>
            <button
                class="user-page__btn"
                @click="visiblePosts = false"
            >Hide posts</button>
        </ul>
        <spinner v-else/>
    </section>
</template>

<script>
import Spinner from "./Spinner";
export default {
    name: "UserPage",
    components: {Spinner},
    data() {
        return {
            user: {},
            posts: [],
            photos: [],
            currentId: this.$route.params.id,
            visiblePosts: false
        }
    },
    methods: {
        async fetchData(url) {
            try {
                const response = await fetch(url)
                if (response.status === 200) {
                    return await response.json()
                } else {
                    alert('Reload please!')
                }
            } catch (e) {
                console.error(e)
            }
        },
    },
    mounted() {
        this.fetchData(`https://jsonplaceholder.typicode.com/users/${this.currentId}`).then(data => this.user = data)
        this.fetchData(`https://jsonplaceholder.typicode.com/photos?albumId=${this.currentId}`).then(data => this.photos = data)
    },
}
</script>

<style>
.user-page__header {
    background: darkgray;
    text-align: center;
    font-weight: 700;
    padding: 20px 0;
}
.user-page__btn {
    background: transparent;
    border: 1px solid #560088;
    padding: 10px 5px;
    color: #560088;
}
.user-page__data-wrapper {
    display: flex;
}
.user-page__photo {
    width: 400px;
    height: 400px;
    margin-right: 50px;
}
.user-page__photo img {
    width: 400px;
    height: 400px;
    object-fit: contain;
    object-position: center;
}
.user-page__data {
    padding-top: 30px;

}
.user-page__name {
    font-weight: 700;
    font-size: 35px;
}
.user-page__contacts {
    margin-top: 20px;
    width: 300px;
}
.user-page__contacts li {
    display: flex;
    justify-content: space-between;
}
.user-page__posts {
    margin-top: 40px;
}
.user-page__posts-item {
    padding: 20px;
    border: 2px solid #560088;
    margin: 5px 0;
}
.user-page__places {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
}
.user-page__address {
    margin-right: 40px;
}
</style>