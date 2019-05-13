import React, { useState, useRef, FC, FormEvent } from 'react';
import widthDefaultProps from './withDefaultProps';

type ICounterProp = typeof defaultProps

type inputValue = string | undefined;

const defaultProps = {
    min: 0,
    max: 10
};

const incrementClick = (pre: number, max: number): number => (pre !== max ? pre + 1 : pre);
const decrementClick = (pre: number, min: number): number => (pre !== min ? pre - 1 : pre);

const useInput = (initalValue: inputValue) => {
    const [value, setValue] = useState(initalValue);
    return {
        value,
        onChange: (e: FormEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value);
        }
    } as const;
};

const Counter: FC<ICounterProp> = ({ max, min }) => {
    const [count, setCount] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputProp = useInput(undefined);

    const increment = () => setCount(pre => incrementClick(pre, max));
    const decrement = () => setCount(pre => decrementClick(pre, min));

    const handleFocus = () => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <>
            <button onClick={increment}>+</button>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <hr />
            <h3>{inputProp.value}</h3>
            <input {...inputProp} ref={inputRef} />
            <button onClick={handleFocus}>focus</button>
        </>
    );
};

export default widthDefaultProps(defaultProps, Counter);
