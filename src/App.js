import { useState } from "react";
import MoleContainer from "./MoleContainer";

function App() {
    let [score, setScore] = useState(0);

    const createMoleHill = () => {
        let hills = [];
        for (let i = 0; i < 9; i++) {
            hills.push(<MoleContainer setScore={setScore} score={score} />);
        }
        return <div>{hills}</div>;
    };

    return (
        <div className="App">
            <h1>React-a-Mole</h1>
            <h1>{score}</h1>
            {createMoleHill()}
        </div>
    );
}

export default App;
