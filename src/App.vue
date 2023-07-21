<script setup lang="ts">
import {
    NConfigProvider,
    NLayout,
    NSpace,
    NMessageProvider,
} from 'naive-ui'
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'
import Body from './layout/Body.vue';
</script>

<template>
    <NConfigProvider>
        <NMessageProvider>
            <NSpace vertical>
                <NLayout>
                    <Header />
                    <Body />
                    <Footer />
                </NLayout>
            </NSpace>
        </NMessageProvider>
    </NConfigProvider>
</template>

<style scoped></style>
