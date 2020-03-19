<template>
<div>
    <div class="post" v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
</div>

</template>

<script>
    export default {
        name: 'Post',
        props: {
            posts: {
                type: Array
            } 
        }
    }
    
</script>