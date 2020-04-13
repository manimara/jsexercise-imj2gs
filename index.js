// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function search(obj, key) {
  // console.log(obj);
  // debugger;

  if(obj && obj.name == key){
    console.log(obj)
    return obj;
  }else{
    if(obj && obj.children){
      let f = obj.children;      
      f.filter(child => {
        return child.name == key;
      });
      f.forEach( child => search(child, key));
      // console.log(f);
    }
  }
  return;
}

var obj = {
  name: "main",
  children: [
    {
      name: "A",
      children: [
        {
          name: "A-A",
          children: [
            {
              name: "A-A-A"
            },
            {
              name: "A-A-B"
            }
          ]
        }
      ]
    },
    {
      name: "B"
    }
  ]
};

search(obj, "A-A");
