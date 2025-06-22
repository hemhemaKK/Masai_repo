
import CardContent from './CardContent';

function Card({ children }) {
  return (
    <div style={{
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px",
      backgroundColor: "#fff"
    }}>
      <CardContent>{children}</CardContent>
    </div>
  );
}

export default Card;
