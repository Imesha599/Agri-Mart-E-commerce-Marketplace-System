import React from 'react';
import Processing from '../../components/Delivery Portal/Processing';
import Packed from '../../components/Delivery Portal/Packed';
import Premise from '../../components/Delivery Portal/Onpre';
import  Dispatched from '../../components/Delivery Portal/Dispatched';
import OnTheway from '../../components/Delivery Portal/Ontheway';
import  Delivered from '../../components/Delivery Portal/Delivered';
import Settings from '../../components/Delivery Portal/Settings';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import Dashboard from '../../components/Delivery Portal/Dashboard';
import './Delivery.css';


function Delivery(){
    return(
    <div>  
    <NavBar/>
    <SideBar/>
     <section class="section1"><Dashboard/></section> 
    <section class="section2"><Processing/> </section>
    <section class="section2"><Packed/></section>
    <section class="section2"> <Premise/></section>
    <section class="section2"> <Dispatched/></section>
    <section class="section2"> <OnTheway/></section>
    <section class="section2"><Delivered/></section>
    <section class="section2"><Settings/></section>
    </div> 
   
    );
}

export default Delivery;