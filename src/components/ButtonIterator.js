import { useState, useEffect, useRef, useContext, useCallback, useMemo, useReducer } from 'react';
// import { BaseContext } from '../store/base-context';
import Button from './Button';

const numberReducer = (state, action) => {
    if (action.type === 'UPDATE') {
        return { number: action.val, isEven: state.isEven };
    }
    else if (action.type === 'CHECK') {
        return { number: state.number, isEven: action.val };
    }
    return { number: '---', isEven: '---' };
};

const ButtonIterator = () => {
    // console.log('Iterator');
    const [count, setCount] = useState(0);

    // const [enteredNumber, setEnteredNumber] = useState('...');
    // const [isEven, setIsEven] = useState('...');

    const [enteredNumberState, dispatchEnteredNumber] = useReducer(numberReducer, { number: '___', isEven: '___' });

    // const ctx = useContext(BaseContext);
    // const inputRef = useRef();

    const iterateHandler = () => {
        setCount(count + 1);
    };

    // const baseChangeHandler = () => {
    //     setCount(+inputRef.current.value);
    // };

    // const takeValueOfCtx = () => { 
    //     setCount(ctx.initialVal);
    // };

    const clickHandler = useCallback(() => {
        // console.log('google');
    }, []);

    const operations = useMemo(() => { return ['+', '-', '*'] }, []);



    const inputChangeHandler = (event) => {
        console.log(event.target.value);
        // setEnteredNumber(() => { return event.target.value; });
        dispatchEnteredNumber({ type: 'UPDATE', val: event.target.value });
        // console.log(enteredNumber);
        // if (enteredNumber % 2 === 0) {
        //     setIsEven(() => { return 'EVEN'; });
        // }
        // else setIsEven(() => { return 'ODD'; });
    };

    useEffect(() => {
        if (enteredNumberState.number % 2 === 0) {
            // setIsEven(() => { return 'EVEN'; });
            dispatchEnteredNumber({ type: 'CHECK', val: 'EVEN' });
        }
        else
            // setIsEven(() => { return 'ODD'; });
            dispatchEnteredNumber({ type: 'CHECK', val: 'ODD' });

    }, [enteredNumberState.number]);

    return (
        <div>
            <p className='bg-blue-500 text-bolder text-center h-[50px] text-white'>{count}</p>
            <button className="block mx-auto bg-blue-800 text-white" onClick={iterateHandler}>start</button>
            {/* <input className="bg-black text-white" ref={inputRef} defaultValue='0' /> */}
            {/* <button className="bg-blue-800 text-white" onClick={baseChangeHandler}>iterate this instead</button> */}
            {/* <button className="bg-blue-800 text-white" onClick={takeValueOfCtx}>take value from context</button> */}
            <Button onClick={clickHandler} type='button' className="bg-red-500 text-white w-[80px]" operations={operations}>add</Button>
            <p>{`${enteredNumberState.number} is ${enteredNumberState.isEven}`}</p>
            <input className='bg-red-500 text-white' type='number' onChange={inputChangeHandler} />
        </div>
    );
};

export default ButtonIterator;