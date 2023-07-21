<script setup lang="ts">
import {
    NConfigProvider,
    NLayout,
    NLayoutHeader,
    NLayoutFooter,
    NSpace,
    NMenu,
    NCard,
    NMessageProvider,
    NPageHeader,
} from 'naive-ui'

import {
    h
} from 'vue'
import {
    RouterLink
} from 'vue-router'

const menuOptions = [
    {
        label: () => h(RouterLink, { to: '/' }, 'Home'),
        key: 'index',
    },
]

</script>

<template>
    <NConfigProvider>
        <NSpace vertical>
            <NLayout>
                <NLayoutHeader bordered>
                    <NPageHeader>
                        <NMenu mode="horizontal" :options="menuOptions"></NMenu>
                    </NPageHeader>
                </NLayoutHeader>
                <NLayout has-sider>
                    <NLayout>
                        <NCard style="min-height: 90vh;">
                            <NMessageProvider>
                                <router-view></router-view>
                            </NMessageProvider>
                        </NCard>
                    </NLayout>
                </NLayout>
                <NLayoutFooter bordered>
                    © 2023 Kasumi Project. Made with ❤️ by Miduoduo community, Inc.
                </NLayoutFooter>
            </NLayout>
        </NSpace>
    </NConfigProvider>
</template>

<style scoped></style>
