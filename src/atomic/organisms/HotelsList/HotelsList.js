import React, {useContext} from 'react';
import {HotelListContext} from '../../../context/HotelListContext/HotelListContext'
import {HotelItemCard} from '../../molecules/index'

const HotelsList = () => {
    const {hotels} = useContext(HotelListContext);
    return (
        <div>
            {hotels && hotels.map((props, index) => (<HotelItemCard key={index} props={props}/>))}
        </div>
    )
};

export default HotelsList;

