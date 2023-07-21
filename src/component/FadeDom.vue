<template>
    <Transition @before-enter="beforeEnter" @enter="enter" appear>
        <!-- all slot -->
        <slot />
    </Transition>
</template>
  
<script setup lang="ts">
import { Transition } from 'vue';
import { requestIdleCallback } from '../utils';

const props = defineProps({
    conveyor: {
        type: Boolean,
        default: () => false,
    },
});

const translatePixel = 25;

const beforeEnter = (el: Element) => {
    const htmlElement = el as HTMLElement;
    htmlElement.style.transform = `translate(-${translatePixel}px, -${translatePixel}px)`;
};

const enter = (el: Element, done: () => void) => {
    const htmlElement = el as HTMLElement;

    const animationDuration = 500;
    let startTime = 0;

    const moveAnimation = (currentTime: number) => {
        const progress = (currentTime - startTime) / animationDuration;

        // currentX and currentY should be translated from -translatePixel to 0
        const currentX = easeInOut(progress) * translatePixel - translatePixel;
        const currentY = easeInOut(progress) * translatePixel - translatePixel;

        htmlElement.style.transform = `translate(${currentX}px, ${currentY}px)`;

        if (progress < 1) {
            requestAnimationFrame(moveAnimation);
        } else {
            done();
        }
    };

    const start = () => {
        startTime = performance.now();
        requestAnimationFrame(moveAnimation);
    }

    if (props.conveyor) {
        requestIdleCallback(start, 130);
    } else {
        start();
    }
};

const easeInOut = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
</script>
  