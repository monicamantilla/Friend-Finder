//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friends = require("../data/friends.js");

module.exports = function (app){
    app.get("/api/friends", function (req, res){
        res.json(friends);
    })

    app.post("/api/friends", function(req, res){
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.score;

        var b  = userScores.map(function(item){
            return parseInt(item, 10);
        })
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            score: b
        };
        console.log("Name: " + userName);
        console.log("Scores: " + userScores );

        var sum =  b.reduce((a,b) => a + b, 0 );
         console.log("Sum of user scores" +  sum);
         console.log("Best match friend diff" + bestMatch.friendDifference);

         for(var i = 0; i < friends.length; i++){
             console.log(friends[i].name);
             totalDifference = 0;
             console.log("Total Diff" + totalDifference);
             console.log("Best match friend diff" + bestMatch.friendDifference);

             var bfriendScore = friends[i].scores.reduce((a,b) => a + b, 0 );
             console.log("Total Friend Score" + bfriendScore);
             totalDifference += Math.abs(sum - bfriendScore);
             console.log("----->" + totalDifference);

             if(totalDifference <= bestMatch.friendDifference){
                 bestMatch.name = friends[i].name;
                 bestMatch.photo = friends[i].photo;
                 bestMatch.friendDifference = totalDifference;
             }
             console.log(totalDifference + "Total Difference")
         }
            console.log(bestMatch);
            friends.push(userData);
            console.log("New User Added");
            console.log(userData);
            res.json(bestMatch);
    })
}   