
import app from './app'
import {createConnection} from './db'

createConnection()
app.listen(app.get('port'))
console.log('hello sortodev server on listen on port 3000')