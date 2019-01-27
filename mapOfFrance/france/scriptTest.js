function redrawScoreboardAndMap(){
		setup();
		//debugger;
		var mapData = window.JSMaps.maps.france;

		$('#france-map').trigger('reDraw', mapData);
		drawChart();
		//myChart.update();
		
	}
	function setSelectedGame(gameIndex){
		gameSelected = gameIndex;
		redrawScoreboardAndMap();
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
	//createCanvas(720, 400);
	var scoreboard = selectedLeague[gameSelected]["ranking"];
	
	
	$("#leagueLabel").text("Round "+(gameSelected+1));
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
(function($) {
	
	setup();
	
	
	})(jQuery);