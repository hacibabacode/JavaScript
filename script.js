google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Diesel');
  data.addColumn('number', 'Gas');
  data.addRows(11);
  data.setValue(0, 0, '1.');
  data.setValue(0, 1, 304.100);
  data.setValue(0, 2, 289.600);
  data.setValue(1, 0, '2.');
  data.setValue(1, 1, 345.200);
  data.setValue(1, 2, 330.800);
  data.setValue(2, 0, '3.');
  data.setValue(2, 2, 424.000);
  data.setValue(3, 0, '5.');
  data.setValue(3, 1, 801.000);
  data.setValue(3, 2, 542.100);
  data.setValue(4, 0, '6.');
  data.setValue(4, 1, 1041.000);
  data.setValue(5, 0, '7.');
  data.setValue(5, 1, 2032.000);
  data.setValue(5, 2, 1629.500);
  data.setValue(6, 0, '8.');
  data.setValue(6, 1, 2416.500);
  data.setValue(6, 2, 2375.800);
  data.setValue(7, 0, 'X1.');
  data.setValue(7, 1, 403.800);
  data.setValue(7, 2, 389.600);
  data.setValue(8, 0, 'X2.');
  data.setValue(8, 1, 414.300);
  data.setValue(9, 0, 'X3.');
  data.setValue(9, 1, 701.800);
  data.setValue(9, 2, 549.600);
  data.setValue(10, 0, 'Z4.');
  data.setValue(10, 2, 689.200);


  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, {
    width: 380,
    height: 420, title: 'Price list of Bmw car models.',
    hAxis: { title: 'BMW 2020', titleTextStyle: { color: 'red' } }
    
  });
}

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);

}
showTime();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}