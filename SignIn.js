var database=[
    {
        username:"avinash",
        password:"learning"
    },

    {
        username:"manoj",
        password:"learning"
    },

    {
        username:"Rohit",
        password:"learning"
    },
];

var newsFeed=[
    {
        username: "Reactjs",
        timeline:"Learning reactJs............."
    },

    {
        username: "Angularjs",
        timeline:"Learning angularJs..........."
    }
];

var usernameFromPrompt=prompt("Enter the username");
var passwordFromPrompt=prompt("Enter the password");

function isUserValid(user,pass){
    for(var i=0; i<database.length; i++){
        if(database[i].username===user && database[i].password===pass){
            return true;
        }
    }
    return false;
}

function SignIn(user,pass){
    if(isUserValid(user,pass)){
        console.log(newsFeed);
    }else{
        alert("Error!, username and password incorrect");
    }
}

SignIn(usernameFromPrompt,passwordFromPrompt);