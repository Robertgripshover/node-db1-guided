
const db = require('../../data/db-config')

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  // const result = await db.raw('select * from shippers;')
  const result = await db('shippers') //this is getting all the shippers
    // .select('phone', 'shippername') //this is selecting just some specific columns
  return result
}

async function getById(shipperId) {
  const result = await db('shippers').where('shipperid', shipperId).first() //this line is saying
  // the result is under the coulun shippering where the shipper id 'is', the shipper id 
  //that was passed into the getById function
  return result
}

async function create(shipper) {
  const [shipperId] = await db('shippers').insert(shipper)
  const result = await getById(shipperId)
  return result
}

async function update(shipperId, changes) {
  await db('shippers').update(changes).where('shipperid', shipperId)
  const result = await getById(shipperId)
  return result
}

async function remove() {
  return 'delete wired'
}
