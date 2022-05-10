let cityName=document.querySelector(".city");
let dataWeather=document.querySelector(".dataWeather")

async function getData(city){
    let url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-7118B202-1151-43E8-BE84-EBA964198849&format=JSON&locationName=${city}`;
    // let url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-7118B202-1151-43E8-BE84-EBA964198849&format=JSON&locationName=臺北市";
    let req = await fetch(url);
    let Data = await req.json();
    // console.log(response)
    let records = Data.records.locations[0].location[0].weatherElement;
    const PoP = records[0].time[0].elementValue[0].value;
    const Wx = records[1].time[0].elementValue[0].value;
    const T = records[2].time[0].elementValue[0].value;
    // console.log(PoP);
    const cityWeather = [Wx, PoP, T];
    console.log(cityWeather);
    cityName.innerHTML=city;
    dataWeather.innerHTML="天氣:"+cityWeather[0]+"<br>"+"降雨率:"+cityWeather[1]+"%"+"<br>"+"溫度:"+cityWeather[2]+"°C ";
}
getData("新竹市");

////get Date
const today = new Date();
const Mon = today.getMonth()+1;
const Day = today.getDate();

let dataMon = document.querySelector(".dataMon");
let dataDate = document.querySelector(".dataDate");
dataMon.innerHTML = Mon;
dataDate.innerHTML = Day;
// console.log(Mon);

// console.log(today.getMonth());
// console.log(today.getDate())
// console.log(today)
