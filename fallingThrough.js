var tier="deck of legends";
var output="You’ll receive ";

switch(tier){
    case "deck of legends":
        output+="a custom card, ";
    case "collector's deck":
        output+="a signed version of the Exploding Kittens deck, ";
    case "nsfw deck":
        output+="one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
    default:
        output+="one copy of the Exploding Kittens card game.";
}

console.log(output)