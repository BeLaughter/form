let n = document.getElementById('name');
let nameErr = document.querySelector('.nameErr');

let email = document.getElementById('email');
let emailErr = document.querySelector('.emailErr');

let password = document.getElementById('password');
let passwordErr = document.querySelector('.passErr');

let confir = document.getElementById('c-password');
let cpassErr = document.querySelector('.cpassErr');

let body = document.querySelector('body');


       function nameValidation(){
        const nValue = n.value;
        if(nValue === ""){
            body.style.backgroundColor='red';
            nameErr.innerHTML="Name must be filled";
            nameErr.style.color="red";
            n.classList.add('fill-failure');
        } else {
            body.style.backgroundColor='green';
            nameErr.innerHTML=" ";
            n.classList.remove('fill-failure');
            n.classList.add('fill-sucess');
        } };


        function emailValidation(){
            if(email.value === ""){
                body.style.backgroundColor='red';
                emailErr.innerHTML="Email must be filled";
                emailErr.style.color="red";
                email.classList.add('fill-failure');  
            } else {
                body.style.backgroundColor='green';
               emailErr.innerHTML=" ";
               email.classList.remove('fill-failure');
                email.classList.add('fill-sucess');
            } };
        
        
        function passwordValidation(){
            let x = password.value;
                if(password.value === "" ){
                    body.style.backgroundColor='red';
                    passwordErr.innerHTML="Password cannot be empty !";
                    passwordErr.style.color="red";
                    password.classList.add('fill-failure');  
                } else if (x.length <= 8){
                    body.style.backgroundColor='red';
                    passwordErr.innerHTML="Password must be 8 characters long !";
                    passwordErr.style.color="red";
                    password.classList.add('fill-failure');
                }else if (x.length >= 8){
                    body.style.backgroundColor='green';
                    passwordErr.innerHTML=" ";
                    passwordErr.style.color="green";
                    password.classList.remove('fill-failure');
                    password.classList.add('fill-sucess');
                } };



                
        function cpasswordValidation(){
                if(confir.value === "" ){
                    body.style.backgroundColor='red';
                    cpassErr.innerHTML="Confirm Password !";
                    cpassErr.style.color="red";
                    confir.classList.add('fill-failure');  
                } else if (confir.value !== password.value){
                    body.style.backgroundColor='red';
                    cpassErr.innerHTML="Password must be same !";
                    cpassErr.style.color="red";
                    confir.classList.add('fill-failure');
                }else {
                    
                    
                    cpassErr.innerHTML=" ";
                    confir.classList.remove('fill-failure');
                    confir.classList.add('fill-sucess');
                } };


        let btn = document.querySelector('a');

        btn.addEventListener(
    'click', function(){
    nameValidation();
    emailValidation();
    passwordValidation();
    cpasswordValidation();
    });
