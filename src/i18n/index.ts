import { createI18n } from 'vue-i18n'
import storage from '@/utils/storage'
import constrant from '@/config/constrant'

import en_us from './en_US.json'
import zh_cn from './zh_CN.json'

const messages = {
    'en_us': en_us,
    'zh_cn': zh_cn,
}

export default createI18n({
    legacy: !true,
    globalInjection: true,
    locale: 'zh_cn' || storage.get(constrant.LOCAL),
    messages,
})