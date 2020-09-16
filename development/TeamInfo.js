//---ABOUT---
//This script functions to simply output information about each team.
//---Instructions--
//To change the output of the information, simply change the object being returned. You can also replace the object with just `t` to have it return the full object.
//By default it returns the name, main colour, and shorthand.

var source = new EventSource("/events/streamData");
source.onmessage = (event) => {
    let data = JSON.parse(event.data);
    console.log(data.value.leagues.teams.map(t=>{
      return {
        "name":t.fullName,
        "colour":t.mainColor,
        "shorthand":t.shorthand
      }
     }));
    source.close()
};
