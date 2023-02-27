migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("12w5st1o9347bz2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "akyz64vn",
    "name": "units",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("12w5st1o9347bz2")

  // remove
  collection.schema.removeField("akyz64vn")

  return dao.saveCollection(collection)
})
