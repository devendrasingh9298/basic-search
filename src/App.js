import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [master, setMaster] = useState(["Newton","Newton School","Node","Mongoose","Angular","Netflix","Apple","School","React","Preact","Meta"]);
  const [data, setData] = useState(master);
 

  useEffect(() => {
    let tempData = master.filter((item) => {
      return item.toLowerCase().includes(name.toLowerCase());
    });
    setData(tempData);
  }, [name]);

  return (
    <div className="App">
      <form>
        <input
          id="search-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <p>Results</p>
          
      {data.map((item) => ( 
         <li>{item}</li> 
       ))}
    </div>
  );
}
