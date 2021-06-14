////////////////////////////////////////////////////////////////
// DOM Functions
////////////////////////////////////////////////////////////////

function getRenderedVideoList() {
    // Returns an HTML collection
    return document.querySelector('div#contents.ytd-playlist-video-list-renderer').children
}

////////////////////////////////////////////////////////////////
// Core Functions
////////////////////////////////////////////////////////////////

// Toggle video menu
function toggleVideoMenu(video) {
    video.querySelector('.dropdown-trigger').click()
}

// Remove single video
function removeVideo(videoList) {
    toggleVideoMenu(videoList[0])
    setTimeout(clickRemoveOption, 200)
}

// Click "Remove from Watch Later" on open video menu
function clickRemoveOption() {
    let menu = document.querySelectorAll('tp-yt-paper-item.ytd-menu-service-item-renderer')
    menu[2].click()
}

// Remove multiple videos
function removeFromPlaylist(videoList, amountToRemove) {
    for (let i = 0; i < amountToRemove; i++) {
        setTimeout(removeVideo(videoList), 500)
    }
}


////////////////////////////////////////////////////////////////
// Info Functions
////////////////////////////////////////////////////////////////

// Get size playlist
function getPlaylistSize() {
    let stats = document.querySelector('div#stats.ytd-playlist-sidebar-primary-info-renderer')
    return stats.querySelector('span').textContent
}

// Get video title
function getVideoTitle(video) {
    return video.querySelector('a#video-title').attributes['title'].value
}

// Get video channel name
function getVideoChannelName(video) {
    return video.querySelector('ytd-channel-name#channel-name a').textContent
}

