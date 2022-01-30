export default function calculate(button: string, state: State): State {
    if (isNumberButton(button)) {
        return handleNumberButton(button, state);
    }
    if (isOperatorButton(button)) {
        return handleOperatorButton(button, state);
    }
    if (isDotButton(button)) {
        return handleDotButton(state);
    }
    if (isDeleteButton(button)) {
        return handleDeleteButton(state);
    }
    if (isAllClearButton(button)) {
        return handleisAllClearButton();
    }
    if (isEqualButton(button)) {
        return handleisEqualButton(state);
    }
    return state;

    function isNumberButton(button: string): boolean {
        return (
            button === "0" ||
            button === "1" ||
            button === "2" ||
            button === "3" ||
            button === "4" ||
            button === "5" ||
            button === "6" ||
            button === "7" ||
            button === "8" ||
            button === "9"
        );
    }
};

export interface State {
    current: string;
    operand: number;
    operator: string | null;
    isNextCrear: boolean;
}

function handleNumberButton(button: string, state: State): State {
    if (state.isNextCrear) {
        return {
            current: button,
            operand: state.operand,
            operator: state.operator,
            isNextCrear: false
        }
    }
    if (state.current === "0") {
        return {
            current: button,
            operand: state.operand,
            operator: state.operator,
            isNextCrear: false
        }
    }

    return {
        current: state.current + button,
        operand: state.operand,
        operator: state.operator,
        isNextCrear: false
    }
}

function isOperatorButton(button: string): boolean {
    return button === "+" || button === "-";
}

function handleOperatorButton(button: string, state: State): State {
    if (state.operator === null) {
        return {
            current: state.current,
            operand: parseFloat(state.current),
            operator: button,
            isNextCrear: true
        }
    }

    const nextValue = operate(state)
    return {
        current: `${nextValue}`,
        operand: nextValue,
        operator: button,
        isNextCrear: true
    }
}

function isDotButton(button: string) {
    return button === ".";
}

function handleDotButton(state: State): State {
    if (state.current.indexOf('.') !== -1) {
        return state
    }
    return {
        current: state.current + ".",
        operand: state.operand,
        operator: state.operator,
        isNextCrear: false
    }
}

function isDeleteButton(button: string): boolean {
    return button === "D";
}

function isAllClearButton(button: string): boolean {
    return button === "AC";
}

function isEqualButton(button: string): boolean {
    return button === "=";
}

function handleDeleteButton(state: State): State {
    if (state.current.length === 1) {
        return {
            current: "0",
            operand: state.operand,
            operator: state.operator,
            isNextCrear: false,
        }
    }
    return {
        current: state.current.substring(0, state.current.length - 1),
        operand: state.operand,
        operator: state.operator,
        isNextCrear: false
    }
}

function handleisAllClearButton(): State {
    return {
        current: "0",
        operand: 0,
        operator: null,
        isNextCrear: false
    }
}

function handleisEqualButton(state: State): State {
    if (state.operator === null) {
        return state;
    }

    const nextValue = operate(state);

    return {
        current: `${nextValue}`,
        operand: 0,
        operator: null,
        isNextCrear: true,
    }
}

function operate(state: State): number {
    const current = parseFloat(state.current);
    if (state.operator === "+") {
        return state.operand + current;
    }
    if (state.operator === "-") {
        return state.operand - current;
    }
    return current;
}
