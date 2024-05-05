function showDetails(id) {
    var details = document.querySelectorAll('.class-details');
    details.forEach(function(detail) {
        detail.style.display = 'none';
    });
    var classDetails = document.getElementById(id);
    classDetails.style.display = 'block';
}
