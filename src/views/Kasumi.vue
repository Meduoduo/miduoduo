<template>
    <div class="w80 mx-auto my5">
        <NGrid :x-gap="12" :cols="1">
            <NGi>
                <h1 class="text-left">Kasumi</h1>
                <div>
                    <FadeDom conveyor>
                        <div>
                            {{ $t('views.Kasumi.429841-0') }}
                        </div>
                    </FadeDom>
                    <FadeDom conveyor>
                        <div>
                            {{ $t('views.Kasumi.429841-1') }}
                        </div>
                    </FadeDom>
                </div>
                <NDivider></NDivider>
            </NGi>
            <NGi>
                <video-player class="mx-auto w100 kasumi-video" :src="getAssetsFile('kasumi.m4v')"
                    controls
                    autoplay="play"
                    preload="auto"
                    fluid
                />
            </NGi>
            <NGi>
                <NDivider></NDivider>
                <NLayout>
                    <NLayoutHeader>
                        <h3>
                            <NIcon class="mr5" :size="20">
                                <SparklesOutline></SparklesOutline>
                            </NIcon>
                            {{ $t('views.Kasumi.429841-2') }}
                        </h3>
                        <NDivider></NDivider>
                        <NText>
                            <FadeDom conveyor>
                                <div>
                                    {{ $t('views.Kasumi.429841-3') }}
                                </div>
                            </FadeDom>
                            <FadeDom conveyor>
                                <div>
                                    {{ $t('views.Kasumi.429841-4') }}
                                </div>
                            </FadeDom>
                            <FadeDom conveyor>
                                <div>
                                    {{ $t('views.Kasumi.429841-5') }}
                                </div>
                            </FadeDom>
                        </NText>
                    </NLayoutHeader>
                    <NDivider></NDivider>
                    <NLayoutContent>
                        <h4>
                            <NIcon class="mr5">
                                <GitMergeOutline></GitMergeOutline>
                            </NIcon>
                            {{ $t('views.Kasumi.429841-6') }}
                        </h4>
                        <NText>
                            {{ $t('views.Kasumi.429841-7') }}
                            👉🏻 <a href="#" @click="toWebSite('https://github.com/meduoduo/kasumi')">Kasumi</a> <br>
                            {{ $t('views.Kasumi.429841-8') }}
                        </NText>
                        <NGrid class="mt5" gutter="12" :cols="5">
                            <NGi v-for="contributor in contributors" 
                                :key="contributor.name" 
                                @click="toWebSite(contributor.github)"
                            >
                            <div class="clickable text-center">
                                <NAvatar class="mx-auto" :src="getAssetsFile(contributor.avatar)" round :size="60" />
                                <div>
                                    {{ contributor.name }}
                                </div>
                                <FadeDom conveyor>
                                    <div>
                                        {{ contributor.description }}
                                    </div>
                                </FadeDom>
                            </div>
                            </NGi>
                        </NGrid>
                        <NDivider></NDivider>
                        <h4>
                            <NIcon class="mr5">
                                <ContractOutline></ContractOutline>
                            </NIcon>
                            {{ $t('views.Kasumi.429841-9') }}
                        </h4>
                        <NText>
                            {{ $t('views.Kasumi.429841-10') }}
                        </NText>
                        <NGrid class="mt5" gutter="12" :cols="5">
                            <NGi v-for="communityMethod in communityMethods" 
                                :key="communityMethod.name" 
                                @click="toWebSite(communityMethod.url)"
                            >
                            <FadeDom conveyor>
                                <div class="clickable text-center">
                                    <NAvatar class="mx-auto" :src="getAssetsFile(communityMethod.avatar)" round :size="60" />
                                    <div>
                                        {{ communityMethod.name }}
                                    </div>
                                    <div>
                                        {{ communityMethod.description }}
                                    </div>
                                </div>
                            </FadeDom>
                            </NGi>
                        </NGrid>
                    </NLayoutContent>
                </NLayout>
            </NGi>
        </NGrid>
    </div>
</template>

<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import { getAssetsFile } from '../utils/index'
import {
    NGrid, NGi, NDivider, NIcon, NAvatar, NLayout, NLayoutHeader, NLayoutContent, NText
} from 'naive-ui'
import { ContractOutline, GitMergeOutline, SparklesOutline } from '@vicons/ionicons5'
import { useI18n } from 'vue-i18n'
import FadeDom from '../component/FadeDom.vue'

const { t: $t } = useI18n()

const toWebSite = (url: string) => {
    window.open(url, '_blank');
}

const contributors = [{
    name: 'Yeuoly',
    github: 'https://github.com/Yeuoly',
    avatar: 'yeuoly.png',
    description: 'PM/FullStack',
}, {
    name: 'Qiumiao',
    github: 'https://github.com/kingo233',
    avatar: 'qiumiao.jpeg',
    description: 'PM/AI-Agent',
}, {
    name: 'hikki',
    github: 'https://github.com/guest-hikki',
    avatar: 'hikki.png',
    description: 'Seucrity',
}, {
    name: 'M3thy1',
    github: 'https://github.com/M3thy1',
    avatar: 'm3thy1.jpeg',
    description: 'Seucrity',
}, {
    name: 'SAKUrie',
    github: 'https://github.com/SAKUrie',
    avatar: 'sakurie.jpeg',
    description: 'Publicize/AI-NLP',
}]

const communityMethods = [{
    name: $t('views.Kasumi.429841-11'),
    avatar: 'qq.jpg',
    url: 'https://qm.qq.com/cgi-bin/qm/qr?k=eWjnpOPMWQdwWv6-h2Wn_sXnM1hvSDR2&jump_from=webapi&authKey=P6CP5Wggn5TvrMkwQdHrW/7k74CAa3JlGOdXhtSMvEv8vd0MQPqSer4zKndecIoz',
    description: '763205407',
}, {
    name: 'Github',
    avatar: 'github.png',
    url: 'https://github.com/meduoduo',
    description: $t('views.Kasumi.429841-12'),
}, {
    name: 'Bilibili',
    avatar: 'bili.jpeg',
    url: 'https://space.bilibili.com/40691233',
    description: 'Bili~Bili~',
}, {
    name: 'Twitter',
    avatar: 'twitter.jpeg',
    url: 'https://twitter.com/yeuoly1',
    description: 'Twitter',
}, {
    name: 'Telegram',
    avatar: 'telegram.jpeg',
    url: 'https://t.me/+jtOozzJDDv81Yjdl',
    description: 'Telegram',
}]

</script>

<style>
.kasumi-video {
    border-radius: 12px;
    overflow: hidden;
}

.kasumi-video video {
    object-fit: fill;
}
</style>