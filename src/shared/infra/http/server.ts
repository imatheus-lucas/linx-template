import 'reflect-metadata'
import server from './app';



server.listen(3333, () => console.log('server started on 🔥'));
server.setTimeout(120000);
