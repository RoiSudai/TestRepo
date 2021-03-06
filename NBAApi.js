const nba = require('nba.js').default;
var jsonfile = require('jsonfile')

var Api = {
    allPlayers: function(callback){
        nba.stats.allPlayers(function(err, res) {
            if (err)
                console.log(err);
            else    
                callback(res);
            })
        },
    getGameByDate: function(year, callback){
        nba.data.schedule({year: year}, function(err, res){
            if (err) 
                console.log(err);
            else    
                callback(res);
            // jsonfile.writeFile("./tmp/test.json", res, {spaces: 2}, function (err) {
            //     if(err)
            //         console.log(err);
            // });
        });
    },
    getGameScore: function(gameId, gameDate, callback){
        nba.data.miniBoxscore({date: gameDate, gameId: gameId}, function(err, res){
            if (err)
                console.log(err);
            else
                callback(res);
        })
    }        
}
module.exports = Api;