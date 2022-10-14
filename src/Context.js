import React, { useContext, useState } from 'react';
import { createContext } from 'react';
const Babo = createContext();

// 1. createContext로 Context를 만듦.
// 2. 이름.Provider 로 하위 구조를 감쌈.
// 3. value 값을 지정
// 4. useContext(이름) 으로 불러옴.

const Thedeepsub = () => {
    const { state, setState } = useContext(Babo); //provider 비구조 할당...
    return <>
        폼폼푸린 {state}
        <button onClick={
            () => setState('천재... 띠옹!')
        }>천재로만 들기</button>
    </>
}

const Deepsub = () => {
    return <Thedeepsub />
}


const Sub = () => {
    return <Deepsub />
}

const App = () => {
    const [state, setState] = useState("바보")
    return (
        <Babo.Provider value={{ state, setState }}>
            <Sub />
        </Babo.Provider>
    )
}

export default App