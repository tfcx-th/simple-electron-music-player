const { ipcRenderer } = require('electron')
const { $ } = require('./helper')

$('add-music-button').addEventListener('click', () => {
  ipcRenderer.send('add-music-window')
})

const renderListHTML = tracks => {
  const tracksList = $('tracks-list')
  const tracksListHTML = tracks.reduce((html, track) => {
    html += `
      <li class="row music-track list-group-item d-flex justify-content-between align-items-center">
        <div class="col-10">
          <i class="fas fa-music mr-2 text-secondary"></i>
          <b>${track.fileName}</b>
        </div>
        <div class="col-2">
          <i class="fas fa-play mr-4"></i>
          <i class="fas fa-trash-alt"></i>
        </div>
      </li>`
    return html
  }, '')
  const emptyTrackHTML = `<div class="alert alert-primary">还没有添加任何音乐</div>`
  tracksList.innerHTML = tracks.length ? `<ul class="list-group">${tracksListHTML}</ul>` : emptyTrackHTML
}

ipcRenderer.on('getTracks', (event, tracks) => {
  renderListHTML(tracks)
})