function validateForm() {
    let a = document.forms["myForm"]["firstName"].value;
    let b = document.forms["myForm"]["lastName"].value;
    let c = document.forms["myForm"]["email"].value;
    let d = document.forms["myForm"]["number"].value;
    let e = document.forms["myForm"]["comments"].value;

    if (a == "") {
      alert("Name must be filled out");
    }
    if (b == "") {
      alert("Last Name must be filled out");
    }
    if (c == "") {
      alert("Email must be filled out");
    }
    if (d == "") {
      alert("Phone Number must be filled out");
    }
    if (e == "") {
      alert("Comments must be filled out");

    }


  }