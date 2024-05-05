function showDetails(id) {
    var details = document.querySelectorAll('.herb-details');
    details.forEach(function(detail) {
        detail.style.display = 'none';
    });
    var herbDetails = document.getElementById(id);
    herbDetails.style.display = 'block';
}
