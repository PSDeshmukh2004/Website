function showService(id) {
    var details = document.querySelectorAll('.service-details');
    details.forEach(function(detail) {
        detail.style.display = 'none';
    });
    var serviceDetails = document.getElementById(id);
    serviceDetails.style.display = 'block';
}
