const API_KEY =`05e0eee2ba2f8d0d034396ead13ba820`
const temperature=async city=>{
    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const res =await fetch(URL)
    const data =await res.json()
    displayApi(data);
}

const displayApi= data =>{
    console.log(data.weather[0].main);
    document.getElementById('Name').innerText=data.name;
    document.getElementById('temp').innerText=data.main.temp;
    document.getElementById('weather').innerText=data.weather[0].main;
}

document.getElementById('SearchBtn').addEventListener('click', function(){
   
    const Search_input=document.getElementById('SearchValue').value;
    temperature(Search_input)
})

temperature('dhaka');