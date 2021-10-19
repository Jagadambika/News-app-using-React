import React, { createContext, useEffect, useState} from "react";
import axios from "axios";

export const  NewsContext= createContext();

export const NewsContextProvider = (props) => {
    const [data, setData]=useState();
  

    useEffect(() => {
        axios
        .get(`https://newsapi.org/v2/everything?q=apple&from=2021-10-18&to=2021-10-18&sortBy=popularity&apiKey=2b6bf262b9ca42c5b88d9fc64689444e`
        )
        .then((response) =>setData(response.data))
        .catch((error) =>console.log(error));
    },
    []);
       
    return(
        <NewsContext.Provider value={{data}}>
            {props.children}</NewsContext.Provider>
    );
};
