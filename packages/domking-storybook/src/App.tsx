import React from 'react';
import {Accordeon, AutoValidateInput} from "domking/dist";
import {validateIfInputContainsAtLeastOneSpecialCharacter} from "./helpers/validators";

function App() {
    return (
        <div>
            Hello world!
            <AutoValidateInput validate={[validateIfInputContainsAtLeastOneSpecialCharacter]}/>
            <Accordeon/>
        </div>
    );
}

export default App;
