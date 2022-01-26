
const Strings = (redis) => {
  redis.set('name', 'test_user', 'EX', 5)
redis.get('name', (err, result) => {
  console.log(result)
})

redis.get('address', (err, result) => {
  console.log(result)
})

redis.incrby('address', 2)
redis.get('address', (err,result) => {
  console.log(result)
})

redis.mset('street',  'LBS', 'city', 'Mumbai')
redis.mget('street', 'city', (err, result) => {
  console.log(result)
})

}

export default Strings