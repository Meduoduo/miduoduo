<template>
    <NLayoutContent>
        <RouterView v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
                <component :is="Component" />
            </Transition>
        </RouterView>
    </NLayoutContent>
</template>

<script setup lang="ts">
import { NLayoutContent } from 'naive-ui'
import { Transition } from 'vue'
</script>

<style scoped></style>