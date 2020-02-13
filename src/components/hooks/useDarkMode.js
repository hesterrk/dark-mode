// import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

import { useEffect } from 'react';

//Change to use with useLocalStorage
//Import localstorage hook into here 


export const useDarkMode = (key, initialValue) => {

//our key is named: 'dark': 

    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
 

    if(darkMode === true) {
        document.querySelector('body').classList.add("dark-mode");
    } else {
        document.querySelector('body').classList.remove("dark-mode")
    }
   

 }, [darkMode])
    
    return [darkMode, setDarkMode]
    

};