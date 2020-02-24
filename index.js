
const show = require('./lib/showPage')
const get = require('./lib/getPage')

const r = get.getPage('DogRun').then( data => {
  const d2 = show.dparse(data)
  const lines = show.show(d2, 'root')
  console.log(lines.join('\n'))
})

//curl -s -X POST https://dynalist.io/api/v1/doc/read -d @dtokenDogRun
//{ "token": "-kQ4RhJCjZDQanaIna0D", "file_id": "y7dzQwJfZa7Qgeto06rSsMzX" }
