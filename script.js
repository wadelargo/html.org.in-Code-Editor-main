// Initialize CodeMirror editor
var editor = CodeMirror(document.getElementById('editor'), {
    lineNumbers: true,
    mode: 'javascript'
});

// Run button click handler
document.getElementById('run-btn').addEventListener('click', function() {
    var code = editor.getValue();
    fetch('/run', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: code })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').textContent = data.output;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
