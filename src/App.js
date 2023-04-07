import React from "react";
import axios from "axios";

function App() {

  const[data, setData] = React.useState("");
  const[id, setId] = React.useState(0);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(res => setData(res.data[id].name))
  },[data, id])

  return (
    <div className="App">
      <h1>{data}</h1>
      <p>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
      </p>
      
    </div>
  );
}

export default App;
