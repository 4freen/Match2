$(document).ready(
		function() {
			var score = 0;
			var numOfChoices = 0;
			var choices = new Array();
			var minGrid = 1;
			var maxGrid = 16;
			var someint = 1;
			var imgKey = Array.apply(null, Array(17)).map(
					Number.prototype.valueOf, 0);
			var imgDups = Array.apply(null, Array(17)).map(
					Number.prototype.valueOf, 0);
			var check = 0; // 16 means all
			var cell = 1;
			var imgsPath = new Array();
			var gridNames = {
				1 : "#one",
				2 : "#two",
				3 : "#three",
				4 : "#four",
				5 : "#five",
				6 : "#six",
				7 : "#seven",
				8 : "#eight",
				9 : "#nine",
				10 : "#ten",
				11 : "#eleven",
				12 : "#twelve",
				13 : "#thirteen",
				14 : "#fourteen",
				15 : "#fifteen",
				16 : "#sixteen"
			};
			var imgSrc = "images/ab";
			var imgExt = ".jpg";
			var successImg = "images/thumbsup.jpg";
			
			var succShowSound = new Audio("sounds/successfulShow.mp3");
			var unsuccShowSound = new Audio("sounds/unsuccessfulShow.mp3"); 

			while (check != 16) {
				var randomNumber1 = Math.floor(Math.random()
						* (maxGrid - minGrid + 1) + minGrid);
				if (randomNumber1 != someint && imgDups[randomNumber1] == 0) {
					imgKey[randomNumber1] = someint;
					imgKey[someint] = randomNumber1;
					imgDups[randomNumber1] = 1;
					imgDups[someint] = 1;
					check = check + 2;

					while (imgDups[someint] == 1)
						someint = someint + 1;
				}
			}
/*
			 for (var l = 1; l <= 16; l++)
			 	alert(l + " " + imgKey[l]);
*/

			var imgDups = Array.apply(null, Array(17)).map(
					Number.prototype.valueOf, 0);

			for ( var i in imgKey) {
				$("td").css("background-color", "gray");
				if (imgDups[i] == 0 && imgDups[imgKey[i]] == 0) {
					imgPath = imgSrc + cell + imgExt;
					cell++;
					imgDups[i] = imgDups[imgKey[i]] = 1;
					imgsPath[i] = imgsPath[imgKey[i]] = imgPath;
					//alert(imgsPath[i]);
				}
			}

			for (var cell in gridNames) {
				var $bird = $(gridNames[cell]);
				$("td").css("background-color", "white");
				$bird.fadeIn("slow").html(
						"<img height='50px' width='50px' src='"
								+ "images/questionmark.jpg" + "'/>");
			}


		 $(".birds").click(function(){
			 var choice1 = getKeyGrid(this.id);
			 $(gridNames[choice1]).html("<img height='50px' width='50px'src='"+imgsPath[choice1]+"'/>");
			 choices.push(choice1);
			 if(choices.length==2) {
				 if(choices[0]==imgKey[choices[1]]) {
				 	succShowSound.play();
					 $(gridNames[choices[0]]).html("<img height='50px' width='50px' src='"+successImg+"'/>");
					 $(gridNames[choices[1]]).html("<img height='50px' width='50px' src='"+successImg+"'/>");
					 choices.pop();
					 choices.pop();
					 score++;
				 }
				 else {
				 	unsuccShowSound.play();
					 $(gridNames[choices[0]]).html("<img height='50px' width='50px' src='"+"images/questionmark.jpg"+"'/>");
					 $(gridNames[choices[1]]).html("<img height='50px' width='50px' src='"+"images/questionmark.jpg"+"'/>");
					 choices.pop();
					 choices.pop();
				 }
		 }
		 if(score == 8) {
		 		window.location.href = "success.html";
		 	}
		});

			function getKeyGrid(id) {
				var ids = "#" + id;
				for ( var i in gridNames) {
					if (gridNames[i] == ids)
						return i;
				}
			}
		});