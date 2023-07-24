<template>
    <div class="k-v-home w80 mx-auto my5">
        <NGrid :x-gap="12" :cols="1">
            <NGi>
                <NGrid :x-gap="12" :cols="6" item-responsive>
                    <NGi span="3 1000:3 1200:2 1600:1">
                        <NImage :src="getAssetsFile('miduoduo.jpeg')" height="300" />
                    </NGi>
                    <NGi span="3 1000:3 1200:4 1600:5">
                        <FadeDom :conveyor="true" class="k-v-home-slogan">
                            <div>
                                <div style="font-size: 42px;">Miduoduo.inc</div>
                                <div>
                                    <h4>{{ $t('views.Home.303491-0') }}</h4>
                                </div>
                            </div>
                        </FadeDom>
                    </NGi>
                </NGrid>
            </NGi>
            <NGi>
                <NDivider />
            </NGi>
            <NGi>
                <NIcon class="text-22">
                    <BalloonOutline size="32" />
                </NIcon>
                <h2 class="inline-block ml5" id="about">
                    {{ $t('views.Home.567053-0') }}
                </h2>
                <NText class="ml2">
                    {{ $t('views.Home.567053-1') }}
                </NText>
                <div class="mx5">
                    <ul>
                        <li>
                            {{ $t('views.Home.567053-2') }}
                        </li>
                        <li>
                            {{ $t('views.Home.567053-3') }} <br>
                        </li>
                    </ul>
                </div>
            </NGi>
            <NGi>
                <NDivider />
            </NGi>
            <NGi>
                <NIcon class="text-22">
                    <SparklesOutline size="32" />
                </NIcon>
                <h2 class="inline-block ml5" id="products">
                    {{ $t('views.Home.567053-4') }}
                </h2>
                <NText class="ml2">
                    {{ $t('views.Home.567053-5') }}
                </NText>
                <NDivider />
                <NGrid x-gap="12" :cols="2">
                    <NGi v-for="production in productions" :key="production.name" class="mb5 clickable" @click="toProductUrl(production.name)">
                        <NGrid :x-gap="12" :cols="3">
                            <NGi span="1" class="mt5 mx-auto">
                                <NAvatar :src="production.img" round :size="120"></NAvatar>
                            </NGi>
                            <NGi span="2">
                                <FadeDom :conveyor="true">
                                    <div class="text-16">
                                        <h3>{{ production.name }}</h3>
                                        <p>{{ production.desc }}</p>
                                    </div>
                                </FadeDom>
                            </NGi>
                        </NGrid>
                    </NGi>
                </NGrid>
            </NGi>
            <NGi>
                <NDivider />
            </NGi>
            <NGi>
                <NIcon class="text-22">
                    <PeopleCircleOutline size="32" />
                </NIcon>
                <h2 class="inline-block ml5" id="members">
                    {{ $t('views.Home.567053-6') }}
                </h2>
                <NText class="ml2">
                    {{ $t('views.Home.567053-7') }}
                </NText>
                <NDivider />
                <NGrid class="mt5" gutter="12" :cols="5">
                    <NGi v-for="member in members" 
                        :key="member.name" 
                        @click="toWebSite(member.github)"
                    >
                    <FadeDom conveyor>
                        <div class="clickable text-center">
                            <NAvatar class="mx-auto" :src="member.avatar" round :size="60" />
                            <div>
                                {{ member.name }}
                            </div>
                            <div>
                                {{ member.description }}
                            </div>
                            <div>
                                {{ member.date }}
                            </div>
                        </div>
                    </FadeDom>
                    </NGi>
                </NGrid>
                <NDivider />
            </NGi>
            <NGi>
                <NIcon class="text-22">
                    <ContractOutline size="32" />
                </NIcon>
                <h2 class="inline-block ml5" id="contact">
                    {{ $t('views.Home.567053-8') }}
                </h2>
                <NText class="ml2">
                    {{ $t('views.Home.567053-9') }}
                </NText>
                <NDivider />
                <NGrid class="mt5" gutter="12" :cols="5">
                    <NGi>
                        <NIcon>
                            <MailOpenOutline size="22" />
                        </NIcon>
                        Email: <a href="mailto:admin@srmxy.cn">Yeuoly</a>
                    </NGi>
                    <NGi>
                        <NIcon>
                            <GitMergeOutline size="22" />
                        </NIcon>
                        Github: <a href="https://github.com/meduoduo">Meduoduo</a>
                    </NGi>
                    <NGi>
                        <NIcon>
                            <TelescopeOutline size="22" />
                        </NIcon>
                        Telegram: <a href="https://t.me/+PUoTDKToZ70zMmQ1">Miduoduo</a>
                    </NGi>
                </NGrid>
                <NDivider />
            </NGi>
        </NGrid>
    </div>
</template>

<script setup lang="ts">
import {
    NGrid, NGi, NImage, NDivider, NIcon, NAvatar
} from 'naive-ui'
import { getAssetsFile } from '../utils/index'
import { SparklesOutline, PeopleCircleOutline, ContractOutline, GitMergeOutline, MailOpenOutline, TelescopeOutline, BalloonOutline } from '@vicons/ionicons5'
import FadeDom from '../component/FadeDom.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter();

const { t: $t } = useI18n()

const toWebSite = (url: string) => {
    window.open(url)
}

const toProductUrl = (name: string) => {
    router.push('/' + name)
}

const productions = ref([{
    name: 'Kasumi',
    desc: $t('views.Home.567053-10'),
    img: getAssetsFile('kasumi.jpeg')
}, {
    name: 'Irina',
    desc: $t('views.Home.567053-11'),
    img: getAssetsFile('irina.png')
}, {
    name: 'Tokenizer',
    desc: $t('views.Home.567053-12'),
    img: getAssetsFile('tokenizer.png')
}])

const members = ref([{
    name: 'Yeuoly',
    github: 'https://github.com/Yeuoly',
    avatar: getAssetsFile('yeuoly.png'),
    description: 'Core/Full Stack/Startup',
    date: '2022-02-01',
}, {
    name: 'Qiumiao',
    github: 'https://github.com/kingo233',
    avatar: getAssetsFile('qiumiao.jpeg'),
    description: 'Core/Backend/AI-CV/Startup',
    date: '2022-02-01',
}, {
    name: 'hikki',
    github: 'https://github.com/guest-hikki',
    avatar: getAssetsFile('hikki.png'),
    description: 'Pro/Seucrity',
    date: '2023-07-03',
}, {
    name: 'M3thy1',
    github: 'https://github.com/M3thy1',
    avatar: getAssetsFile('m3thy1.jpeg'),
    description: 'Pro/Seucrity',
    date: '2023-05-13',
}, {
    name: 'SAKUrie',
    github: 'https://github.com/SAKUrie',
    avatar: getAssetsFile('sakurie.jpeg'),
    description: 'Pro/AI-NLP',
    date: '2023-07-03',
}])

</script>

<style scoped>
.k-v-home-slogan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    font-weight: 500;
    color: #000;
    text-align: center;
}
</style>