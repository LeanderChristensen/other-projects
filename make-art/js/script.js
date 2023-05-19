var app = angular.module('app', []);
app.controller('ctrl', function($scope) {
  $scope.text;
  $scope.change = function() {
    document.getElementById("text").style.marginTop = Math.floor(Math.random() * 44) + "%";
    document.getElementById("text").style.marginLeft = Math.floor(Math.random() * 71) + "%";
    document.getElementById("text").style.fontSize = Math.floor(Math.random() * 125) + "px";
    var random1 = Math.floor((Math.random() * 10)).toString();
    var random2 = Math.floor((Math.random() * 10)).toString();
    var random3 = Math.floor((Math.random() * 10)).toString();
    var random4 = Math.floor((Math.random() * 10)).toString();
    var random5 = Math.floor((Math.random() * 10)).toString();
    var random6 = Math.floor((Math.random() * 10)).toString();
    var x = "#" + random1 + random2 + random3 + random4 + random5 + random6;
    document.getElementById("text").style.color = x;
    var random01 = Math.floor((Math.random() * 10)).toString();
    var random02 = Math.floor((Math.random() * 10)).toString();
    var random03 = Math.floor((Math.random() * 10)).toString();
    var random04 = Math.floor((Math.random() * 10)).toString();
    var random05 = Math.floor((Math.random() * 10)).toString();
    var random06 = Math.floor((Math.random() * 10)).toString();
    var y = "#" + random01 + random02 + random03 + random04 + random05 + random06;
    document.body.style.backgroundColor = y;
  };
});
