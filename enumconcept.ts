//Enum: Enumeration: data types: hold the set of constants
//numeric
//string
//heterogeneous
//enum will be in incremental order(+1))
//numeric:
enum Browser{
    firefox, 
    safari, 
    edge, 
    chrome=getVersion('chrome'),
}

function getVersion(browserName: string): number{
    if (browserName == "chrome") {
        return 115;
    }
    return -1;
}
console.log(Browser.chrome);


//string Enum:
enum environment{
    DEV = "dev",
    QA = "qa",
    STAGE = "stage",
    PROD= "prod"
}
console.log(environment);
console.log(environment["STAGE"]);


//heterogeneous Enum:
enum Status{
    ACTIVE = 'active',
    DEACTIVE = 1,
    PENDING
}
console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);




