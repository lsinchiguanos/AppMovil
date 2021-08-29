const pool = require('../db/dbconexion');

// Usuario
const newUsuario = async (req, res) => {
    const { nickname, pass, rol } = req.body;
    const response = await pool.query('SELECT SP_newUsuario($1, $2, $3)', [nickname, pass, rol]);
    console.log(response.rows[0].sp_newusuario);
    res.status(200).json({ message: response.rows[0].sp_newusuario });
}

const udpUsuario = async (req, res) => {
    const id = req.params.id;
    const { nickname, pass, rol } = req.body;
    const response = await pool.query('SELECT SP_udpUsuario($1, $2, $3, $4)', [nickname, pass, rol, id]);
    console.log(response.rows[0].sp_udpusuario);
    res.status(200).json({ message: response.rows[0].sp_udpusuario });
}

const delUsuario = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT SP_deleteUsuario($1)', [id]);
    console.log(response.rows[0].sp_deletepersona);
    res.status(200).json({ message: response.rows[0].sp_deleteusuario });
}

const seaUsuario = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM SP_seaUsuario($1);', [id]);
    res.json(response.rows);
}

const getUsuario = async (req, res) => {
    const response = await pool.query('SELECT * FROM sp_allUsuario();');
    res.json(response.rows);
}

// Personas
const newPersona = async (req, res) => {
    const { dni_tp, dni, apellido, nombre, email, telefono, imagen, usuario } = req.body;
    const response = await pool.query('SELECT SP_newPersona($1, $2, $3, $4, $5, $6, $7, $8)', [dni_tp, dni, apellido, nombre, email, telefono, imagen, usuario]);
    console.log(response.rows[0].sp_newpersona);
    res.status(200).json({ message: response.rows[0].sp_newpersona });
}

const udpPersona = async (req, res) => {
    const id = req.params.id;
    const { dni_tp, dni, apellido, nombre, email, telefono, imagen, usuario } = req.body;
    const response = await pool.query('SELECT SP_udpPersona($1, $2, $3, $4, $5, $6, $7, $8, $9)', [dni_tp, dni, apellido, nombre, email, telefono, imagen, usuario, id]);
    console.log(response.rows[0].sp_udppersona);
    res.status(200).json({ message: response.rows[0].sp_udppersona });
}

const delPersona = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT SP_deletePersona($1)', [id]);
    console.log(response.rows[0].sp_deletepersona);
    res.status(200).json({ message: response.rows[0].sp_deletepersona });
}

const seaPersona = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM SP_seaPersona($1);', [id]);
    res.json(response.rows);
}

const getPersona = async (req, res) => {
    const response = await pool.query('SELECT * FROM sp_allPersona();');
    res.json(response.rows);
}

/* ROLES */
const newRol = async (req, res) => {
    const { nombre, descripcion } = req.body;
    const response = await pool.query('SELECT sp_newRol($1, $2)', [nombre, descripcion]);
    console.log(response.rows[0].sp_newrol);
    res.status(200).json({ message: response.rows[0].sp_newrol });
}

const udpRol = async (req, res) => {
    const id = req.params.id;
    const { nombre, descripcion } = req.body;
    const response = await pool.query('SELECT SP_udpRol($1, $2, $3)', [nombre, descripcion, id]);
    console.log(response.rows[0].sp_udprol);
    res.status(200).json({ message: response.rows[0].sp_udprol });
}

const delRol = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT SP_deleteRol($1)', [id]);
    console.log(response.rows[0].sp_deleterol);
    res.status(200).json({ message: response.rows[0].sp_deleterol });
}

const seaRol = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM SP_seaRol($1);', [id]);
    res.json(response.rows);
}

const getRol = async (req, res) => {
    const response = await pool.query('SELECT * FROM sp_allRol();');
    res.json(response.rows);
}

// Producto
const newProducto = async (req, res) => {
    const { codigo, nombre, descripcion, imagen, stock, precio, descuento } = req.body;
    const response = await pool.query('SELECT SP_newProducto($1, $2, $3, $4, $5, $6, $7)', [codigo, nombre, descripcion, imagen, stock, precio, descuento]);
    console.log(response.rows[0].sp_newproducto);
    res.status(200).json({ message: response.rows[0].sp_newproducto });
}

const udpProducto = async (req, res) => {
    const id = req.params.id;
    const { codigo, nombre, descripcion, imagen, stock, precio, descuento } = req.body;
    const response = await pool.query('SELECT SP_udpProducto($1, $2, $3, $4, $5, $6, $7, $8)', [codigo, nombre, descripcion, imagen, stock, precio, descuento, id]);
    console.log(response.rows[0].sp_udpproducto);
    res.status(200).json({ message: response.rows[0].sp_udpproducto });
}

