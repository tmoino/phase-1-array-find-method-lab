// code your solution here
function superbowlWin (record){
    const result = record.find( record => record.result === "W" );
    //const rslt = record.find( record => record.rslt === "W" );
    if (!!result){
        return result.year;
    }
    else{
        return undefined;
    }

}