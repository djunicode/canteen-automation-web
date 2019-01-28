const styles = {
    box: {
        backgroundColor: "E9E9E9",
        textAlign: 'center',
        width: 390,
        height: 90,
        borderRadius: 5,
        padding:10,
    },
    indicator: {
        height: "100%",
        width: "3%",
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: "#FFD73F",
        float: "left",
    },
    content: {
        width: "97%",
        height: "100%",
       backgroundColor: "#D0D8DD",
        float: "right",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    order: {
        backgroundColor: "#DDF3FD",
        height: "23%",
        borderTopRightRadius: 5,
    
    },
    item: {
        backgroundColor: "white",
        height: "77%",
        float:'left',
        width:'80%',
        borderRight: "0.5px solid #D0D8DD",
        
    },
    tick:{
        backgroundColor:'white',
        height:'77%',
        width:'19%',
        float:'right',
        borderBottomRightRadius: 5,

    },
    attribute1:{
        marginTop:7,
        marginLeft:15,
        marginRight:7,
        height:'35%',
        backgroundColor:'white',
        width:'70%',
        float:'left',
        
    },
    attribute2:{
        marginTop:7,
        marginLeft:7,
        
        height:'35%',
        backgroundColor:'white',
        width:'20%',
        float:'left',
    },
 

    container: {
        backgroundColor: "E9E9E9",
        
        flexDirection: "column",
    },
     // For Item Card:
    box1: {
        textAlign: "Center",    
        color: "#9E9E9E",
        backgroundColor: "White",
        width: "80%",
        height: 100,
        borderRadius: 12,
        padding:10,
        boxShadow: "12px 12px 16px #C0C0C0",
        margin: "auto",
    },
    icon_trash:{
        padding: 25,
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        float: "right",
        paddingLeft: 35,
        cursor: "grabbing",

    },
    icon_tick:{
        color: "#00C952",
        padding: 8,
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        float: "right",
        cursor: "grabbing",

    },
    
    input:{
        border: "white",
        borderTop: "white",
        borderLeft: "white",
        marginLeft: 20,
        color: "#9E9E9E",
        boxShadow: "0 1px 0px #e9e9e9",

    },
    input2:{
        border: "white",
        borderTop: "white",
        borderLeft: "white",
        width: 50,
        marginLeft: 20,
        color: "#9E9E9E",
        boxShadow: "0 1px 0px #e9e9e9",

    },
    item1: {
        position: "relative",
        backgroundColor: "white",
        height: "77%",
        float:'left',
        width:'80%',
        textAlign: "center",
        maxWidth: "25vw",
    },
    
    nameinput:{
        marginTop:7,
        marginLeft:7,
        
        height:'35%',
        backgroundColor:'white',
        width:'20%',
        float:'left',
    },

    attribute3:{
        fontWeight: "bold",
        marginTop:7,
        marginLeft:45,
        marginRight:7,
        height:'35%',
        backgroundColor:'white',
        width:'70%',
        float:'left',
        
    },
    attribute4:{
        position: "absolute",
        top: "50%",
        transform: "translateY(35%)",
        left: 300,
        fontWeight: "bold",
        height:'35%',
        width:'50%',
        float:'left',
        
    },
};

export default styles;
