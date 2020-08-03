function getDropDown(sel){
	updateChartType(my_data);
	hideAll(sel);
}
function hideAll(sel){
	 if(sel=="catg1")
		document.getElementById("op4").style.visibility = 'hidden';
	 if(sel=="catg2")
	{
		document.getElementById("op1").style.visibility = 'hidden';
		document.getElementById("op4").style.visibility = 'visible';	
	}
	if(sel=="catg3")
	  	document.getElementById("op3").style.visibility = 'hidden';
	if(sel=="catg4")
	{
		document.getElementById("op1").style.visibility='visible';
		document.getElementById("op3").style.visibility = 'visible';
	}
	if(sel=="prod1")
		document.getElementById("br4").style.visibility='hidden';
	if(sel=="prod2")
		document.getElementById("br3").style.visibility='hidden';
	if(sel=="prod3")
	{
		document.getElementById("br2").style.visibility='hidden';
		document.getElementById("br3").style.visibility='visible';
	}
	if(sel=="prod4")
	{
		document.getElementById("br3").style.visibility='visible';
		document.getElementById("br4").style.visibility='visible';
		}
}
var my_data=[1,2,3,2,2.5];
var myData = {
	labels: ["January","February","March","April","May"],
	datasets: [{
		label: "Sales By Month for",
		fill: false,
		backgroundColor: ['#3366ff', '#3366ff', '#3366ff','#3366ff', '#3366ff'],
		borderColor: 'black',
		data: my_data,
	}]
};
var ctx = document.getElementById('my_Chart').getContext('2d');
var myChart = new Chart(ctx, {
	type: 'bar',  
	data: myData, 
	options : {
  					 scales: {
    					 yAxes: [{
      					 scaleLabel: {display: true,
        					 labelString: 'Sales'}}]}}
});			
function updateChartType(my_data) {
	for(i=0;i<my_data.length;i++)
	{
		my_data[i]+=Math.floor(Math.random()*25);
	}
	myChart.update();
};
