<template>
    <NLayoutHeader bordered class="m-l-header">
        <NPageHeader>
            <template #title>
                <NMenu mode="horizontal" :options="menu"></NMenu>
            </template>
            <template #extra>
                <NIcon class="mr5 text-25">
                    <BatteryChargingOutline size="32" :title="$t('layout.Header.524169-0')" />
                </NIcon>
            </template>
        </NPageHeader>
    </NLayoutHeader>
</template>

<script setup lang="ts">
import { NLayoutHeader, NMenu, MenuOption, NPageHeader, NIcon } from 'naive-ui'
import { h } from 'vue'
import { useI18n } from 'vue-i18n'
import { getAssetsFile } from '../utils/index'
import { BatteryChargingOutline } from '@vicons/ionicons5'
const { t: $t } = useI18n()

const menu: MenuOption[] = [
    {
        label: () => h('img', {
            src: getAssetsFile('miduoduo.jpeg'),
            alt: 'logo',
            style: 'height: 80px;'
        }),
        key: 'logo',
    },
    {
        label: $t('layout.Header.536931-0'),
        key: 'about',
        onClick: () => {
            console.log('about')
        }
    },
    {
        label: $t('layout.Header.524169-1'),
        key: 'product',
        onClick: () => {
            console.log('product')
        }
    },
    {
        label: $t('layout.Header.524169-2'),
        key: 'us',
        onClick: () => {
            console.log('us')
        }
    },
    {
        label: $t('layout.Header.524169-3'),
        key: 'contact',
        onClick: () => {
            console.log('contact')
        }
    },
    {
        label: $t('layout.Header.524169-4'),
        key: 'business',
        onClick: () => {
            console.log('business')
        }
    }
]

</script>

<style scoped>
.m-l-header {
    padding-top: 15px;
    padding-bottom: 10px;
}
</style>