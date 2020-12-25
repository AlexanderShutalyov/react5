import React, { useContext } from 'react';
import { HotelsTemplate } from "../src/atomic/templates/index";
import {HotelListContextProvider} from "../src/context/HotelListContext/HotelListContext";

const Hotels = () => {
    // const { userContext } = useContext();

    return (
        <React.Fragment>
            <HotelListContextProvider>
                <HotelsTemplate/>
            </HotelListContextProvider>
        </React.Fragment>
    )
};

export default Hotels;
