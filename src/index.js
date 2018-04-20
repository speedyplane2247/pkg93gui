function checkRepo(repo) {
    document.getElementById("consoleoutput") = $exe("pkg93 add-repo "+repo) + pkg93.pull()
    getInstalled();
}
function deleteRepo(repoX) {
    document.getElementById("consoleoutput") = $exe("pkg93 rm-repo "+repoX) + pkg93.pull()
}
function install(toInstall) {
    document.getElementById("consoleoutput") = pkg93.get(toInstall)
}
function listPackage() {
    pkg93.pull()
    document.getElementById("packagelist") = pkg93.getConfig().pkglist
}
function getInstalled() {
    document.getElementById("installedpkg") = pkg93.getConfig().installed
}
function Uninstall(toUninstall) {
    document.getElementById("consoleoutput") = pkg93.rm(toUninstall)
}
