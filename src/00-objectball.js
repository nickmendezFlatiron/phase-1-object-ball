function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ['Black','White'],
            players: {
               'Alan Anderson' : {  number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans' : {  number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez' : {  number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee' : {  number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry' : {  number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            },

        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ['Turquoise','Purple'],
            players: {

               'Jeff Adrien' : {  number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo' : {  number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop' : {  number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon' : {  number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood' : {  number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }

    }
};

function numPointsScored(name){
    const game = gameObject();
    for (const gameEle in game) { //iterate through game keys
        const team = game[gameEle];
        for( const teamEle in team ){ //iterate through keys in either home or away
            const player = team.players;
            for(const playerEle in player){ //interate through keys in the players
                if (playerEle === name){
                    return player[playerEle].points;
                }
            }
        }
    }
}

numPointsScored("Ben Gordon");
function shoeSize(name) {
    const game = gameObject();
    for (const gameEle in game) { //iterate through game keys
        const team = game[gameEle];
        for( const teamEle in team ){ //iterate through keys in either home or away
            const player = team.players;
            for(const playerEle in player){ //interate through keys in the players
                if (playerEle === name){
                    return player[playerEle].shoe;
                }
            }
        }
    }
}


function homeTeam(){
    return gameObject().home
}

function awayTeam(){
    return gameObject().away
}

function bothTeams(){
    const team = []
    team.push(homeTeam());
    team.push(awayTeam());
    return team;
}
function allPlayers() {
 return Object.assign({},awayTeam().players , homeTeam().players)
}
allPlayers();

function teamColor(teamname){
    const gameteams = Object.entries(gameObject());
    //returns the team[home or team array] array whose index[1] teamName is equal to the function input
    const color = gameteams.find(element => element[1].teamName === teamname)
    return color[1].colors;
}
teamColor("Brooklyn Nets");

function teamNames(){
    const gameteams = Object.entries(gameObject());    
  return  gameteams.map(team => team[1].teamName)
  // return [gameteams[0][1].teamName, gameteams[1][1].teamName];

}


function playerNumbers(teamname){
    let playerTeam = bothTeams().filter(team => team.teamName === teamname)
    playerTeam = Object.values(playerTeam[0].players)
    return playerTeam.map(numbers => numbers.number)
}


function playerStats(name){
    return allPlayers()[name]
}

function bigShoeRebounds(){
    const shoeSizes = Object.entries(allPlayers())
    const allShoes = shoeSizes.map(element => element[1].shoe);
    let  j = 0;
    for(let i = 0; i < allShoes.length ; i++){
        allShoes[i] > j ? j = allShoes[i] : j
    }
    j;
    const player = shoeSizes.find(player => player[1].shoe === j)
    return player[1].rebounds
    
}
bigShoeRebounds();