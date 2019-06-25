module.exports = function (app) {

    const { friends, findFriend } = require('../data/friends.js')

    app.get('/api/friends', function(req, res) {
        res.json(friends)
    })
    
    app.post('/api/friends', function(req, res) {
        
        let friend = req.body
        friend.scores = friend.scores.map( item => parseInt(item))
       findFriend(friend).then(data => {
           res.send(data)
       })
    })
}