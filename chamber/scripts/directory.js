const companies = 'data.json';

async function getdirectorydata(companies) {
    const response = await fetch (companies);
    const x = await response.json();
    //console.table(x.directory);
    displaydirectory(x.directory);
    
}
getdirectorydata(companies);