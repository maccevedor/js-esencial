const assert = require('assert')
function getAnimals(fetch,id){
    return fetch('http://api.animalfarmgamew.com/animals/'+id )
    .then(response => response.json())
    .then(data => data.results[0])
}



/*
getAnimals(windows.fetch,123)
    .then(animal =>
        document.querySelector('.animal').innerHTML = animal.name);
*/

describe('getAnimals',()=>{
    it('calls fetch with the correct url',()  =>{
        const fakeFetch = url =>{
            assert(
                url ===
                'http://api.animalfarmgamew.com/animaals/123'
            )

            return new Promise(function(resolve){

            })
        }
        getAnimals(fakeFetch,123)
    })
    
    it('parses the reponse of fetch correctly', (done)=>{
        const fakeFetch = urel=>{
            return Promise.resolve({
                json: () => Promise.resolve({
                    
                    results:[{
                        name: 'lion',
                        type: 'dragon'
                    }]
                    
                })
            }) 
        }

        getAnimals(fakeFetch,12345)
        .then(result => 
            assert(result.name === 'lion')
            done()_
    })
})


