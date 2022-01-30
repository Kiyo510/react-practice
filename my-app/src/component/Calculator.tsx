import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import { State } from '../logic/calculate';
import { useState } from "react";

export default function Calculator() {
    const [state, setState] = useState<State>({
        current: "0",
        operand: 0,
        operator: null,
        isNextCrear: false,
    });
    const buttonHandler = (code: string) => {
        const nextState = calculate(code, state);
        setState(nextState);
    }

    return <div>
        <Display value={state.current} />
        <ButtonPanel buttonHandler={buttonHandler}/>
    </div>
}
