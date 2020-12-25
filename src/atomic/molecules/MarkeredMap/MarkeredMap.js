import React, {useContext} from 'react';
import styles from "./MarkeredMap.module.css"
import { MyMapComponent } from '../../atoms/index'

const MarkeredMap = () => {

    let isMarkerShown = true;
    return (
        <div className={styles.MapContainer}>
            <MyMapComponent
                isMarkerShown={isMarkerShown}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `500px`, width: '600px'}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        </div>
    )
};

export default MarkeredMap;