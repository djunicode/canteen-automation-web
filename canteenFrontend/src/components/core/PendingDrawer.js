import React from 'react';
import styles from './styles';
import PendingCards from './PendingCards';
// import axios frim axios;
function PendingDrawer (){
    return(
    <div style={styles.container}>
    
        <PendingCards Name="masala dosa " Quantity="2" Color="#FFD73F"/>
        <PendingCards Name="sada dosa" Quantity="3" Color="#FFD73F"/>
        <PendingCards Name=" dosa" Quantity="1" Color="#FFD73F"/>
        <PendingCards Name="wada" Quantity="5" Color="#FFD73F"/>
        <PendingCards Name="sandwich" Quantity="6" Color="#FFD73F"/>
        <PendingCards Name="veg soup" Quantity="8" Color="#FFD73F"/>
        
    </div>
    );
}

export default PendingDrawer;