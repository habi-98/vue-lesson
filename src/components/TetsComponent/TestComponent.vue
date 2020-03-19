<template>
    <div>
        <div v-for="service in services" :key="service.id + 'active'">
            <div v-if="service.active">
                    {{ service.title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestComponent',
    props: ['services']
}
</script>