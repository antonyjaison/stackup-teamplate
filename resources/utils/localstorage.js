// save to localstorage
export const saveToLocalStorage = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
}

// get from localstorage
export const getFromLocalStorage = (name) => {
    const data = localStorage.getItem(name);
    if (data) {
        return JSON.parse(data);
    }
    return null;
}