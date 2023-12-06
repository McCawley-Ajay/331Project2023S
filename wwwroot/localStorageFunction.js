var localStorageFunction = {
    storeData: function (key, data) {
        localStorage.setItem(key, data);
    },
    retrieveData: function (key) {
        return localStorage.getItem(key);
    }
};