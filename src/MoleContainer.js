import Mole from "./Mole";
import { useState } from "react";
import EmptySlot from "./EmptySlot";

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(true);

    const moleBopped = () => {
        if (displayMole == true) {
            props.setScore(props.score + 1);
            setDisplayMole(false);
        }
    };

    if (displayMole == false) {
        return (
            <div>
                <EmptySlot />
            </div>
        );
    } else {
        return (
            <div>
                <Mole
                    setDisplayMole={setDisplayMole}
                    handleClick={moleBopped}
                />
            </div>
        );
    }
}

export default MoleContainer;
