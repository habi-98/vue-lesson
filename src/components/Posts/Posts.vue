<template>
    <div>
        <h1>Posts</h1>
        <select @change="FETCH_POSTS(limit)" v-model="limit">
            <option value="">Выбери лимит постов</option>
            <option value="2">2</option>
            <option value="6">6</option>
            <option value="12">12</option>
        </select>
        <Post :posts="posts"></Post>
    </div>
</template>

<script>
import Post from '../Post/Post'
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Posts',
    data() {
        return {
            setError: null,
            limit: '',
        }
    },
    components: {
        Post
    },
    computed: {
        ...mapState(['posts'])
    },
    methods: {
        ...mapActions(['FETCH_POSTS'])
    },
    mounted(){
        this.FETCH_POSTS()
            
    }
}
</script>