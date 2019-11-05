<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <icon name="earth" />
        <form id="form" action="/api/submit">
            <input type="text" v-model="v1" />
            <input type="text" v-model="v2" />
            <button type="submit" formmethod="post">提交</button>
            <button type="reset">重置</button>
        </form>
        <lx-button type="primary">组件按钮</lx-button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data() {
        return {
            v1: 1,
            v2: 2
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
