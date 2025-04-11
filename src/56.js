// Initialize global variables
var globalData = {
    'data': [],
    'jsonPath': '',
    'saveJsonPath': ''
};

function loadJson(filePath) {
    // Load data from JSON file
    var json = new XMLHttpRequest();
    json.open("GET", filePath, true);
    json.onload = function() {
        if (this.status === 200) {
            globalData['data'] = JSON.parse(this.response);
        }
    };
    json.send();
}

function saveJson(filePath, data) {
    // Save data to JSON file
    var json = new XMLHttpRequest();
    json.open("POST", filePath, true);
    json.setRequestHeader('Content-Type', 'application/json');
    json.onload = function() {
        if (this.status === 200) {
            globalData['jsonPath'] = filePath;
            console.log(`Saved data to ${filePath}`);
        }
    };
    json.send(JSON.stringify(data));
}

function loadAndSaveJson(filePath, jsonData) {
    loadJson(filePath);
    saveJson(filePath, jsonData);
}

// Example usage
loadAndSaveJson('path/to/your/data.json', globalData.data);
