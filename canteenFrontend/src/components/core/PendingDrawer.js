import React from 'react';
import styles from './styles';
import OrderCard from './OrderCard';
// import axios frim axios;
class PendingDrawer extends React.Component{
    state={
        food:[
            {Name:'masala dosa', Quantity:'2'},
            {Name:'sada dosa' ,Quantity:'3'},
            {Name:'masala dosa', Quantity:'4'},
            {Name:'sandwhich', Quantity:'4'},
            {Name:'pav bhaji', Quantity:'4'},
            {Name:'vada pav', Quantity:'4'},
        ]
    }



    render(){
        const cards = this.state.food.map(e =>
            <OrderCard Name={e.Name.toUpperCase()} Quantity={e.Quantity} pendingStatus={true} editable={true}/>
        );

        return(
            <div style={styles.container}>
                { cards }
            </div>
        );
        }
    }

    export default PendingDrawer;
