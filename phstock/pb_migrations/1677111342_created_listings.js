migrate((db) => {
  const collection = new Collection({
    "id": "12w5st1o9347bz2",
    "created": "2023-02-23 00:15:42.509Z",
    "updated": "2023-02-23 00:15:42.509Z",
    "name": "listings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yfl3odvl",
        "name": "pharmacode",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "aafqpzb6",
        "name": "trade_charting_term",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pcsji5fx",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("12w5st1o9347bz2");

  return dao.deleteCollection(collection);
})
