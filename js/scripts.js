$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    $(".response").show();
    $("input:checkbox[name=warning]:checked").each(function(){
      var warning = $(this).val();
      $('#warningresponse').append(warning + "<br>");
    });
      $("#symptomsresponse").show();
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var symptom = $(this).val();
      $('#symptomsresponse').append(symptom + "<br>");
    });
      $("#copingresponse").show();
    $("input:checkbox[name=coping]:checked").each(function(){
      var coping = $(this).val();
      $('#copingresponse').append(coping + "<br>");
    });
    $('#stress-test').hide();
      var checkSymptoms = symptom.length;
      var checkWarnings = warning.length;
      var checkCoping = coping.length;

      if (checkSymptoms >= 2 && checkWarnings >=2){
        $("#response").show();
      }

 


    });

  });
