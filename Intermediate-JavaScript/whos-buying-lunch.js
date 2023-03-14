function whosPaying(names) {
    
    /******Don't change the code above*******/
    var ranNum = Math.floor(Math.random()*names.length);
    //console.log("ranNum: "+ ranNum);
    
     var tempNames =(names[ranNum]);
        // names = ["Angela", "Nicole", "Emre", "Jun", "Kuromi"];
        // in_names = (names[Math.floor(Math.random()*names.length)]);
      //  console.log(tempNames);
        return tempNames +" is going to buy lunch today!";
        // console.log (whosPaying(names) + "will pay for lunch.")
        
        
        
    
    
    /******Don't change the code below*******/    
    }
    // var names = ["Angela", "Nicole", "Emre", "Jun", "Kuromi"];
    console.log (whosPaying(["Angela", "Nicole", "Emre", "Jun", "Kuromi"]) );