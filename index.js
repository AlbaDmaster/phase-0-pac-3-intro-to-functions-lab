function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if(string.toLowerCase()){
        return (console.log('I can\'t hear you!'));
    }
    else if(string.toUpperCase()){
       return  (console.log("YES INDEED!"));
    }
    else if(string==="Let\'s have dinner together!"){
         return (console.log("I would love to!"));
    }
    else {
        return "Invalid input!";
    }
}


sayHiToHeadphonedRoommate("GOODBYE");
