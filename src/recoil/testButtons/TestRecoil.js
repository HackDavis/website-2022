import React from "react";
import { useRecoilState} from 'recoil';
import {testingAtom} from "../atoms/testingAtom";

export function TestRecoil() {
    const [value, setValue] = useRecoilState(testingAtom);
    function add() {
        setValue(value + 1);
    }

    return (
        <div>
            <button onClick={add}> add</button>
            <h1>{value}</h1>
        </div>
    );
}