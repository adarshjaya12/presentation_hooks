import * as React from 'react';

const App: React.FC = () => {
    const [name,setName] = React.useState("Adarsh");
    const [lastName,setlastName] = React.useState("Jayakumar");
    function nameChangeHandler(e){
        setName(e.target.value);
    }

    function lastNameChangeHandler(e){
        setlastName(e.target.value);
    }
    
  return (
    <section>
        <input type="text" value={name} onChange={nameChangeHandler}></input>
        <p>{name}</p>
        <input type="text" value={lastName} onChange={lastNameChangeHandler}></input>
        <p>{lastName}</p>
    </section>
  );
}

export default App;