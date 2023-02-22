migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xq2avns03s8pu6q")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xq2avns03s8pu6q")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
})
