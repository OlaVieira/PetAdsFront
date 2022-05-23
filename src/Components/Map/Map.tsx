import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SearchContext} from "../../contexts/search.context";
import {SimpleAdEntity} from 'types';
import {SingleAd} from "./SingleAd";
import {apiUrl} from "../../config/api";
import '../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';
import './Map.css';


export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([])

    useEffect(() => {
        console.log('Make request to search for', search);
    }, [search]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/ad/search/${search}`);
            const data = await res.json();
            setAds(data);
        })();
    }, [search]);

    return (
        <div className="map">
            <h3 className="search-for">Search for: {search}</h3>
            <MapContainer center={[52.2317874, 21.0036583]} zoom={15}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                {
                    ads.map(ad => (
                        <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }


            </MapContainer>
        </div>
    );
};
