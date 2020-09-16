// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('tasks').findOne({ _id: new ObjectID("5f621de0a329872f24da1553") }, (error, task) => {
        if (error) {
            console.log('Unable to fetch')
        }

        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            console.log('Unable to fetch data')
        }

        console.log(tasks)
    })
})