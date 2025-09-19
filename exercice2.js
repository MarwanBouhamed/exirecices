  let autoformations = [
      {nom:"HTML & CSS", code : "C1"},
      {nom:"Javascript", code : "C2"},
      {nom:"Git & Github", code : "C3"},
  ]
 let question = autoformations[1]
 let response ="C1";
 if (response === question.code){
     console.log("true");
 }else {
  console.log("false the true answer is " + question.code);
 }


console.log(autoformations[0].code);

  