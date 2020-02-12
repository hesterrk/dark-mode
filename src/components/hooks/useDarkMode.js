// import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

import { useEffect } from 'react';

//Change to use with useLocalStorage
//Import localstorage hook into here 


export const useDarkMode = () => {

//our key is named: 'darkMode', initialValue is false

    const [darkMode, setDarkMode] = useLocalStorage('dark', 'initialValue');

    useEffect(() => {
 

    if(darkMode === true) {
        document.querySelector('body').classList.add("dark-mode");
    } else {
        document.querySelector('body').classList.remove("dark-mode")
    }
   

 }, [darkMode])
    
    return [darkMode, setDarkMode]
    

};