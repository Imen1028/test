let passwordOne = document.getElementById('passwords-1')
console.log(passwordOne)
let passwordTwo = document.getElementById('passwords-2')
let passwordThree = document.getElementById('passwords-3')
let passwordFour = document.getElementById('passwords-4')

let test = document.getElementById('test')
console.log(test)

function generateRanNum(min, max) {
  return Math.floor(Math.random() * ( max - min + 1 ) + min )
}

// let randomPasswords = ["1","2","3","4","5","6","7","8","9","0","q","w","e","r","t","y","u","i","o","p","a","s"]

//Random Passwords
// let randomPasswords = "1234567890zxcvbnmasdfghjklqwertyuiop"

let generateRandomPassword = function (randomNum) {
  let passwords = ''
  for (let i = 0; i < 13; i++) {
    passwords += randomNum[generateRanNum(0, 35)]
  }
  console.log(passwords)
  if (/\d/.test(passwords)) {
    return passwords
  } else {
    passwords.replace(passwords[generateRanNum(0, 12)], generateRanNum(0, 9))
    return passwords
  }
}

// console.log(passwordOne.textContent)

function generatePasswords() {
  passwordOne.textContent = ''
  passwordTwo.textContent = ''
  passwordThree.textContent = ''
  passwordFour.textContent = ''
  
  // for (let i = 0; i < 13; i++) {
    passwordOne.textContent += generateRandomPassword ("1234567890zxcvbnmasdfghjklqwertyuiop")
    passwordTwo.textContent += generateRandomPassword ("1234567890zxcvbnmasdfghjklqwertyuiop")
    passwordThree.textContent += generateRandomPassword ("1234567890zxcvbnmasdfghjklqwertyuiop")
    passwordFour.textContent += generateRandomPassword ("1234567890zxcvbnmasdfghjklqwertyuiop")
  // }
}

function copyTextOne() {
  if (passwordOne.textContent != "") {
  navigator.clipboard.writeText(passwordOne.textContent);
  alert("Copied the password: " + passwordOne.textContent);
    }
}

function copyTextTwo() {
  if (passwordTwo.textContent != "") {
  navigator.clipboard.writeText(passwordTwo.textContent);
  alert("Copied the password: " + passwordTwo.textContent);
  }
}

function copyTextThree() {
  if (passwordThree.textContent != "") {
  navigator.clipboard.writeText(passwordThree.textContent);
  alert("Copied the password: " + passwordThree.textContent); 
  }
}

function copyTextFour() {
  if (passwordFour.textContent != "") {
  navigator.clipboard.writeText(passwordFour.textContent);
  alert("Copied the password: " + passwordFour.textContent); 
  }
}



//Password generator - 1

// <!DOCTYPE HTML>
// <html>
  
// <head>
//     <title>
//         Generate a Random Password
//         using JavaScript
//     </title>
// </head>
  
// <body style="text-align:center;">
      
//     <h1 style="color: green"> 
//         GeeksforGeeks 
//     </h1>
      
//     <h3>
//         Click on the button to
//         generate random password.
//     </h3>
      
//     <button onclick="gfg_Run()">
//         Click Here
//     </button>
//     <br>
      
//     <div>
//         <p id="geeks"></p>
//     </div>
      
//     <script>
//         var el_down = document.getElementById("geeks");
  
//         /* Function to generate combination of password */
//         function generateP() {
//             var pass = '';
//             var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
//                     'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
//             for (i = 1; i <= 8; i++) {
//                 var char = Math.floor(Math.random()
//                             * str.length + 1);
                  
//                 pass += str.charAt(char)
//             }
              
//             return pass;
//         }
  
//         function gfg_Run() {
//             el_down.innerHTML = generateP();
//         }
//     </script>
// </body>
  
// </html>





/*--------------------------------------*/
//Password generator - 2

// <!DOCTYPE HTML> 
// <html> 
  
// <head> 
//     <title> 
//         Generate a Random Password
//         using JavaScript
//     </title>
// </head> 
  
// <body style = "text-align:center;"> 
      
//     <h1 style = "color: green"> 
//         GeeksforGeeks 
//     </h1>
      
//     <h3>
//         Click on the button to
//         generate random password.
//     </h3>
      
//     <button onclick = "gfg_Run()"> 
//         Click Here
//     </button>
      
//     <p id = "geeks"></p>
      
//     <script>
//         var el_down = document.getElementById("geeks");
          
//         function gfg_Run() {
//             el_down.innerHTML = 
//                 Math.random().toString(36).slice(2) + 
//                 Math.random().toString(36)
//                     .toUpperCase().slice(2);
//             } 
//     </script> 
// </body> 
  
// </html>      