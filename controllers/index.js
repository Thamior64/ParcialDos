const items = [
    {id: 1, name: 'estudianteUno'},
];

const index = (req, res) => {
    res.render('index', {
        title: 'Estudiantes'
    })
}

const listaDeEstudiantes = (req, res, next) => {
    res.render('products', {
        title: 'lista de estudiantes',
        items: items
    });
}

const agregarEstudiante = (req, res, next) => {
    const { nuevoEstudiante } = req.body;
    items.push({
        id: items.length + 1,
        name: nuevoEstudiante
    });
    res.redirect('/products');
}

module.exports = {
    index,
    listaDeEstudiantes,
    agregarEstudiante
}

