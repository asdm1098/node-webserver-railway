

const http = require('http');

http.createServer( (req, res) => {

    // res.writeHead(200, { 'Content-Type': 'application/json'});
    // const persona = {
    //     id: 1, 
    //     name: 'Stiven'
    // };

    // res.write( JSON.stringify(persona) );
    // res.end();

    // res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv'});

    // res.write( 'id, name\n' );
    // res.write( '1, Stiven\n' );
    // res.write( '2, Diaz\n' );
    // res.write( '3, Meneses\n' );
    // res.end();

    res.write( 'Hola mundo' );
    res.end();


})
.listen( 8082 );

console.clear();
console.log('Escuchando en el puerto 8082');