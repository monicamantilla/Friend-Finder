//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// var friends = require("../data/friends.js");

//Save the apps data here as an array of objects

var friends = [
    {
    name : "Monica",
    photo: " ",
    scores: [2, 3, 4, 5, 6, 7, 3 ,4, 6, 1]
},
{
    name : "Mike",
    photo: " ",
    scores: [2, 3, 4, 5, 6, 7, 3 ,4, 6, 1]
},
{
    name : "Mark",
    photo: " ",
    scores: [2, 3, 4, 5, 6, 7, 3 ,4, 6, 1]
},
{
    name : "Stephanie",
    photo: " ",
    scores: [2, 3, 4, 5, 6, 7, 3 ,4, 6, 1]
}
];

module.export = friends; 

module.exports = function (app){
    app.get("/api/friends", function (req, res){
        res.json(friends);
    })

    app.post("/api/new", function(req, res){
        var scoreDiff = 0;


        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        console.log(req.body);

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b  = userScores.map(function(item){
            return parseInt(item, 10);
        })
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };
        console.log("Name: " + userName);
        console.log("Scores: " + userScores );

        var sum =  b.reduce((a,b) => a + b, 0 );
         console.log("Sum of user scores " +  sum);
         console.log("Best match friend diff " + bestMatch.friendDifference);

         console.log(friends);
         for(var i = 0; i < friends.length; i++){
             console.log(friends[i].name);
             scoreDiff = 0;
             console.log("Total Diff " + scoreDiff);
             console.log("Best match friend diff " + bestMatch.friendDifference);

             var bfriendScore = friends[i].scores.reduce((a,b) => a + b, 0 );
             console.log("Total Friend Score " + bfriendScore);
             scoreDiff += Math.abs(sum - bfriendScore);
             console.log("----->" + scoreDiff);

             if(scoreDiff <= bestMatch.friendDifference){
                 bestMatch.name = friends[i].name;
                 bestMatch.photo = friends[i].photo;
                 bestMatch.friendDifference = scoreDiff;
             }
             console.log(scoreDiff + "Total Difference ")
         }
            console.log(bestMatch);

            console.log(friends);
            friends.push(userData);
            console.log("New User Added ");
            console.log(userData);
            res.json(bestMatch);
    })
}   