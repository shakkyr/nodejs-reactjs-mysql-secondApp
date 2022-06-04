const express = require('express');
const app = express();
const cors = require('cors')


app.use(express.json())
app.use(cors())

const db = require('./models')


const taskRouter = require('./routes/Tasks.Routes')
app.use('/tasks', taskRouter)

const workersRouter = require('./routes/Workers.Route')
app.use('/workers', workersRouter)



db.sequelize.sync().then(()=> {
    app.listen(3001, () => {
        console.log('server runing on port 3001')
    })

})