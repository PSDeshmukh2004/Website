function showTechnique(id) {
    var infoSections = document.querySelectorAll('.technique-info');
    infoSections.forEach(function(section) {
        section.style.display = 'none';
    });
    var techniqueInfo = document.getElementById(id);
    techniqueInfo.style.display = 'block';
}
