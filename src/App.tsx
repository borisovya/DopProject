import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";

type getType = {
    userId: number,
    id: number,
    title: string,
    body: string
}

function App() {

    const [get, setGet] = useState<Array<getType>>([])

    const getRequestHandler = () => {
        setGet([])
    }

    useEffect(() => {    // useEffect(()=>{},get) //значит автоматически отрисуйся если изменится get
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))}, []) //значит автоматически отрисуйся один раз


    return (
        <div className="App">
            <Button nickName={'CleanPage'} callBack={getRequestHandler}/>
            <p></p>
            <ul>
                {get.map((el) => {
                    return (
                        <li>
                            <span>{el.id} - </span>
                            <span>{el.userId} - </span>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
