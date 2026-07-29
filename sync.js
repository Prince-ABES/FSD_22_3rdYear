function register() {
    waitforDelay(6000);
  console.log("register here");
}
function login() {
    waitforDelay(6000);

  console.log("login here");
}
function getData() {
    waitforDelay(4000);

  console.log("fetch data");
}
function displayData() {
    waitforDelay(6000);

  console.log("display data");
}

function waitforDelay(delay){
    const mt = Date.now()+delay;
    while(Date.now()<mt){

    }
}

register();
login();
getData();
displayData();
console.log("call another application");
