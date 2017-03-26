var array = ['Dustin', 'Jayson', 'Cassie', 'Michael', 'Sister Palmer', 'Brother Palmer', 'Prayer Guns!'];
var newHTML = [];

function randomName(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
$(document).ready(function () {
    $.each(array, function (index, value) {
        newHTML.push('<li class="list-group-item">' + value + '</li>');
    });
    $("#list").html(newHTML.join(""));
    $("#ChooseOpening").click(function () {
        $("#panelOpening").show();
        var chosenOne = randomName(newHTML);
        $("#prayerNameOpening").html(chosenOne);
    });
    $("#ChooseClosing").click(function(){
        $("#panelClosing").show();
        var chosenOne = randomName(newHTML);
        if (chosenOne == $("#prayerNameOpening").html()){
            chosenOne = randomName(newHTML);
        }
        $("#prayerNameClosing").html(chosenOne);
    })
    $("#clearBtn").click(function(){
        $("#panelOpening").hide();
        $("#panelClosing").hide();
    })
});