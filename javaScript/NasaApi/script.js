const apiKey = "aeB8ptqy6fO0jFhqRLQKmYyS4EJSlZJMWyxyVP9Y"
const apiUrl = "https://api.nasa.gov/planetary/apod?api_key="


const loadimage = async()=>{
  document.getElementById("image").src = "https://cdn.dribbble.com/users/760347/screenshots/7341673/media/b5af68cdf397db3063f89e5b466aab11.gif"
  const res = await fetch (apiUrl + `${apiKey}`);
  const data = await res.json();
  document.getElementById("image").src = data.image;
  document.getElementById("title").innerHTML = data.title;
  document.getElementById("info").innerHTML = data.explanation;
  document.getElementById("date").innerHTML = data.date;
}

function reset (){
  document.getElementById("image").src = "https://th.bing.com/th/id/OIP.Etep9_KySt6oX4fFEcpMUgHaEK?pid=ImgDet&rs=1"
  document.getElementById("title").innerHTML = "Titel"
  document.getElementById("info").innerHTML = "Information of this img..."
  document.getElementById("date").innerHTML = "Date"
}