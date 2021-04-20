import react from "react"
const NasaImagery = (props) => {
    const lat = 41.0793; //coordinate for Fort Wayne
    const long = -85.139236;
    const date = 2021-04-20; //YYYY-MM-DD
    const dim = .25; //sets dimension of photo
    const api_key = "eWJ8epFCnbCbAKuiUQBUMprUoM3xWtWHaTZtTyaO";
    //let url = `https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&dim${dim}&date=${date}&api_key=${api_key}`
    let url = "https://api.nasa.gov/planetary/earth/imagery?lon=-85.139236&lat=41.0793&dim=.25&date=2020-04-01&api_key=eWJ8epFCnbCbAKuiUQBUMprUoM3xWtWHaTZtTyaO"
    fetch (url, {
        "method": "GET",
        "headers": {
            "api_key": `${api_key}`,
            "api_host": "https://api.nasa.gov/planetary/earth/imagery/",
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