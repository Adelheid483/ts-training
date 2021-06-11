import React from "react";
import { Card } from "./components/Card";
import { CardVariant } from "./interfaces";

const App = () => {
  return (
    <div>
        <Card 
          width='200px' 
          height='200px' 
          variant={CardVariant.outlined} 
          onClick={(num) => console.log('Click', num)}
        >
          <button>Btn</button>
        </Card>
    </div>
  );
}; 

export default App;
