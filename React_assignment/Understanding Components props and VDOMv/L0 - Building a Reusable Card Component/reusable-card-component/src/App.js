import React from "react";
import Card from "./card";

function App() {
  return (
    <div>
      <Card title="Card one">
        <p>This is first Card with somr introduction.</p>
      </Card>

      <Card title="Card two">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Card>

      <Card title="Card three">
        <img src="https://tse2.mm.bing.net/th?id=OIP.n5P8JThHx6Yn3LuVrxxkWQHaD5&pid=Api&P=0&h=180" alt="Mountain landscape at sunset" />
        <p>This Card containes an image and a decription</p> 
      </Card>
    </div>
  );
}

export default App;
