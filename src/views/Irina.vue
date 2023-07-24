<template>
    <div class="w80 mx-auto">
        <NGrid item-responsive x-gap="12" cols="1">
            <NGi>
                <h1 class="text-left">Irina</h1>
                <div>
                    <FadeDom conveyor>
                        <div>
                            {{ $t('views.Irina.645625-0') }}
                        </div>
                    </FadeDom>
                </div>
            </NGi>
            <NGi>
                <NDivider></NDivider>
            </NGi>
            <NGi>
                <h3>
                    <NIcon class="mr5" :size="20">
                        <SparklesOutline></SparklesOutline>
                    </NIcon>
                    {{ $t('views.Irina.645625-1') }}
                </h3>
                <FadeDom conveyor>
                    <div>
                        {{ $t('views.Irina.645625-2') }}
                    </div>
                </FadeDom>
                <FadeDom conveyor>
                    <div>
                        {{ $t('views.Irina.645625-3') }}
                    </div>
                </FadeDom>
                <FadeDom conveyor>
                    <div>
                        {{ $t('views.Irina.645625-4') }}
                        <a href="/assets/irina.pdf" target="_blank">{{ $t('views.Irina.645625-5') }}</a>
                    </div>
                </FadeDom>
                <FadeDom conveyor>
                    <div>
                        {{ $t('views.Irina.645625-6') }}
                        <a href="http://iotshield.srmxy.cn" target="_blank">IrinaGame</a>
                    </div>
                </FadeDom>
            </NGi>
            <NGi>
                <NDivider></NDivider>
            </NGi>
            <NGi>
                <h3>
                    <NIcon class="mr5" :size="20">
                        <BalloonOutline></BalloonOutline>
                    </NIcon>
                    {{ $t('views.Irina.645625-7') }}
                </h3>
                <NGrid x-gap="12" :cols="1">
                    <NGi>
                        <NText>
                            {{ $t('views.Irina.645625-8') }}
                        </NText>
                        <NDivider></NDivider>
                        <NImage :src="getAssetsFile('irina-1.png')" alt="irina-1" class="w100 br12" />
                        <NDivider></NDivider>
                    </NGi>
                    <NGi>
                        <NText>
                            {{ $t('views.Irina.645625-9') }}
                        </NText>
                        <NDivider></NDivider>
                        <NImage :src="getAssetsFile('irina-2.png')" alt="irina-2" class="w100 br12" />
                        <NDivider></NDivider>
                    </NGi>
                    <NGi>
                        <NText>
                            {{ $t('views.Irina.645625-10') }}
                        </NText>
                        <NDivider></NDivider>
                        <NImage :src="getAssetsFile('irina-3.png')" alt="irina-3" class="w100 br12" />
                        <NDivider></NDivider>
                    </NGi>
                    <NGi>
                        <NText>
                            {{ $t('views.Irina.645625-11') }}
                        </NText>
                        <NDivider></NDivider>
                        <NImage :src="getAssetsFile('irina-4.png')" alt="irina-4" class="w100 br12" />
                    </NGi>
                </NGrid>
            </NGi>
        </NGrid>
    </div>
</template>

<script setup lang="ts">
import {
    NGrid, NGi, NDivider, NIcon, NImage
} from 'naive-ui'
import {
    SparklesOutline, BalloonOutline
} from '@vicons/ionicons5'
import FadeDom from '../component/FadeDom.vue';
import { getAssetsFile } from '../utils/index'

</script>

<style scoped>

</style>