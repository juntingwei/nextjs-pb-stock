migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("12w5st1o9347bz2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lbnttrxx",
    "name": "price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vb6cfdv7",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("12w5st1o9347bz2")

  // remove
  collection.schema.removeField("lbnttrxx")

  // remove
  collection.schema.removeField("vb6cfdv7")

  return dao.saveCollection(collection)
})
