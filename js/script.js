(
    function(){
      
      var names = ["Yaakov", "Frank", "Larry", "John", "Jason", "Jen", "Paul", "Paula", "Laura", "Jim"];

      for ( var i = 0; i < names.length; i++) {
        
        var firstLetter =names[i].charAt(0);
        
        if (firstLetter.toLocaleLowerCase() == "j") {
          byeSpeaker.speak(names[i]);
        } else {
          helloSpeaker.speak(names[i]);
        }
      }
    }
)();