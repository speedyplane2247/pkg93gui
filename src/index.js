var branchname = "untested" // used for finding what HTML file to find.
function updateRepo() {
    var repo = $prompt('Repo to add?', '')
    document.getElementById("consoleoutput") = $exe("pkg93 add-repo "+repo) + pkg93.pull()
    getInstalled();
}
function deleteRepo() {
    var repoX = $prompt('Repo to remove?','')
    document.getElementById("consoleoutput") = $exe("pkg93 rm-repo "+repoX) + pkg93.pull()
}
function install () {
    var toInstall = $prompt("Package to install?","")
    document.getElementById("consoleoutput") = pkg93.get(toInstall)
}
function listPackage() {
    pkg93.pull()
    document.getElementById("packagelist") = pkg93.getConfig().pkglist
}
function getInstalled() {
    document.getElementById("installedpkg") = pkg93.getConfig().installed
}
function Uninstall() {
    var toUninstall = $prompt("Package to uninstall?","")
    document.getElementById("consoleoutput") = pkg93.rm(toUninstall)
}
var PKG93GUI = $window({url: 'http://speedyplane2247.github.io/temp/'+branchname+'BRANCH.html', title: 'pkg93GUI', width: 500, height: 500});
// Backend 1.2
