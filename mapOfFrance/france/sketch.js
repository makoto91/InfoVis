	 // Global object to hold results from the loadJSON call
	let bubbles = []; // Global array to hold all bubble objects
	
// Put any asynchronous data loading in preload to complete before "setup" is run
	function draw() {
	  //debugger;
	  //selectedLeague = loadJSON('assets/ligue1-2017.json');
	  //stroke(153);
	  line(200,200, 1400, 1400);
	  
	  
	  
	}
	$(document).ready(function() {
  $( "#buttonRight" ).click(function() {
		//debugger;
	incrementSelectedGame(1);
	});
	$( "#buttonLeft" ).click(function() {
		//debugger;
		incrementSelectedGame(-1);
	});
	
	$('#selectLeague').on('change', function() {
		//debugger;
		if(this.value == "League 1 2017"){
			selectedLeague = ligueFrancais2017;
		}else if(this.value == "League 1 2016"){
			selectedLeague = ligueFrancais2016;
		}
		redrawScoreboardAndMap();
});
});
	function redrawScoreboardAndMap(){
		setup();
		//debugger;
		var mapData = window.JSMaps.maps.france;

		$('#france-map').trigger('reDraw', mapData);
		
	}
	function incrementSelectedGame(i){
		//debugger;
		if((gameSelected==0 && i<0) || (gameSelected == selectedLeague.length-1 && i>0)){
			return;
		}
		
		gameSelected = gameSelected + i;
		redrawScoreboardAndMap();
        
	}
	function setup() {
	//debugger;
	createCanvas(720, 400);
	var scoreboard = selectedLeague[gameSelected]["ranking"];
	
	
	$("#leagueLabel").text("Game "+(gameSelected+1));
	  var tableHtml = `<div class="header">Ligue 1</div>
			<table class="table" cellspacing="0" id="table" data-id="17247">
				<thead>
					<tr>
						<th title="Position">P</th>
						<th class="name">Team</th>
						<th title="Goals scored">GS</th>
						<th title="Goals against">GA</th>
						<th title="Goals difference">+/-</th>
						<th title="Points">P</th>
					</tr>
				</thead>
				<tbody>`;
		var i;
	  for(i = 0; i< scoreboard.length; i++){
		  var team = scoreboard[i]["team"];
		  var points = scoreboard[i]["pts"];
		  var goalsScored = scoreboard[i]["bp"];
		  var goalsAgainst = scoreboard[i]["bc"];
		  var goalDiference = goalsScored - goalsAgainst;
		  
		  var teamHtml = `<tr data-t="191585" data-pos="`+(i+1)+`">
						<td class="po">`+(i+1)+`</td>
						<td class="name"><img src="images/teams/`+ team +`.png" width="16" height="16" alt=""> 
						`+team+`</td>
						<td class="gf" title="Goals scored">`+goalsScored+`</td>
						<td class="gaa" title="Goals against">`+goalsAgainst+`</td>
						<td class="gd" title="Goals difference">`+goalDiference+`</td>
						<td class="po">`+points+`</td>
					</tr>`
		  tableHtml += teamHtml;
	  }
	  tableHtml += `</tbody>
			</table>`;
			
	$( "#scoreboard" ).html(tableHtml);
	}
	
	
	
	
	
	
	