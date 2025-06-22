function Header() {
    return <header style={styles.header}>
            <div style={styles.heading1}>
                <h2>The Right Plan for<br/>
                    <font color="voilet">Your Business</font></h2>
            </div>
            <div style={styles.heading}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga odio rem dignissimos, quis asperiores molestias dolorem consequatur a harum explicabo commodi, esse, vero aliquid reprehenderit tempore nostrum ab hic est!</p>
            </div>
    </header>;
}
const styles={
   header:{
    padding:"10px",
    backgroundColor:"#fff",
    display:"flex",
    gap:"10px",
   },
   heading1:{
    flex: 3,              // 👈 takes 2x more space than right
    marginRight: "20px",
    textAlign:"center"
   },
   heading: {
    flex:10,
  }
}
export default Header;
