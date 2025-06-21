import './App.css';
import React, {useState} from 'react';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderpage = ()=>{
    if(activePage === 'Home')
       return <div style={styles.home}>Welcome to Home</div>
    else if(activePage === 'About')
       return <div style={styles.about}>About us</div>
    else if(activePage === 'Contact')
       return <div style={styles.contact}>Contact US</div>
  }

  return (
    <div>
      <nav style={styles.navbar}>
        <button onClick={()=>setActivePage('Home')} style={styles.link}>Home</button>
        <button onClick={()=>setActivePage('About')} style={styles.link}>About</button>
        <button onClick={()=>setActivePage('Contact')} style={styles.link}>Contact</button>
      </nav>
      <main style={styles.main}>
        {renderpage()}
      </main>
    </div>
  );
}

const styles = {
  navbar:{
    margin:"auto",
    backgroundColor:"#999",
    width:"100%",
    padding: "1rem",
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    borderRadius: "10px",
  },
  link:{
    color:"black",
    cursor:"pointer",
    fontSize:"1rem",
    fontWeight:"bold",
    border:"none",
    padding:"10px",
  },
  main:{
    padding:"2rem",
    textAlign:"center",
  },
  home:{
    backgroundColor: "#fce4ec",
    padding: "2rem",
    borderRadius: "10px",
    fontWeight:"bold",
  },
  about: {
    backgroundColor: "#e3f2fd",
    padding: "2rem",
    borderRadius: "10px",
    fontWeight:"bold",
  },
  contact: {
    backgroundColor: "#e8f5e0",
    padding: "2rem",
    borderRadius: "10px",
    fontWeight:"bold",
  },
}

export default App;
