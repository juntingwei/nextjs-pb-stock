migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("12w5st1o9347bz2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lbg7wehi",
    "name": "user_id",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("12w5st1o9347bz2")

  // remove
  collection.schema.removeField("lbg7wehi")

  return dao.saveCollection(collection)
})
