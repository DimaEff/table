import React, { useState } from "react";
import Paper from "@components/Paper";
import { AppWrapper } from "@components/App/styles";
import Input from "@components/Input";

function App() {
    const [value, setValue] = useState("");

    return (
        <AppWrapper>
            <div>
                <Paper width={"600px"} height={"200px"}>123</Paper>
                <Input
                    value={"value"}
                    readOnly
                    placeholder={"Search"}
                />
            </div>
        </AppWrapper>
    );
}

export default App;
