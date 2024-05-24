//..................................................Begin Sign Up..................................................
var getnameup = document.getElementById("signupName");
var getemailup = document.getElementById("signupEmail");
var getphoneup = document.getElementById("signupPhone");
var getpassup = document.getElementById("signupPassword");
var PasswCheck = document.getElementById("PasswordCheck");
var GendarIdUp = document.getElementById("GendarId")
var usersup = JSON.parse(localStorage.getItem('usersup')) || [];

function signUp() {
    var userinformationup = {
        name: getnameup.value,
        email: getemailup.value,
        phone: getphoneup.value,
        pass: getpassup.value,
        passcheck: PasswCheck.value,
        gender: GendarIdUp.value
    };

    if (getnameup.value == "") {
        alert("Please enter your name...");
    } else if (getnameup.value.length < 10) {
        alert("Your Name is less than 10 characters...");
    } else if (getnameup.value.length > 30) {
        alert("Your Name is more than 30 characters...");
    } else if (getemailup.value == "") {
        alert("Please enter your email...");
    } else if (getphoneup.value == "") {
        alert("Please enter your Phone number...");
    } else if (getpassup.value == "") {
        alert("Please enter your password...");
    } else if (PasswCheck.value == "") {
        alert("Please check your password...");
    } else if (PasswCheck.value !== getpassup.value) {
        alert("Passwords do not match...");
    } else if (!getemailup.value.match(/^[a-z]{4,20}[0-9]{0,9}(@gmail.com|@icloud.com|@hotmail.com|@yahoo.com|@outlook.com)$/)) {
        alert("There is a problem with your email...");
    } else if (getpassup.value.length < 8) {
        alert("Your password is less than 8 characters...");
    } else if (getpassup.value.length > 30) {
        alert("Your password is more than 30 characters...");
    } else if (GendarIdUp.value == "") {
            alert("Please enter your Gender...");
    } else {
        var existingUser = usersup.find(u => u.email === userinformationup.email);
        if (existingUser) {
            alert("This email is already used. Please use another email.");
            return false;
        } else {
            alert("Welcome " + getnameup.value);
            userinformationup.clientName = getnameup.value;
            usersup.push(userinformationup);
            localStorage.setItem('usersup', JSON.stringify(usersup));
            clearValueup();
            localStorage.setItem('loggedInUser', JSON.stringify(userinformationup));
            window.location.assign("./home.html");
        }
    }
}

function clearValueup() {
    getnameup.value = "";
    getemailup.value = "";
    getphoneup.value = "";
    getpassup.value = "";
    PasswCheck.value = "";
    GendarIdUp.value = "";
}















//..................................................Begin Sign In..................................................
var getemail = document.getElementById("signInEmail");
var getpass = document.getElementById("signInPassword");
var users = JSON.parse(localStorage.getItem('users')) || [];

function login() {
    var userinformation = {
        email: getemail.value,
        pass: getpass.value,
    };

    if (getemail.value == "") {
        alert("Please enter your email...");
        return false;
    } else if (!getemail.value.match(/^[a-z]{4,20}[0-9]{0,9}(@gmail.com|@icloud.com|@hotmail.com|@yahoo.com|@outlook.com)$/)) {
        alert("There is a problem with your email...");
        return false;
    } else if (getpass.value == "") {
        alert("Please enter your password...");
    } else if (getpass.value.length < 8) {
        alert("Your password is less than 8 characters...");
        return false;
    } else if (getpass.value.length > 20) {
        alert("Your password is more than 20 characters...");
        return false;
    } else {
        var existingUser = users.find(u => u.email === userinformation.email);
        if (!existingUser) {
            alert("Email not found. Please sign up.");
            return false;
        } else if (existingUser.pass !== userinformation.pass) {
            alert("Incorrect password. Please try again.");
            return false;
        } else {
            localStorage.setItem('loggedInUser', JSON.stringify(existingUser));
            alert("Successful");
            clearValue();
            window.location.assign("page.html");
        }
    }
}

function clearValue() {
    getemail.value = "";
    getpass.value = "";
}














//..................................................Begin Display Profile Information..................................................
var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (loggedInUser) {
    document.getElementById("DispalyNameProfile").textContent = loggedInUser.name;
    document.getElementById("DispalyEmailProfile").textContent = loggedInUser.email;
    document.getElementById("DispalyPhoneProfile").textContent = loggedInUser.phone;
    document.getElementById("DispalyPasswordProfile").textContent =  loggedInUser.pass
} else {
    window.location.assign("login.html");
}














//..................................................Begin Edit Profile Information..................................................
function EditProfile() {
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    var newName = prompt("Enter your new name:", loggedInUser.name);
    var newEmail = prompt("Enter your new email:", loggedInUser.email);
    var newPhone = prompt("Enter your new phone number:", loggedInUser.phone);

    if (newName !== null && newEmail !== null && newPhone !== null) {
        loggedInUser.name = newName;
        loggedInUser.email = newEmail;
        loggedInUser.phone = newPhone;
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        document.getElementById("DispalyNameProfile").innerText = newName;
        document.getElementById("DispalyEmailProfile").innerText = newEmail;
        document.getElementById("DispalyPhoneProfile").innerText = newPhone;
        alert("Profile updated successfully!");
    } else {
        alert("Profile update cancelled.");
    }
}













//..................................................Requests..................................................
function SendRequest() {
    var selectedArea = document.getElementById("SelectArea");
    var projectNote = document.getElementById("floatingTextarea2");

    // Store the values in localStorage
    localStorage.setItem('selectedArea', selectedArea.value);
    localStorage.setItem('projectNote', projectNote.value);

    // Clear the values
    clearValues(selectedArea, projectNote);
}

function clearValues(selectedArea, projectNote) {
    selectedArea.value = "";
    projectNote.value = "";
}








function Skip() {
    // Clear the values of displayClientName, displayProjectType, and displayProjectNote
    document.getElementById("displayClientName").textContent = "";
    document.getElementById("displayProjectType").textContent = "";
    document.getElementById("displayProjectNote").textContent = "";

    // Optionally, you can also remove the values from localStorage
    localStorage.removeItem('selectedArea');
    localStorage.removeItem('projectNote');
    localStorage.removeItem('clientName');
}
