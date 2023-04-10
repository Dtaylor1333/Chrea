import React, { useState } from "react";

const AppContext = React.createContext<{locationName: string, setLocation: React.Dispatch<React.SetStateAction<string>>, chooseLocation: (choice: string) => void}>({
    locationName: "",
    setLocation: function (value: React.SetStateAction<string>): void {
        throw new Error("Function not implemented.");
    },
    chooseLocation: function (choice: string): void {
        throw new Error("Function not implemented.");
    }
});

export default AppContext;
