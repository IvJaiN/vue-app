<template>
    <li class="user-item">
        <div class="user-item__title">User #{{ user.id }} (Nickname: {{user.username}})</div>
        <div class="user-item__body">
<!--            go to page user-->
            <div class="user-item__content" @click="$router.push(`/users/${user.id}`)">
                <div class="user-item__photo">
                    <img class="user-item__photo-image" :src="photo[0].url" v-if="photo[0]"/>
                    <spinner v-else/>
                </div>
                <div class="user-item__name">
                    <h4>{{ user.firstName }} {{ user.lastName }}</h4>
                </div>
            </div>
            <ul class="user-item__buttons">
                <li class="user-item__button">
                    <button @click="$emit('onClickChecked', user.id, 'isChecked')">
                        <svg v-if="user.isChecked" class="user-item__button-image" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" width="418" height="448" viewBox="0 0 418 448">
                            <path
                                d="M352 232.5v79.5c0 39.75-32.25 72-72 72h-208c-39.75 0-72-32.25-72-72v-208c0-39.75 32.25-72 72-72h208c10 0 20 2 29.25 6.25 2.25 1 4 3.25 4.5 5.75 0.5 2.75-0.25 5.25-2.25 7.25l-12.25 12.25c-1.5 1.5-3.75 2.5-5.75 2.5-0.75 0-1.5-0.25-2.25-0.5-3.75-1-7.5-1.5-11.25-1.5h-208c-22 0-40 18-40 40v208c0 22 18 40 40 40h208c22 0 40-18 40-40v-63.5c0-2 0.75-4 2.25-5.5l16-16c1.75-1.75 3.75-2.5 5.75-2.5 1 0 2 0.25 3 0.75 3 1.25 5 4 5 7.25zM409.75 110.25l-203.5 203.5c-8 8-20.5 8-28.5 0l-107.5-107.5c-8-8-8-20.5 0-28.5l27.5-27.5c8-8 20.5-8 28.5 0l65.75 65.75 161.75-161.75c8-8 20.5-8 28.5 0l27.5 27.5c8 8 8 20.5 0 28.5z"></path>
                        </svg>
                        <svg v-else class="user-item__button-image" version="1.1" xmlns="http://www.w3.org/2000/svg"
                             width="352" height="448" viewBox="0 0 352 448">
                            <path
                                d="M280 64h-208c-22 0-40 18-40 40v208c0 22 18 40 40 40h208c22 0 40-18 40-40v-208c0-22-18-40-40-40zM352 104v208c0 39.75-32.25 72-72 72h-208c-39.75 0-72-32.25-72-72v-208c0-39.75 32.25-72 72-72h208c39.75 0 72 32.25 72 72z"></path>
                        </svg>
                    </button>
                </li>
                <li class="user-item__button">
                    <button @click="$emit('onClickNominated', user.id, 'isNominated')">
                        <svg v-if="user.isNominated" class="user-item__button-image" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" width="448" height="448" viewBox="0 0 448 448">
                            <path
                                d="M224 416c-4 0-8-1.5-11-4.5l-156-150.5c-2-1.75-57-52-57-112 0-73.25 44.75-117 119.5-117 43.75 0 84.75 34.5 104.5 54 19.75-19.5 60.75-54 104.5-54 74.75 0 119.5 43.75 119.5 117 0 60-55 110.25-57.25 112.5l-155.75 150c-3 3-7 4.5-11 4.5z"></path>
                        </svg>
                        <svg v-else class="user-item__button-image" version="1.1" xmlns="http://www.w3.org/2000/svg"
                             width="448" height="448" viewBox="0 0 448 448">
                            <path
                                d="M416 149c0-70.25-47.5-85-87.5-85-37.25 0-79.25 40.25-92.25 55.75-6 7.25-18.5 7.25-24.5 0-13-15.5-55-55.75-92.25-55.75-40 0-87.5 14.75-87.5 85 0 45.75 46.25 88.25 46.75 88.75l145.25 140 145-139.75c0.75-0.75 47-43.25 47-89zM448 149c0 60-55 110.25-57.25 112.5l-155.75 150c-3 3-7 4.5-11 4.5s-8-1.5-11-4.5l-156-150.5c-2-1.75-57-52-57-112 0-73.25 44.75-117 119.5-117 43.75 0 84.75 34.5 104.5 54 19.75-19.5 60.75-54 104.5-54 74.75 0 119.5 43.75 119.5 117z"></path>
                        </svg>
                    </button>
                </li>
                <li class="user-item__button">
                    <button @click="$emit('onClickImportant', user.id, 'isImportant')">
                        <svg v-if="user.isImportant" class="user-item__button-image" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" width="416" height="448" viewBox="0 0 416 448">
                            <path
                                d="M416 161.75c0 4.5-3.25 8.75-6.5 12l-90.75 88.5 21.5 125c0.25 1.75 0.25 3.25 0.25 5 0 6.5-3 12.5-10.25 12.5-3.5 0-7-1.25-10-3l-112.25-59-112.25 59c-3.25 1.75-6.5 3-10 3-7.25 0-10.5-6-10.5-12.5 0-1.75 0.25-3.25 0.5-5l21.5-125-91-88.5c-3-3.25-6.25-7.5-6.25-12 0-7.5 7.75-10.5 14-11.5l125.5-18.25 56.25-113.75c2.25-4.75 6.5-10.25 12.25-10.25s10 5.5 12.25 10.25l56.25 113.75 125.5 18.25c6 1 14 4 14 11.5z"></path>
                        </svg>
                        <svg v-else class="user-item__button-image" version="1.1" xmlns="http://www.w3.org/2000/svg"
                             width="416" height="448" viewBox="0 0 416 448">
                            <path
                                d="M284.25 251l76.5-74.25-105.5-15.5-47.25-95.5-47.25 95.5-105.5 15.5 76.5 74.25-18.25 105.25 94.5-49.75 94.25 49.75zM416 161.75c0 4.5-3.25 8.75-6.5 12l-90.75 88.5 21.5 125c0.25 1.75 0.25 3.25 0.25 5 0 6.75-3 12.5-10.25 12.5-3.5 0-7-1.25-10-3l-112.25-59-112.25 59c-3.25 1.75-6.5 3-10 3-7.25 0-10.5-6-10.5-12.5 0-1.75 0.25-3.25 0.5-5l21.5-125-91-88.5c-3-3.25-6.25-7.5-6.25-12 0-7.5 7.75-10.5 14-11.5l125.5-18.25 56.25-113.75c2.25-4.75 6.5-10.25 12.25-10.25s10 5.5 12.25 10.25l56.25 113.75 125.5 18.25c6 1 14 4 14 11.5z"></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
