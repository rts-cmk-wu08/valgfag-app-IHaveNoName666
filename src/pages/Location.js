import { useState, useEffect } from "react";

const Location = () => {

    const [myPos, setMyPos] = useState();
}

useEffect(() => {

    if('geolocation' in navigator) {

        navigator.geolocation.getCurrentPosition((position) => {

            setMyPos(position)

        })

    }

}, []);
