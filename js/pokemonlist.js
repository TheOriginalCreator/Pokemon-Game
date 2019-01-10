// API Fetch Command
fetch("https://pokeapi.co/api/v2/pokemon/?limit=300")
  .then(response => response.json())
  .then(data => {
    console.log(data)

    document.getElementById("button").onclick = () => {
      
      if (document.getElementById("parent")) {
        document.getElementById("parent").remove();
      }
 
      let parent = document.createElement("ul");
      parent.id = "parent";
      document.getElementById("output").appendChild(parent);

      data.results.forEach(x => {
        let name = x.name;
        let nameSplit = name.split("", 1);
        let nameString = nameSplit.toString();
        console.log(nameString);


        let userInput = document.getElementById("userInput").value;

        if (nameString === userInput) {
          let letterString = name.substring(nameString);
          console.log(letterString);

          let list = document.createElement("li");
          list.textContent = letterString;
          list.id = "list";
          parent.appendChild(list);
        }

      }); 
    };
  });