<!--        show and hide block posts-->
        <button v-show="!user.isVisitMore" class="user-item__btn" @click="$emit('onClickMore', user.id, 'isVisitMore')">More...</button>
        <div v-if="user.isVisitMore" class="user-item__footer">
            <div class="user-item__footer-content">
                <div class="user-item__footer-contacts">
                    <h6 class="user-item__footer-title">Contacts:</h6>
                    <p class="user-item__footer-phone"><span>Phone: </span>{{ user.phone }}</p>
                    <p class="user-item__footer-email"><span>Email: </span>{{ user.email }}</p>
                    <p class="user-item__footer-website"><span>Website: </span>{{ user.website }}</p>
                </div>
                <div class="user-item__footer-address">
                    <h6 class="user-item__footer-title">Address:</h6>
                    <p class="user-item__footer-city"><span>City: </span>{{ user.address.city }}</p>
                    <p class="user-item__footer-street"><span>Street: </span>{{ user.address.street }}</p>
                    <p class="user-item__footer-suite"><span>Suite: </span>{{ user.address.suite }}</p>
                    <p class="user-item__footer-zipcode"><span>Zipcode: </span>{{ user.address.zipcode }}</p>
                </div>
                <div class="user-item__footer-company">
                    <h6 class="user-item__footer-title">Company:</h6>
                    <p class="user-item__footer-name"><span>Name: </span>{{ user.company.name }}</p>
                    <p class="user-item__footer-catchPhrase"><span>Catch phrase: </span>{{ user.company.catchPhrase }}</p>
                    <p class="user-item__footer-bs"><span>Bs: </span>{{ user.company.bs }}</p>
                </div>
            </div>
            <button class="user-item__btn" @click="$emit('onClickHide', user.id, 'isVisitMore')">Hide</button>
        </div>
    </li>
</template>

<script>
import Spinner from "./Spinner";
export default {
    name: "UserItem",
    components: {Spinner},
    props: {
        user: Object,
        photos: Array
    },
    data() {
        return {
            photo: [],
        }
    },
    methods: {
        async getPhoto() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.user.id}`)
                if (response.status === 200) {
                    this.photo = await response.json()
                } else {
                    alert('Reload please!')
                }
            } catch (e) {
                console.error(e)
            }
        }
    },
    mounted() {
        this.getPhoto()
    }
}
</script>

<style>

.user-item {
    border: 2px solid #560088;
}

.user-item + .user-item {
    margin-top: 20px;
}

.user-item__title {
    text-align: center;
    font-weight: 700;
    position: relative;
    padding: 10px 0;
    border-bottom: 2px solid #560088;
}

.user-item__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.user-item__content {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.user-item__content:hover .user-item__name {
    text-decoration: underline;
}

.user-item__photo {
    width: 50px;
    height: 50px;
    margin-right: 20px;
}

.user-item__photo-image {
    width: 50px;
    height: 50px;
    background: #560088;
    object-fit: contain;
    object-position: center;
}

.user-item__buttons {
    display: flex;
}

.user-item__button + .user-item__button {
    margin-left: 10px;
}

.user-item__button button {
    background: transparent;
    border: none;
}

.user-item__button-image {
    width: auto;
    height: 20px;
}

.user-item__btn {
    margin: 10px;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    color: #560088;
}

.user-item__btn:hover {
    border-bottom: 1px solid #560088;
}

.user-item__footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.user-item__footer-content {
    padding: 10px 0;
}

.user-item__footer-content div {
    width: 340px;
    border: 1px solid #560088;
    padding: 10px;
    margin: 10px;
}

.user-item__footer-content p {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
}

.user-item__footer-content span {
    font-weight: 700;
}

.user-item__footer-title {
    font-size: 20px;
}
</style>