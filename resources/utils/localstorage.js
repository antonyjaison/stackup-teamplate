// save to localstorage
export const saveToLocalStorage = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
}

// get from localstorage
export const getFromLocalStorage = () => {
    const data = localStorage.getItem('data');
    if (data) {
        return JSON.parse(data);
    }
    return null;
}