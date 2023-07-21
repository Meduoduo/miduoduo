import { createI18n } from 'vue-i18n'

const modules = import.meta.glob('../i18n/temp/*.json', { eager: true, import: 'default' }) as Record<string, { [key: string]: any }>

/**
 * modules: {
 *    'xxx1': { 'cn': { ... }, 'en': { ... } },
 *   'xxijl2': { 'cn': { ... }, 'en': { ... } },
 *  ...
 * }
 * 
 * remove top key and merge all locales into one object like
 * {
 *  'cn': { ... },
 * 'en': { ... },
 * ...
 * }
 */
const messages = Object.keys(modules).reduce((messages, key) => {
    const locales = modules[key]
    Object.keys(locales).forEach(locale => {
        if (!messages[locale]) {
            messages[locale] = {}
        }
        Object.assign(messages[locale], locales[locale])
    })
    return messages
}, {} as Record<string, { [key: string]: any }>)
console.log(messages)

export const i18n = createI18n({
    locale: 'zh',
    messages
})