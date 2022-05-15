class StorageService{
    set(key, value){
        const valueToStore=JSON.stringify(value)
        sessionStorage.setItem(key, valueToStore)
        return valueToStore
    }
    get(key){
        return JSON.parse(sessionStorage.getItem(key))
    }
    remove(key){
        return sessionStorage.removeItem(key)
    }
}

export const storageService = new StorageService();