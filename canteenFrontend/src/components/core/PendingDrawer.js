import React from 'react';
import styles from './styles';
import PendingCards from './PendingCards';
// import axios frim axios;
function PendingDrawer (){
    return(
    <div style={styles.container}>
    
        <PendingCards Name="masala dosa " Quantity="2"/>
        <PendingCards Name="sada dosa" Quantity="3"/>
        <PendingCards Name=" dosa" Quantity="1"/>
        <PendingCards Name="wada" Quantity="5"/>
        <PendingCards Name="sandwich" Quantity="6"/>
        <PendingCards Name="veg soup" Quantity="8"/>
        
    </div>
    );
}

export default PendingDrawer;