import React from "react";

const NasaImagery = (props) => {
    const lat = 41.0793; //coordinates for Fort Wayne
    const long = -85.139236;
    const dim = .25; //sets dimension of photo
    const api_key = "eWJ8epFCnbCbAKuiUQBUMprUoM3xWtWHaTZtTyaO";

    let url = `https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&dim${dim}&api_key=${api_key}`
    //let url = "https://api.nasa.gov/planetary/earth/imagery?lon=-85.139236&lat=41.0793&dim=.25&date=2020-04-20&api_key=eWJ8epFCnbCbAKuiUQBUMprUoM3xWtWHaTZtTyaO"

    fetch (url, {
        "method": "GET",
        "headers": {
            "api_key": api_key,
            "api_host": "https://api.nasa.gov/planetary/earth/imagery",
        }
    })

    .then(res => res.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err))

    return(
        <div>

        </div>
    )
}

export default NasaImagery;




















/*

export default function Nasa(){
    const [photoData, photoLong, photoLat, photoDim] = useState(null)

    useEffect(() => {
        
        async function fetchImagery() {
            const res = await fetch(
                `41.0793`
            );
            const data = await res.json();

            setPhotoData(data)
            console.log(data);
        }
    }, []);
    
    if(!photoData) return <div />;

    return(
        <div>
            <img src={photoData.url} alt={photoData.title}/>
        </div>
    )
}









const baseURL = `https://api.nasa.gov/planetary/earth/imagery?lon=-85.139236&lat=41.0793&dim=.25&date=2020-04-01&api_key=${api_key}`
const api_key = "eWJ8epFCnbCbAKuiUQBUMprUoM3xWtWHaTZtTyaO"



fetch(baseURL, {
    method: "GET"
})
.then(response => response.json())
.then(imagery => console.log(imagery))

*/