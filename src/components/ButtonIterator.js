import { useState, useRef } from 'react';

const ButtonIterator = () => {
    const [count, setCount] = useState(0);
    const inputRef = useRef();

    const iterateHandler = () => {
        console.log('in iterateHandler');
        setCount(count + 1);
        console.log(count);
    };

    const baseChangeHandler = () => {
        setCount(+inputRef.current.value);
    };

    return (
        <div>
            <p className='bg-blue-500 text-bolder text-center h-[50px] text-white'>{count}</p>
            <button className="block mx-auto bg-blue-800 text-white" onClick={iterateHandler}>start</button>
            <input className="bg-black text-white" ref={inputRef} defaultValue='0' />
            <button className="bg-blue-800 text-white" onClick={baseChangeHandler}>iterate this instead</button>
        </div>
    );
};

export default ButtonIterator;