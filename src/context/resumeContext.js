import React, { createContext, useState } from "react";

export const ResumeDataContext = createContext();

const ResumeDataContextProvider = (props) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    return (
        <ResumeDataContext.Provider value={{ data, setData, loading, setLoading }}>
            {props.children}
        </ResumeDataContext.Provider>
    );
};

export default ResumeDataContextProvider;
