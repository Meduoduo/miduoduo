<template>
    <div class="m-v-business w80 mx-auto">
        <NGrid :x-gap="12" :cols="1">
            <NGi>
                <h1 class="text-left">商务合作</h1>
                <div>
                    <FadeDom conveyor>
                        <div>
                            如果您想要与我们合作，请联系我们。
                        </div>
                    </FadeDom>
                </div>
            </NGi>
            <NGi>
                <NDivider></NDivider>
            </NGi>
            <NGi>
                <h3>
                    <NIcon class="mr5">
                        <MailOpenOutline></MailOpenOutline>
                    </NIcon>
                    邮箱联系
                </h3>
                <FadeDom conveyor>
                    <div>
                        您可以通过我们的商务邮箱 <a href="mailto:business@miduoduo.org"> business@miduoduo.org </a> 联系我们。
                    </div>
                </FadeDom>
            </NGi>
            <NGi>
                <NDivider></NDivider>
            </NGi>
            <NGi>
                <h3>
                    <NIcon class="mr5">
                        <BrowsersOutline></BrowsersOutline>
                    </NIcon>
                    填写在线表单
                </h3>
                <FadeDom conveyor>
                    <div>
                        您可以填写一个简单的在线表单来告诉Miduoduo您的联系方式和合作意向。
                    </div>
                </FadeDom>
                <NDivider></NDivider>
                <div class="pb5">
                    <iframe src="https://miduoduo.feishu.cn/share/base/form/shrcnLtN9FtfwwCrGhP8MJOMMgr" frameborder="0" style="width: 100%; height: 1000px;"></iframe>
                </div>
            </NGi>
        </NGrid>
    </div>
</template>

<script setup lang="ts">
import {
    NGrid, NGi, NIcon, NDivider
} from 'naive-ui'
import { 
    MailOpenOutline, BrowsersOutline
} from '@vicons/ionicons5'
</script>

<style scoped>

</style>