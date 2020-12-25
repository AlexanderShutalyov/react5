import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import {useContext} from "react";
import {HotelListContext} from "../../../context/HotelListContext/HotelListContext";

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    const {hotels, setHotelsData} = useContext(HotelListContext);
    let currentCenter = {lat: 40.669612, lng: -73.811325};
    // Try to get current geolocation
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            currentCenter = {lat: position.coords.latitude, lng: position.coords.longitude}
        });
    }
    const defaultCenter = hotels.length > 0 ? {lat: hotels[0].coordinate.lat, lng: hotels[0].coordinate.lon} : currentCenter;

    return <GoogleMap
            defaultZoom={8}
            defaultCenter={ defaultCenter }
        >
            {props.isMarkerShown && hotels.map((props, index) => (<Marker key={index} position={{ lat: props.coordinate.lat, lng: props.coordinate.lon }} />))}
        </GoogleMap>
    }
));

export default MyMapComponent;
