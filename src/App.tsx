import * as React from "react";

const App = () => {
  // Use state to keep track of the current displayed example component
  const [example, setExample] = React.useState("Counter");

  return (
    <div className="container">
		  <h1>Hello</h1>
    </div>
  );
};

export default App;