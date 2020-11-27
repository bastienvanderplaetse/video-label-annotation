var videos = new Array();
var currentVideo = -1;
var languages = {
    0: "Other",
    1: "Nothing",
    2: "French",
    3: "English",
    4: "Italian",
    5: "Spanish",
    6: "Russian"
};

var annotations = {};

$(document).ready(function() {
    $('#file-upload').on("change", function() {
        currentVideo = -1;
        videos = new Array();
        for (var i=0; i < $(this).get(0).files.length; i++){
            videos.push("videos/" + $(this).get(0).files[i].name)
        }
        
        setNextVideo();
        enableForm();
    });
    
    $('#language-select').on("change", function() {
        if ($(this).get(0).options.selectedIndex == 0) {
            $("#language-input").get(0).disabled = false;
        } else {
            $("#language-input").get(0).disabled = true;
        }
    });
    
    $("button[id='submit-btn']").click(function() {
        updateData();
    });
    
    populateLanguages();
});

function setNextVideo() {
    currentVideo++;
    if (currentVideo >= videos.length) {
        alert("All videos were annotated !");
        download();
    } else {
        videojs("my-video").src([{type: "video/mp4", src: videos[currentVideo]}])
    }
}

function download() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + JSON.stringify(annotations));
    element.setAttribute('download', 'annotations.json');
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
}

function updateData() {
    var selectedIndex = $("#language-select option:selected").get(0).index;
    if (selectedIndex == 0) {
        var index = Object.keys(languages).length;
        var language = $("#language-input").get(0).value;
        languages[index] = language;
        addLanguage(index);
        selectedIndex = index;
    }
    annotations[videos[currentVideo].replace("videos/", "")] = languages[selectedIndex]
    setNextVideo();
}

function populateLanguages() {
    for (var x in languages) {
      addLanguage(x, languages[x]);
    }
}

function addLanguage(index, language) {
    $("#language-select").append('<option value="'+ index + '">' + languages[index] + '</option>');
}

function enableForm() {
    $("#language-select").get(0).disabled = false;
    $("#language-input").get(0).disabled = false;
    $("#submit-btn").get(0).disabled = false;
}