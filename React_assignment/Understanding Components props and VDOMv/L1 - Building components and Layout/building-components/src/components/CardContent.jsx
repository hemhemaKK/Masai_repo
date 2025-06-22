import styled from "styled-components";

function CardContent({ children }) {
  return <div>
    <hr/>
    <div style={styles.card}>
    <div style={styles.Tilte}>
        <h1>Starter</h1>
    </div>
    <div style={styles.Content}>
        <ul>
            <li style={styles.li}>✅ 1 loren ipsum</li>
            <li style={styles.li}>✅ Lorem, isac</li>
            <li style={styles.li}>✅ Monthly Updates</li>
        </ul>
    </div>
    <div style={styles.Update}>
        <h1>Free</h1>
    </div>
    <div>
       <StyledButton>Get Started</StyledButton>
    </div>
  </div>
  <hr/>
  <div style={styles.card}>
    <div style={styles.Tilte}>
        <h1>Lorem Plus</h1>
    </div>
    <div style={styles.Content}>
        <ul>
            <li style={styles.li}>✅ 1 loren ipsum</li>
            <li style={styles.li}>✅ Lorem, isac</li>
            <li style={styles.li}>✅ Monthly Updates</li>
        </ul>
    </div>
    <div style={styles.Update}>
        <h1>$32.00</h1>
    </div>
    <div>
               <StyledButton>Get Started</StyledButton>
    </div>
  </div>
   <hr/>
  <div style={styles.card}>
    <div style={styles.Tilte}>
        <h1>Lorem Pro</h1>
    </div>
    <div style={styles.Content}>
        <ul>
            <li style={styles.li}>✅ 1 loren ipsum</li>
            <li style={styles.li}>✅ Lorem, isac</li>
            <li style={styles.li}>✅ Monthly Updates</li>
        </ul>
    </div>
    <div style={styles.Update}>
        <h1>$50.00</h1>
    </div>
    <div >
       <StyledButton>Get Started</StyledButton>
    </div>
  </div>
  </div>
}

const styles={
    card:{
       padding:"50px",
       display:"flex",
       justifyContent: "space-between"

    },
    li:{
        listStyleType: "none",
    },
}

const StyledButton = styled.button`
  border: none;
  color: rgb(172, 97, 252);;
  font-size: 14px;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  backgroundColor: #555;
  border-radius:10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(172, 97, 252);
    color:white;
  }
`;

export default CardContent;
