<template>
    <div class="w80 mx-auto">
        <NGrid item-responsive x-gap="12" cols="1">
            <NGi>
                <h1 class="text-left">Tokenizer</h1>
                <div>
                    <FadeDom conveyor>
                        <div>
                            {{ $t('views.Tokenizer.303491-0') }}
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
                    {{ $t('views.Tokenizer.303491-1') }}
                </h3>
                <FadeDom conveyor>
                    <div>
                        {{ $t('views.Tokenizer.303491-2') }}
                        {{ $t('views.Tokenizer.303491-3') }}
                    </div>
                </FadeDom>
                <FadeDom conveyor>
                    <div>
                        {{ $t('views.Tokenizer.303491-4') }}<a href="http://tokenizer.miduoduo.org" target="_blank">Tokenizer</a>
                    </div>
                </FadeDom>
                <FadeDom conveyor>
                    <div>
                        {{ $t('views.Tokenizer.303491-5') }}<a href="//github.com/meduoduo/tokenizer" target="_blank">Tokenizer</a>
                    </div>
                </FadeDom>
            </NGi>
            <NGi>
                <NDivider></NDivider>
            </NGi>
        </NGrid>
    </div>
</template>

<script setup lang="ts">
import {
    NGrid,
    NGi,
    NDivider,
    NIcon,
} from 'naive-ui'
import {
    SparklesOutline
} from '@vicons/ionicons5'
import FadeDom from '../component/FadeDom.vue'

</script>

<style scoped>

</style>