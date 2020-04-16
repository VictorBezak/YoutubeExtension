/**
 * Open and close the show more menu for the first video in the playlist.
 */
function toggleMenu() {
    document.getElementsByClassName('dropdown-trigger style-scope ytd-menu-renderer')[1].click()
}

/**
 * Click "Remove from Watch later" for a video that has not been removed from Youtube.
 */
function rmExistingVideo() {
    document.getElementsByClassName('style-scope ytd-menu-service-item-renderer')[6].click()
}

/**
 * Click "Remove from Watch later" for a video that has been removed or cannot be found.
 */
function rmLostVideo() {
    document.getElementsByClassName('style-scope ytd-menu-service-item-renderer')[0].click()
}

/**
 * Open menu for the first video in the playlist and fire the appropriate removal function.
 * 
 * Currently, this function will always fire both removal functions. rmExistingVideo always
 * fails if the current video has been removed from Youtube and rmLostVideo always fails
 * if the current video still exists. But failure does not cause any error for the user,
 * so we always fire both to ensure that regardless of the status of the current video,
 * it will always be removed.
 */
async function removeVideo() {
    await toggleMenu()
    rmExistingVideo()
    rmLostVideo()
}

/**
 * The setInterval function will execute the method continuously, at a specified interval.
 * 
 * param1 = method for execution
 * param2 = interval for execution in milliseconds (i.e. 1000 == 1 second)
 */
t = setInterval(removeVideo, 200)

clearInterval(t)  // Use this to halt execution of the method
