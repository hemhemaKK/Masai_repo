import React from "react";

const Card = ({title, children, style={}})=>{
    const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '20px',
    margin:"auto",
    width: '400px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };
    

    return (
        <div style={cardStyle}>
            <center>
            <div style={titleStyle}>{title}</div>
             </center>
            <div>{children}</div>
           
        </div>
    )
}

export default Card;