function showTopic(id) {
    var infoSections = document.querySelectorAll('.topic-info');
    infoSections.forEach(function(section) {
        section.style.display = 'none';
    });
    var topicInfo = document.getElementById(id);
    topicInfo.style.display = 'block';
}
