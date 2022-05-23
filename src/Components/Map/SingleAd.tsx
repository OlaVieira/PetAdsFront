import React, {useEffect, useState} from "react";
import {AdEntity} from 'types';
import {apiUrl} from "../../config/api";

interface Props {
    id: string;
}

export const SingleAd = (props: Props) => {
    const [ad, setAd] = useState<AdEntity | null>(null)

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/ad/${props.id}`);
            const data = await res.json();

            setAd(data);
        })();
    }, []);

    if (ad === null) {
        return <p>Loading...</p>
    }

    return  <>
                <h2>{ad.name}</h2>
                <p>{ad.description}</p>
                {!!ad.price && <p>{ad.price} PLN per day</p>}
                <hr/>
                <a href={ad.url} target="_blank" rel="noreferrer">Open the ad</a>

            </>


}
