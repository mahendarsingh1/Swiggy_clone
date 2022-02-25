export function fetchData(url,resolve,reject){
    fetch(url)
        .then((response) => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err) ); 
}