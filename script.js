   
   window.onload = setTimeout(() => {
      document.querySelector(".welcome").classList.add("hide") 
   }, 5000);

   const inputTag = document.querySelector("input");
   let value1 = "";
   let value2 = "";
   let mathsign = "";
   let firstinstance = false;
   let numerator;
   let denominator;
   const getButtons  =  document.querySelectorAll("button")
   getButtons.forEach((getButton) => {
      getButton.addEventListener("click", () => {
  //       console.log("First Execution" + "value1 = "  + getButton.value , "value2 = " + getButton.value)
         // check if button presses is a number
        if (getButton.value != "" && getButton.value != "." && getButton.value != "/" && getButton.value != "*"
            && getButton.value != "-" && getButton.value != "+" && getButton.value != "="){
               if (value1 == ""){
                   value1 =  getButton.value
               }else if(value2 == "" && mathsign != "" ){
                   value2 =  getButton.value
                   inputTag.value = value2
                   firstinstance = true
               }


               if (value1 != "" && mathsign == ""){
                  value1 =  getButton.value
                  inputTag.value = inputTag.value + value1
              }else if(value2 != "" && mathsign != "" && firstinstance != true){
                  value2 =  getButton.value
                  inputTag.value = inputTag.value + value2
              }
              firstinstance = false
              
         } 
         
         // check if button pressed is a sign and clear
         if (getButton.value == "/" || getButton.value == "*"
               || getButton.value == "-" || getButton.value == "+"){
               numerator = inputTag.value;
               mathsign = getButton.value
               inputTag.value = ""
               console.log("mathsign = " + mathsign)
               
            }
            
         if (getButton.value == "=" && numerator != ""  && denominator != ""){
            denominator = inputTag.value
            if(mathsign == "/"){
               inputTag.value = numerator / denominator
            }else if(mathsign == "*"){
               inputTag.value = numerator * denominator
            } else  if(mathsign == "+"){
               inputTag.value = Number(numerator) + Number(denominator)
            } else  if(mathsign == "-"){
               inputTag.value = numerator - denominator
            }
               console.log("numerator = " + numerator , denominator)
         }

         if (getButton.value == "AC" || getButton.value == "DE" ){
             inputTag.value = ""
         }
         
         console.log("Second Exceution  " + "value1 = "  + value1 , "value2 = " + value2)
      })
   })
   
/*Add dot code to it */
