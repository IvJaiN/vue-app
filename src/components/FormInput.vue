<template>
    <div class="form-input__item">
        <label :for="name">
            {{upStr(name)}}
        </label>
        <input
            :id="name"
            type="text"
            :placeholder="name"
            v-model.trim="result"
            @input="$emit('onInput', name, result)"
        >
    </div>
</template>

<script>
export default {
    name: "FormInput",
    props: {
        placeholder: String,
        name: String
    },
    data() {
        return {
            result: ''
        }
    },
    methods: {
        upStr(str) {
            return str[0].toUpperCase() + str.slice(1)
        }
    },
    computed: {

    }
}
</script>

<style scoped>
.form-input__item {
    display: flex;
    justify-content: space-between;

    align-items: center;
    margin: 15px 5px;
}
.form-input__item input {
    padding: 5px ;
}
</style>