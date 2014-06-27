// Improve the default prompt with hostname, process type, and version
var host = db.serverStatus().host.substr(0,4);
if (host === "coin") {
  host = "🐳";
} else if (host === "naga") {
  host = "🐠";
} else {
  host = "🐬";
}
prompt = function() { return db+" at " + host + "  > "; }
