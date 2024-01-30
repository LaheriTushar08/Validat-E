

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    results.innerHTML = '<img src="img/Fountain.gif" alt="" width="50px"></img>'
    console.log("chua");
    let key = "ema_live_OEUysK6qER6dGs37FidT1QnSwuzfKeE6UJqopZCB"
    let email = username.value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url);
    let result = await res.json();
    let str = ``
    for(key of Object.keys(result)){
        if(result[key] != "" )
             str += `<div>${key}: ${result[key]}</div>`
    }
    
  console.log(str)
  results.innerHTML = str
});

