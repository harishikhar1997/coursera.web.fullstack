var borderStrength = 2;
var smileCreationCredentials = {
    numberOfFaces: 5,
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

this.generateFaces = function () {
    var faces = [];
    for(var i = 0; i < smileCreationCredentials.numberOfFaces; i++){
        var face = this.buildFace();
        faces.push(face);
    }
    return faces;
};

this.setRandomPosition = function (side, face) {
    var maxX = side.offsetWidth-parseInt(smileCreationCredentials.width);
    var maxY = side.offsetHeight-parseInt(smileCreationCredentials.height);
    face.style.left=calculateRandomValue(maxX)+'px';
    face.style.top=calculateRandomValue(maxY)+'px';
    return face;
};

function displayLeftFaces() {
    var theLeftSide =
        document.getElementById("leftSide");
    console.log("display left faces on div '" + theLeftSide + "'");
    console.log("generating faces");
    var faces = this.generateFaces();

    console.log("calculating positions");
    faces.forEach(function (face){
        this.setRandomPosition(theLeftSide, face);
        theLeftSide.appendChild(face);
    });
}
