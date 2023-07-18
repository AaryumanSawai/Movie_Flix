// Copyright 2023 aaryu
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component } from "react";

class NavBar extends Component{
    render(){
        return (
            
                <div style={styles.nav} className="nav">
                    <div style={styles.title} >Title</div>
                    <div style={styles.cartContainer}>
                        <img src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="Cart Icon" style={styles.cartIcon}/> 
                        <span style={styles.cartCount}>0</span>
                    </div>
                </div>  
            

        )
    }
}
export default NavBar;
const styles = {
    nav:{
        // {width:"100%", height:"70px",background:"red", display:"flex",justifyContent: "space-between"}
        height:70,
        background: "#426762",
        display:"flex",
        justifyContent : "space-between",
        alignItems:"center",
        position:"relative"


    },
    cartContainer:{
        position:"relative",
        cursor:"pointer",


    },

    cartIcon : {
        height:48,
        marginRight: 20

    },

    cartCount:{
        background:"orange",
        borderRadius:"50%",
        padding: "4px 8px",
        position:"absolute",
        right:10,
        top:-5,
        fontSize:12
    },


    title: {
        fontSize: 30,
        color: "#fff",
        fontweight:600,
        textTransform : "uppercase",
        marginLeft:20,

    },
}