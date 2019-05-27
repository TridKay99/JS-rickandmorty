// Name and Password from the register-form
const name = document.getElementById('name');
const pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('title', title.value);
    localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
const check = () => {

    // stored data from the register-form
    const storedName = localStorage.getItem('title');
    const storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    const userName = document.getElementById('userName');
    const userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
      alert('You are loged in.');
    }else {
      alert('ERROR.');
    }
}