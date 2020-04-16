function toggleMenu() {
    document.getElementsByClassName('dropdown-trigger style-scope ytd-menu-renderer')[1].click()
}

function rmGoodVideo() {
    document.getElementsByClassName('style-scope ytd-menu-service-item-renderer')[6].click()
}

function rmBadVideo() {
    document.getElementsByClassName('style-scope ytd-menu-service-item-renderer')[0].click()
}

async function clearWatchLater() {
    await toggleMenu()
    rmGoodVideo()
    rmBadVideo()
}

t = setInterval(clearWatchLater, 100)

clearInterval(t)
