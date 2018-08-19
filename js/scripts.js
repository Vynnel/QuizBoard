var testResults = function(one, two ,three, four, five){

      return one + two + three + four + five;


};


  $("form#test").submit(function(event){
    var Question1 = parseInt($("input:radio[name = Question1]:checked").val());
     if($("input:radio[name = Question1]:checked").length == 0){
       $('#Question1').text("An answer is required");
               return false;
     }
    var Question2 = parseInt($("input:radio[name = Question2]:checked").val());
      if($("input:radio[name = Question2]:checked").length == 0){
        $('#Question2').text("An answer is required");
              return false;
    }
    var Question3 = parseInt($("input:radio[name = Question3]:checked").val());
      if($("input:radio[name = Question3]:checked").length == 0){
        $('#Question3').text("An answer is required");
              return false;
    }
    var Question4 = parseInt($("input:radio[name = Question4]:checked").val());
      if($("input:radio[name = Question4]:checked").length == 0){
        $('#Question4').text("An answer is required");
              return false;
    }
    var Question5 = parseInt($("input:radio[name = Question5]:checked").val());
      if($("input:radio[name = Question5]:checked").length == 0){
        $('#Question5').text("An answer is required");
              return false;
    }
    var result = testResults(Question1, Question2, Question3, Question4, Question5);

    $("#display").text("Your score is: " + result + " /25");

  
});
