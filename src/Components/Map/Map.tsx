import React, {useContext, useEffect} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import {SearchContext} from "../../contexts/search.context";

export const Map = () => {
    const {search} = useContext(SearchContext);

    useEffect(() => {
        console.log('Make request to search for', search);
    }, [search]);

    return (
        <div className="map">
            <h1>Search for: {search}</h1>
            <MapContainer center={[52.2317874, 21.0036583]} zoom={15}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[52.2317874, 21.0036583]}>
                    <Popup>
                        <h2>Pet's smile</h2>
                        <p>Great company for your pet</p>
                    </Popup>

                </Marker>

            </MapContainer>
        </div>
    );
};
