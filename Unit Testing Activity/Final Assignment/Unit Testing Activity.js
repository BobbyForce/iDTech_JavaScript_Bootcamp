function Greet(name){
    if(name==null){
        return "Hello there!";
    }
    if(typeof name == "object"){
        let nameList="";
        for(var i = 0; i<name.length-1;i++){
            nameList += name[i] + ", ";
        }
        nameList += name[name.length-1];
        return "Hello, " + nameList;
    }
    if(name==name.toLocaleUpperCase()){
    return "HELLO " + name + "!";
    }
    return "Hello, " + name;
}


