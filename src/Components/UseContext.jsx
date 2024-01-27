import React from "react";
import { useContext } from "react";
import { theme } from "../App";
import Content from "./Content";

function UseContext(){
    const Data = useContext(theme)
    const ThemeColor={
        backgroundColor:Data? "black":"brown",
       height:'50vh',
       width:'150vh'
    }
    const content='I am Error'
    return(
        <div style={ThemeColor}>
            <Content content={content} />
        </div>
    )
}
 export default UseContext