// 1-select input elements,button and output_div
let submitButton = document.querySelector("button");
let output_div = document.getElementById("output")
let name_box = document.getElementById("name");
let email_box = document.getElementById("email");
let password_box = document.getElementById("password");
let confirmpassword_box = document.getElementById("confirmpassword");
//6-select all input boxes
let input_boxes = document.getElementsByClassName("input")
//7-convert input_boxes(HTML collection) to array
let input_arr = Array.from(input_boxes)
//2-add eventlistener to button
submitButton.addEventListener("click", validateForm);
// 3-write validateform function
function validateForm(event_details){
  event_details.preventDefault(); //prevents default behaviour(reload page)
  // 4-store value of inputs into some variables
  let name = name_box.value;
  let email = email_box.value;
  let password = password_box.value;
  let confirmpassword = confirmpassword_box.value;
  //5- write conditions to validateform
  if(!name || !email||!password|| !confirmpassword )
  {
    alert("All fiels are required")
  }
  else if(!name.trim().includes(" "))
    {
      alert("enter both first name and last name")
    }
  else if(!email.includes("@"))
    {
alert("enter valid email")
    }
  else if(password.length<8)
    {
alert("password should be atleast 8 character long")
    }
    else if(confirmpassword!==password)
      {
        alert("password and confirmpassword must be same")
      } 
      else{
        console.log("form submitted successfully")
        //8-add user details in output div
        let counter =1;
        output_div.innerHTML=`
        <h4>User ${counter++} Details:</h4>
        <p>Nmae:${name}</p>
        <p>Email:${email}</p>
        <p>Password:${password}</p>
        `
        //9-make the form empty
        input_arr.forEach((e)=>{
          e.value=""
        })
        
    
        
      }    
}

  