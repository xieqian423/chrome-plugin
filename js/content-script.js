document.addEventListener("DOMContentLoaded", function () {
    console.log('我被执行了');
    // chrome.tabs.executeScript({
    //     code: 'document.body.style.backgroundColor="rgba(199,237,204,0.8)"'
    // })
    var box = document.getElementById('js-repo-pjax-container')
    var pannel = document.createElement('div');
    pannel.classList.add('github-test-wind')
    var html = "";
    html += "<ul>";
    html += "<li>1</li>";
    html += "</ul>";

    pannel.innerHTML = html;
    box.appendChild(pannel)
})