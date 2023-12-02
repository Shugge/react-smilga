import {useState} from 'react'

const ToggleChallenge = () => {
  const [bool, setBool] = useState(false);

  const toggleBool = () => {
    setBool(!bool);
  }
  return (
    <section>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={toggleBool}>Klikk meh</button>
      {bool ? <TempComponent/> : <h4>bool is false</h4>}
    </section>
  );
};

const TempComponent = () => {
  return (
    <div>
      <h4>bool is true</h4>
    </div>
  )
}

export default ToggleChallenge;
