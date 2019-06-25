//Save the apps data here as an array of objects

let friends = [
    {
    name : "Monica",
    photo: "https://amp.businessinsider.com/images/5c8809dc2730ca59ee05755e-750-562.jpg ",
    scores: [2, 3, 4, 5, 6, 7, 3 ,4, 6, 1]
},
{
    name : "Rachel",
    photo: "https://fustany.com/images/ads/background/fustany-rachel-haircuts-in-friends.jpg ",
    scores: [2, 3, 4, 5, 6, 7, 3 ,4, 6, 1]
},
{
    name : "Joey",
    photo: " https://vignette.wikia.nocookie.net/friends/images/f/f5/JoeyTribbiani.jpg/revision/latest?cb=20180424154245",
    scores: [2, 3, 4, 5, 6, 7, 3 ,4, 6, 1]
},
{
    name : "Chandler",
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Matthew_Perry_as_Chandler_Bing.jpg/220px-Matthew_Perry_as_Chandler_Bing.jpg ",
    scores: [2, 3, 4, 5, 6, 7, 3 ,4, 6, 1]
}
];

function findFriend(user) {
    return new Promise((resolve, reject) => {

        // initial value to check against
        let diffSum = 100
        let currentSum = 0
        let currentFriend

        // loop through other users and compare their scores to current user
        for (let i = 0; i < friends.length; i++) {

            for (let j = 0; j < friends[i].scores.length; j++) {
                currentSum += Math.abs(friends[i].scores[j] - user.scores[j])
            }

            if (currentSum < diffSum) {
                diffSum = currentSum 
                currentFriend = friends[i]
            }

            currentSum = 0
        }

        resolve(currentFriend)
    })
}


module.exports = {
    friends,
    findFriend
}