
async function login(event) {
    event.preventDefault();

     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
 
     try {
         const response = await fetch('http://localhost:3000/api/auth/login', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({ email, password })
         });
 
         if (response.ok) {
             const data = await response.json();
             localStorage.setItem('token', data.token);
             data.message ? alert(data.message)  : alert("Login Successfully");
             window.location.href = '../../Pages/index.html';
         } else {
             const errorData = await response.json();
             errorData.message ? alert(errorData.message): alert("invalid!!");
         }
     } catch (error) {
         console.error('Error:', error);
     }
};

async function register(event) {
    event.preventDefault();

     var email = document.getElementById('newEmail').value;
     var username = document.getElementById('newUsername').value;
     var password = document.getElementById('newPassword').value;

 
     try {
         const response = await fetch('http://localhost:3000/api/auth/register', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({ email, username, password })
         });
 
         if (response.ok) {
             const data = await response.json();
             localStorage.setItem('token', data.token);
             alert(data.message);
             window.location.href = '../../Pages/index.html';
         } else {
             const errorData = await response.json();
             alert(errorData.message);
         }
     } catch (error) {
         console.error('Error:', error);
     }
};
 