const startButton = document.getElementById('startButton')
const progressBar = document.getElementById('progressBar')
const statusText = document.getElementById('statusText')

startButton.addEventListener('click', startLoading)
let loadingInterval;

function startLoading() {
    startButton.disabled = true
    let progress = 0

    if (loadingInterval) {
        clearInterval(loadingInterval)
    }

    loadingInterval = setInterval(() => {
        progress += 1
        progressBar.style.width = `${progress}%`
        statusText.textContent = `Progress: ${progress}%`
        if (progress >= 100) {
            clearInterval(loadingInterval)
            startButton.disabled = false
        }
    }, 100)
}