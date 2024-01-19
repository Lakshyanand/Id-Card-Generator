function generateCard() {

    document.getElementById('id-card').style.display = 'block';
    const name = document.getElementById('inputName').value;
    const college = document.getElementById('inputCollege').value;
    const location = document.getElementById('inputLocation').value;

    document.getElementById('nameElement').innerHTML = 'Name: '+name;
    document.getElementById('collegeElement').innerHTML = 'College: '+college;
    document.getElementById('locationElement').innerHTML = 'Location: '+location;

}

