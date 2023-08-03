import React from 'react';
import {Accordeon, AutoValidateInput, CustomDropdown, CustomModal} from "domking/dist";
import {validateIfInputContainsAtLeastOneSpecialCharacter} from "./helpers/validators";

function App() {
    return (
        <div>
            Hello world!
            <AutoValidateInput validate={[validateIfInputContainsAtLeastOneSpecialCharacter]}/>
            <Accordeon
                children={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat laudantium libero
                    unde!</p>}/>

            <CustomDropdown values={["123", "adfdsfdsf", "dfaer", "qwert", "4dfioa fa"]}
                            dispatchSetDropdownContent={() => console.log("adf")}/>
            </div>
    );
};

export default App;
