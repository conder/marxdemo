//When the user inputs the market share values, the javascript code calculates and returns the respective market share values

//Get access to the button and set up a click event handler 

var button = document.getElementById("submit");
//This gives access to the submit button
button.onclick = alphaValues;
//Once submit button is pressed, it calls function alphaValues

function alphaValues() {
  var output1 = document.getElementsByTagName("p2")[0];
  var output2 = document.getElementsByTagName("p3")[0];
  var output3 = document.getElementsByTagName("p4")[0];
  var output4 = document.getElementsByTagName("p5")[0];
  var output5 = document.getElementsByTagName("p6")[0];
  var output6 = document.getElementsByTagName("p7")[0];
  var output7 = document.getElementsByTagName("p8")[0];
  var output8 = document.getElementsByTagName("p9")[0];
  var output9 = document.getElementsByTagName("p10")[0];
  var output10 = document.getElementsByTagName("p11")[0];

  var share1 = parseFloat(document.getElementById("ms1").value);
  var share2 = parseFloat(document.getElementById("ms2").value);
  var share3 = parseFloat(document.getElementById("ms3").value);
  var share4 = parseFloat(document.getElementById("ms4").value);
  var share5 = parseFloat(document.getElementById("ms5").value);
  var share6 = parseFloat(document.getElementById("ms6").value);
  var share7 = parseFloat(document.getElementById("ms7").value);
  var share8 = parseFloat(document.getElementById("ms8").value);
  var share9 = parseFloat(document.getElementById("ms9").value);
  var share10 = parseFloat(document.getElementById("ms10").value);

  var list = [share1, share2, share3, share4, share5, share6, share7, share8, share9, share10]
  var listLength = list.length
  let sum = 0
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  } 
  var num = 0
  for (var i = 0; i < list.length; i++) {
    if (parseFloat(list[i]) != 0.0) {
      num += 1
    }
  }
  var newList = []
  for (var i = 0; i < list.length; i++) {
    newList[i] = num * list[i]
  }
  finalList = []
  for (var i = 0; i < list.length; i++) {
    if (parseFloat(newList[i]) == 0.0) {
      finalList[i] = "N/A"
    }
    if (parseFloat(newList[i]) != 0.0) {
      finalList[i] = newList[i]
    }
  }
  if (parseInt(sum) != parseInt(100)) {
    finalList[0] = "Market Shares must sum to 100!" 
    finalList[1] = "Market Shares must sum to 100!"
    finalList[2] = "Market Shares must sum to 100!"
    finalList[3] = "Market Shares must sum to 100!"
    finalList[4] = "Market Shares must sum to 100!"
    finalList[5] = "Market Shares must sum to 100!"
    finalList[6] = "Market Shares must sum to 100!"
    finalList[7] = "Market Shares must sum to 100!"
    finalList[8] = "Market Shares must sum to 100!"
    finalList[9] = "Market Shares must sum to 100!"
  }
  for (var i = 0; i < listLength; i++) {
    if (finalList[i] < 0) {
      finalList[0] = "Market Shares cannot be negative!" 
      finalList[1] = "Market Shares cannot be negative!"
      finalList[2] = "Market Shares cannot be negative!"
      finalList[3] = "Market Shares cannot be negative!"
      finalList[4] = "Market Shares cannot be negative!"
      finalList[5] = "Market Shares cannot be negative!"
      finalList[6] = "Market Shares cannot be negative!"
      finalList[7] = "Market Shares cannot be negative!"
      finalList[8] = "Market Shares cannot be negative!"
      finalList[9] = "Market Shares cannot be negative!"
    }
  }     
  output1.innerHTML = "Alpha Value 1: " + finalList[0];
  output2.innerHTML = "Alpha Value 2: " + finalList[1];
  output3.innerHTML = "Alpha Value 3: " + finalList[2];
  output4.innerHTML = "Alpha Value 4: " + finalList[3];
  output5.innerHTML = "Alpha Value 5: " + finalList[4];
  output6.innerHTML = "Alpha Value 6: " + finalList[5];
  output7.innerHTML = "Alpha Value 7: " + finalList[6];
  output8.innerHTML = "Alpha Value 8: " + finalList[7];
  output9.innerHTML = "Alpha Value 9: " + finalList[8];
  output10.innerHTML = "Alpha Value 10: " + finalList[9];
}

/*
Problems with this code:

  1. If inputs both have negative values and don't add up to 100, output message only tells user "Market Shares must add up to 100".

  2. Super clunky and ugly (definitely not optimized, for example, repetitive for loops could be condensed).

  3. Website design and layout is minimal and ugly.

  4. Some float inputs aren't working? - Resolved
*/
