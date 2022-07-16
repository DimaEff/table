import React, { useState } from "react";
import Paper from "@components/Paper";
import { AppWrapper } from "@components/App/styles";
import Input from "@components/Input";

function App() {
    const [value, setValue] = useState("");

    return (
        <AppWrapper>
            <div>
                <Paper>123</Paper>
                <Input
                    value={value}
                    placeholder={"Search"}
                    setValue={setValue}
                />
            </div>
        </AppWrapper>
    );
}

export default App;
