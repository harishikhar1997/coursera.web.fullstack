interface GuessColor{
    name: string;
    value: string;
}

var colors = [
    //'cyan','gold','gray','magenta','orange','red','yellow'
    {name: 'blue',value:'#0000ff'},
    {name: 'cyan',value:'#00ffff'},
    {name: 'gold',value:'#ffd700'},
    {name: 'gray',value:'#808080'},
    {name: 'magenta',value:'#ff00ff'},
    {name: 'orange',value:'#ffa500'},
    {name: 'red',value:'#ff0000'},
    {name: 'yellow',value:'#ffff00'},
];



var targetIndex = calculateTargetIndex();
var attempts = 0;

function do_game(){
    var startMessage = 'Correct Answer to be found <' + colors[targetIndex].name + '> with index <' + targetIndex + '>';
    console.log(startMessage);
    alert(startMessage);

    var correctAnswer = guessColor(targetIndex);
    var correctAnswerMessage = 'Correct answer <' + correctAnswer.name + '> found with <' + attempts + '> attempts!';
    var correctAnswerMessageSimple = 'Correct answer <' + correctAnswer.name + '>!';
    var message = correctAnswerMessageSimple;
    console.log(message);
    //document.body.style.background = correctAnswer.value;
    alert(message);
}

function guessColor(idx : number){
    var tryColor = prompt('Guess color: \n'+getColorNames());
    var isMatch = matches(tryColor);
    attempts++;
    console.log('Calculated match value: <'+isMatch+'>');
    if(1 == isMatch){
        return getColor(tryColor);
    }
    return guessColor(targetIndex);
}

/**
 *  -1 - undefined
 *  0 - smaller
 *  1 - matches
 *  2 - bigger
 * @param color
 */
function matches(color : String){
    var colorIndex = getColorIndex(color);
    console.log('comparing: <'+colorIndex+'>  - <'+targetIndex+'>');
    if(colorIndex < 0 ) return colorIndex;
    if(colorIndex < targetIndex) return 0;
    if(colorIndex == targetIndex) return 1;
    if(colorIndex > targetIndex) return 2;

    return -1
}

function getColorNames(){
    var colorNames = new Array(0);
    for(var idx in colors){
        colorNames.push(colors[idx].name);
    }
    return colorNames;
}

function getColorIndex(color : String){
    for(var idx in colors){
        if(color.match(colors[idx].name)){
            console.log('Found color index <'+color+'> + <'+idx+'>');
            return parseInt(idx);
        }
    }
    console.log('No color found for<'+color+'>');
    return -1;
}

function getColor(colorName : String)
{
    for(var idx in colors){
        if(colorName.match(colors[idx].name)){
            console.log('Found color with index <'+colors[idx].name+'> + <'+idx+'>');
            return colors[idx];
        }
    }
}

function calculateTargetIndex(){
    var idx = Math.random() * colors.length;
    return Math.floor(idx);
}