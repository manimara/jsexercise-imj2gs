const worker = new Worker('myTask.js');

worker.onmessage = (val) =>{
    console.log(`Hello ${val.data}`);
}

worker.postMessage(`This process done` , new Date());