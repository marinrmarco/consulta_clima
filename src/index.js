//El botón btnConsultar debe generar un nuevo cardContainer con los datos climáticos de la ciudad indicada
//Crear constante de URL
const url = "https://api.openweathermap.org/data/2.5/weather?q="
const api = "&units=metric&lang=es&appid=0d0369e3ef0cab7c3c57b527d8294a80"
//Crear constante para el contenedor
const container = document.getElementById("container")
//Crear constantes para los botones
const btnQuery = document.getElementById("btnQuery")
const btnClear = document.getElementById("btnClear")

//Función para consulta de la API
const getCityData = () => {
    const city = document.getElementById("city").value;

    (city != "")
    ? fetch(url+city+api)
        .then((response) => response.json())
        .then((responseJSON) => {
            const dataCity = responseJSON
            //Crear tarjeta
            const card = document.createElement('div')

            //CREAR ELEMENTOS
            //container_temp
            const container_temp = document.createElement('div')
            container_temp.className = "grid grid-cols-2 rounded-md bg-green-200 m-1"

            //city_temp
            const city_temp = document.createElement('div')
            city_temp.className = "rounded-md bg-green-400"


            //Crear temp
            const temp = document.createElement('h3')
            const container_maxmin = document.createElement('div')
            container_maxmin.className = "grid grid-rows-2"
            const temp_min = document.createElement('h3')
            const temp_max = document.createElement('h3')
            temp.className = "text-5xl p-4"
            temp_min.className = "text-xl p-2 my-auto"
            temp_max.className = "text-xl p-2 my-auto"

            //container_city
            const container_city = document.createElement('div')
            container_city.className = "grid grid-cols-1 rounded-md bg-red-200 m-1 justify-center"

            const city = document.createElement('h3')
            city.className = "text-3xl p-3"

            const flag = document.createElement('img')
            flag.className = "mx-auto p-1"

            //container weather
            const container_weather = document.createElement('div')
            container_weather.className = "grid grid-cols-2 bg-blue-500 rounded-md m-1"

            const description = document.createElement('h4')
            description.className = "my-auto text-2xl justify-self-end"
            const icon = document.createElement('img')
            icon.className = "w-50 mx-auto"

            //ASIGNAR VARLORES
            temp.textContent = Math.floor(dataCity.main.temp)+"°"
            temp_min.textContent = "Temp min: "+Math.floor(dataCity.main.temp_min)+"°"
            temp_max.textContent = "Temp max: "+Math.floor(dataCity.main.temp_max)+"°"

            city.textContent = dataCity.name
            flag.src = "https://flagcdn.com/48x36/"+dataCity.sys.country.toLowerCase()+".png"
            description.textContent = dataCity.weather[0].description.toUpperCase()
            icon.src = "http://openweathermap.org/img/wn/"+dataCity.weather[0].icon+"@2x.png"


            //debugger

            //Agregar elementos a container_temp
            container_temp.append(temp)
            container_maxmin.append(temp_min)
            container_maxmin.append(temp_max)
            container_temp.append(container_maxmin)

            //Agregar elementos a container_city
            container_city.append(flag)
            container_city.append(city)

            //Agregar elementos a container_weather
            container_weather.append(description)
            container_weather.append(icon)

            //Agregar elementos a la card
            card.append(container_temp)
            card.append(container_city)
            card.append(container_weather)

            container.append(card)
        })
    : alert("Debes ingresar alguna ciudad")
}

const clearCityData = () => {
    container.innerHTML = ''
}

//Agregar listener al botón
btnQuery.addEventListener('click', getCityData)
btnClear.addEventListener('click', clearCityData)

