var courseList = [
      "Education",
      "Software Enginering",
      "Business Management",
      "Computer science",
      "Information Technology",
]
var lessonList = [
      "English",
      "Computer",
      "Maths",
      "Business",
      "Chemistry"    
]
function validateForm() {
    var course= document.getElementById("course").value;
    var lesson= document.getElementById("lesson ").value;
    var date = document.getElementById("date").value;
    var tm = document.getElementById("tm").value;
   

//     for(i = 0; i < courseList.length; i++){
//          if(course === courseList[i]){
//                alert(course)
//          }
         
//     }

//     for(i = 0; i < lessonList.length; i++){
//       if(lesson === lessonList[i]){
//             alert(lesson)
//       }
//  }
     
      alert("Thank you, your class for " + course + " ," + lesson + "  has been scheduled for " + date + "," + tm)
}


