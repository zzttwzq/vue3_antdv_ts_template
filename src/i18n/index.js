import { createI18n } from 'vue-i18n'
// import { useStorage } from 'vue3-storage'
import en_us from './en_US.json'
import zh_cn from './zh_CN.json'

// const storage = useStorage()

const messages = {
    'en_us': en_us,
    'zh_cn': zh_cn,
}

export default createI18n({
    legacy: !true,
    globalInjection: true,
    locale: 'en_us',
    messages,
})