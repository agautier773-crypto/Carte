

function localStorageService(){
    return {
        save: (key, value) => {
            const exist = JSON.parse(localStorage.getItem(key)) || []
            exist.push(value);
            localStorage.setItem(key, JSON.stringify(exist));
        },
        get: (key) => {
            return JSON.parse(localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)): [];
        },
        remove: (key) => {
            localStorage.removeItem(key);
        },
        removeOne: (key, index) => {
            const d = JSON.parse(localStorage.getItem(key)) || [];
            const newTable = d.filter((_, i) => i !== index);
            localStorage.setItem(key, JSON.stringify(newTable));
            return newTable;
        }

    }
}

export default localStorageService