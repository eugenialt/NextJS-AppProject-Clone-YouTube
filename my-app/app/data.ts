export const API_KEY = 'AIzaSyDzPIh3H9uKH6bSq7eV-2er6pLlnIZRmIo'

export const value_converter = (value: string | number | undefined) => {
    if (value === undefined) {
        return undefined;
    }
    
    if (typeof value === 'string') {
        value = parseInt(value);
    }
    
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 10000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
};