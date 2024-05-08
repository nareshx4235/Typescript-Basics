//Enum: Enumeration: data types: hold the set of constants
//numeric
//string
//heterogeneous
//enum will be in incremental order(+1))
//numeric:
var Browser;
(function (Browser) {
    Browser[Browser["firefox"] = 0] = "firefox";
    Browser[Browser["safari"] = 1] = "safari";
    Browser[Browser["edge"] = 2] = "edge";
    Browser[Browser["chrome"] = getVersion('chrome')] = "chrome";
})(Browser || (Browser = {}));
function getVersion(browserName) {
    if (browserName == "chrome") {
        return 115;
    }
    return -1;
}
console.log(Browser.chrome);
//string Enum:
var environment;
(function (environment) {
    environment["DEV"] = "dev";
    environment["QA"] = "qa";
    environment["STAGE"] = "stage";
    environment["PROD"] = "prod";
})(environment || (environment = {}));
console.log(environment);
console.log(environment["STAGE"]);
//heterogeneous Enum:
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status[Status["DEACTIVE"] = 1] = "DEACTIVE";
    Status[Status["PENDING"] = 2] = "PENDING";
})(Status || (Status = {}));
console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);
