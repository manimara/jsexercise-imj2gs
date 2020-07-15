postMessage(`I am working on before post message`);

onmessage = function(evt){
    console.log(evt.data);
}

