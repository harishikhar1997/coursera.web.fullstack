var numberOfFaces = 5;
var smileCreationCredentials = {
    numberOfFaces: numberOfFaces,
    path: 'smile.png',
    width: '100',
    height: '100'
};

function calculateRandomValue(value) {
    var idx = Math.random() * value;
    return Math.floor(idx);
}

this.buildFace = function(){
    var faceImage = document.createElement("img");
    faceImage.setAttribute('src', smileCreationCredentials.path);
    faceImage.setAttribute('height', smileCreationCredentials.height);
    faceImage.setAttribute('width', smileCreationCredentials.width);
    return faceImage;
};

var generateFaces = function (leftSide) {
    var faces = [];
    for(var i = 0; i < smileCreationCredentials.numberOfFaces; i++){
        var face = this.buildFace();
        faces.push(face);
    }
    console.log("calculating positions");
    faces.forEach(function (face){
        this.setRandomPosition(leftSide, face);
        leftSide.appendChild(face);
    });
    return faces;
};

this.setRandomPosition = function (side, face) {
    var maxX = side.offsetWidth-parseInt(smileCreationCredentials.width);
    var maxY = side.offsetHeight-parseInt(smileCreationCredentials.height);
    face.style.left=calculateRandomValue(maxX)+'px';
    face.style.top=calculateRandomValue(maxY)+'px';
    return face;
};

var resetLeftSide = function (leftSide) {
    console.log("Resetting faces");
    for(var idx in leftSide.childNodes){
        var child = leftSide.childNodes.item(idx);
        leftSide.removeChild(child);
    }

    return leftSide;
};

this.setUpLeftSide = function (){
    var leftSide = document.getElementById("leftSide");
    console.log("generating '"+smileCreationCredentials.numberOfFaces+"' faces for left side");
    var faces = this.generateFaces(leftSide);
    return leftSide;
};

var setUpRightSide = function (leftSide){
    var rightSide = document.getElementById("rightSide");

    console.log("cloning left to right side");
    var leftClone = leftSide.cloneNode(true);
    leftClone.removeChild(leftClone.lastChild);
    rightSide.appendChild(leftClone);
    nextLevel(leftSide, rightSide);
    return rightSide;
};
var nextLevel= function(leftSide, rightSide){
    leftSide.lastChild.onclick=
        function nextLevel(event){
            event.stopPropagation();
            smileCreationCredentials.numberOfFaces += numberOfFaces;
            leftSide = resetLeftSide(leftSide);
            var faces = generateFaces(leftSide);
            rightSide.removeChild(rightSide.firstChild);
            rightSide = setUpRightSide(leftSide);
        };
};

function setUpGame() {
    var leftSide = this.setUpLeftSide();
    var rightSide = this.setUpRightSide(leftSide);
    var theBody = document.getElementsByTagName("body")[0];


}
