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
import styled from "styled-components";
import navbar from "./nav.module.css";

const Title = styled.div`
font-size: 30;
color: #fff;
font-weight:600;
text-transform : uppercase;
margin-left:20;
padding-left:2%;

`;

const CartIcon = styled.img`
height:48px;
margin-right: 20px;
`;

const CartCount = styled.span`
background:${(props)=>props.color};
border-radius:50%;
padding: 4px 8px;
position:absolute;
right:10px;
top:-5px;
fontSize:12;

`;

const CartContainer = styled.div`
position:relative;
cursor:pointer;

`;

class NavBar extends Component{
    render(){
        const{count} = this.props;
        return (
            
                <div className={navbar.nav}>
                    <Title> Movie-App </Title>
                    <CartContainer>
                        <CartIcon  src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="Cart Icon" /> 
                        <CartCount color="yellow">{count}</CartCount>
                    </CartContainer>
                </div>  
            

        )
    }
}
export default NavBar;
const styles = {
   
    cartContainer:{
       


    },
    cartCount:{
       
    },


    title: {
       
    },
}