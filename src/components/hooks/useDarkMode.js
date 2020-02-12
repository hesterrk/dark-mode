import React from 'react';


//Change to use with useLocalStorage
//Import localstorage hook into here 


export const useDarkMode = (e) => {

    e.preventDefault();
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = e => {
        setDarkMode(!darkMode)
    
    }
    
    return [darkMode, toggleDarkMode]
    





}