<template>
    <div id="app">
        <keep-alive>
            <router-view class="main-container" v-if="$route.meta.keepAlive">
            </router-view>
        </keep-alive>
        <router-view class="main-container" v-if="!$route.meta.keepAlive">
        </router-view>
    </div>
</template>

<script>

    export default {}
</script>

<style>
    @import './style/common.less';
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
