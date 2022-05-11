function switchVisible () {
    if (document.getElementById('ratingDiv')) {
        if (document.getElementById('ratingDiv').style.display == 'none') {
            document.getElementById('thankyouDiv').style.display = 'block';
            document.getElementById('thankyouDiv').style.display = 'none';
        }
        else {
            document.getElementById('ratingDiv').style.display = 'none';
            document.getElementById('thankyouDiv').style.display = 'block';
        }
    }
}
