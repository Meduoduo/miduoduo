<template>
    <div class="w100 mx-auto my5">
        <NGrid :x-gap="12" :cols="1">
            <NGi>
                <video-player class="mx-auto w80" :src="getAssetsFile('kasumi.mp4')"
                    controls
                    autoplay
                    :Height="videoHeight"
                    style="display: block;"
                />
            </NGi>
        </NGrid>
    </div>
</template>

<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import { getAssetsFile } from '../utils/index'
import { onMounted, ref, computed, onBeforeUnmount } from 'vue';

const pageWidth = ref(0);

const videoHeight = computed(() => {
    return pageWidth.value * 0.5725;
})

const onResize = () => {
    const width = document.body.clientWidth;
    pageWidth.value = width;
}

onMounted(() => {
    // get current page witdh
    const width = document.body.clientWidth;
    pageWidth.value = width;
    console.log(pageWidth.value)

    window.addEventListener('resize', onResize);
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
})

</script>

<style scoped>

</style>