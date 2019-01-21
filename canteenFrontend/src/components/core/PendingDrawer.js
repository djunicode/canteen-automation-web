import React from 'react';
import styles from './styles';
import PendingCards from './PendingCards';
function PendingDrawer (){
    return(
    <div style={styles.container}>
        <PendingCards/>
        <PendingCards/>
        <PendingCards/>
        <PendingCards/>
        <PendingCards/>
        <PendingCards/>
        
    </div>
    );
}

export default PendingDrawer;