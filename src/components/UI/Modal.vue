<template>
    <div v-if="show" class="backdrop">
        <div class="modal">
            <header class="modal-window__header">
                <h1>{{ title }}</h1>
            </header>
            <main class="content">
                <slot/>
            </main>
            <footer class="modal-window__footer">
                <button @click="isOpen"  class="footer-btn-ok footer-btn">Ok</button>
                <button @click="isOpen"  class="footer-btn-close footer-btn">Close</button>
            </footer>
        </div>
</div>
</template>

<script>
export default {
    name: 'Modal',
    props: ['title', 'show', 'isOpen']
}
</script>3