const delProducto = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT SP_deleteProducto($1)', [id]);
    console.log(response.rows[0].sp_deleteproducto);
    res.status(200).json({ message: response.rows[0].sp_deleteproducto });
}

const seaProducto = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM SP_seaProducto($1);', [id]);
    res.json(response.rows);
}

const getProducto = async (req, res) => {
    const response = await pool.query('SELECT * FROM sp_allProducto();');
    res.json(response.rows);
}

// Encabezado
// GET
const ultimoEncabezado = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT SP_ultVentaEncabezado($1)', [id]);
    console.log(response.rows[0].sp_ultventaencabezado);
    res.status(200).json({ message: response.rows[0].sp_ultventaencabezado });
}

//post
const newEncabezado = async (req, res) => {
    const { anio, mes, dia, secuencial, persona } = req.body;
    const response = await pool.query('SELECT SP_newVentaEncabezado($1, $2, $3, $4, $5)', [anio, mes, dia, secuencial, persona]);
    console.log(response.rows[0].sp_newventaencabezado);
    res.status(200).json({ message: response.rows[0].sp_newventaencabezado });
}

//PUT
const deleteEncabezado = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT SP_deleteVentaEncabezado($1)', [id]);
    console.log(response.rows[0].sp_deleteventaencabezado);
    res.status(200).json({ message: response.rows[0].sp_deleteventaencabezado });
}

//PUT
const pagarEncabezado = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT SP_pagarVentaEncabezado($1)', [id]);
    console.log(response.rows[0].sp_pagarventaencabezado);
    res.status(200).json({ message: response.rows[0].sp_pagarventaencabezado });
}

//GET;ID
const buscarEncabezado = async (req, res) => {
    const id = req.params.id;
    const { estado } = req.body;
    const response = await pool.query('SELECT * FROM SP_seaVentaEncabezado($1, $2);', [estado, id]);
    res.json(response.rows);
}

//GET
const getEncabezados = async (req, res) => {
    const response = await pool.query('SELECT * FROM SP_allVentaEncabezado();');
    res.json(response.rows);
}

/* DETALLE */
//POST
const registradetalle = async (req, res) => {
    const { encabezado, producto, precio, cantidad, descuento } = req.body;
    const response = await pool.query('SELECT SP_newVentaDetalle($1, $2, $3, $4, $5)', [encabezado, producto, precio, cantidad, descuento]);
    console.log(response.rows[0].sp_newventadetalle);
    res.status(200).json({ message: response.rows[0].sp_newventadetalle });
}

//PUT
const actualizaDetalle = async (req, res) => {
    const id = req.params.id;
    const { producto, precio, cantidad, descuento } = req.body;
    const response = await pool.query('SELECT SP_actualizarVentaDetalle($1, $2, $3, $4, $5, $6, $7, $8)', [id, producto, precio, cantidad, descuento]);
    console.log(response.rows[0].sp_actualizarventadetalle);
    res.status(200).json({ message: response.rows[0].sp_actualizarventadetalle });
}

//PUT
const pagarDetalle = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT SP_pagarVentaDetalle($1)', [id]);
    console.log(response.rows[0].sp_pagarventadetalle);
    res.status(200).json({ message: response.rows[0].sp_pagarventadetalle });
}

// DELETE
const eliminarDetalle = async (req, res) => {
    const id = req.params.id;
    const { producto } = req.body;
    const response = await pool.query('SELECT SP_deleteVentaDetalle($1, $2)', [id, producto]);
    console.log(response.rows[0].sp_deleteventadetalle);
    res.status(200).json({ message: response.rows[0].sp_deleteventadetalle });
}

//PUT
const gggDetalle = async (req, res) => {
    const id = req.params.id;
    const { producto, estado } = req.body;
    const response = await pool.query('SELECT SP_estadosVentaDetalle($1, $2, $3)', [id, producto, estado]);
    console.log(response.rows[0].sp_estadosventadetalle);
    res.status(200).json({ message: response.rows[0].sp_estadosventadetalle });
}

module.exports = {
    newUsuario,
    udpUsuario,
    delUsuario,
    seaUsuario,
    getUsuario,
    newPersona,
    udpPersona,
    delPersona,
    seaPersona,
    getPersona,
    newRol,
    udpRol,
    delRol,
    seaRol,
    getRol,
    newProducto,
    udpProducto,
    delProducto,
    seaProducto,
    getProducto,
    ultimoEncabezado,
    newEncabezado,
    deleteEncabezado,
    pagarEncabezado,
    buscarEncabezado,
    getEncabezados,
    registradetalle,
    actualizaDetalle,
    pagarDetalle,
    eliminarDetalle,
    gggDetalle
}