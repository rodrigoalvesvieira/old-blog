// Module RAV (for Rodrigo Alves Vieira)
// where the blog's functions live

var RAV = {
  parseDate: function(dateStr) {
    var dateArray = dateStr.split(" ");
    dateArray[1] + " " + dateArray[0] + ", " + dateArray[2];
  }
}

$(function(){
  var dateText = $("time").text(),
      realDate = RAV.parseDate(dateText);
  
  $("time").text(realDate);    
});
