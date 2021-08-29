const pool = require('../db/dbconexion');

const getCliente = async (req, res) => {
    const response = await pool.query('SELECT * FROM cliente');
    res.status(200).json(response.rows);
}

const newCliente = async (req, res) => {
    const { tipodni, dni, apellido, nombre, email, telefono } = req.body;
    const response = await pool.query('INSERT INTO cliente (cliente_dni_tp, cliente_dni, cliente_apellido, cliente_nombre, cliente_email, cliente_telefono) VALUES($1, $2, $3, $4, $5, $6)', [tipodni, dni, apellido, nombre, email, telefono]);
    console.log(response);
    res.json({message: 'Datos registrados con correctamente'});
}

module.exports = {
    getCliente,
    newCliente
}