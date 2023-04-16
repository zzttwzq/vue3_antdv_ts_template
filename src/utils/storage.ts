const Storage = {
    /**
     * 存储数据
     * @param key 存储的key
     * @param data 存储的数据
     */
    set(key: string, data: any) {
        window.localStorage.setItem(key, JSON.stringify(data));
    },
    /**
     * 获取存储
     * @param key 存储的key
     */
    get(key: string) {
        let d = window.localStorage.getItem(key);
        if (d != null) {
            d = JSON.parse(d);
            return d;
        }
        return null;
    },
    /**
     * 移除存储
     * @param key 存储的key
     */
    remove(key: string) {
        window.localStorage.removeItem(key);
    },
    /**
     * 清除内容
     */
    clear() {
        window.localStorage.clear();
    },
}

export default Storage;