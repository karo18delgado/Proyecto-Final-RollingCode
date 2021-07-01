<div align="center">
  <img alt="react-sketchapp" src="https://www.apple.com/v/accessibility/p/images/overview/hero_logo__bchmmzjnvys2_large_2x.png" style="max-height:150px; width:80; height: auto; max-width:100%" />
</div>
<div align="center">
  <strong>AppleRollStore</strong>
</div>


---


# Proyecto Final-Rolling Code :rocket:
Página de venta de productos específicos.
El Scope(alcance) del proyecto es la maquetación de páginas en react con bootstrap/React-Bootstrap. 
Navegación con react-router-dom. División de tareas, planning, daily-meeting y uso de tablero en trello.
Backend API rest con express. Se administra base de datos con mongo con ORM mongoose y servicio atlas cloud.

Specific product sales page.
The scope of the project is the page layout in react with bootstrap / React-Bootstrap.
Navigation with react-router-dom. Division of tasks, planning, daily-meeting and use of the board in trello.
Backend API rest with express. Database is managed with mongo with mongoose ORM and atlas cloud service.

## View a demo :pushpin:
[https://proyecto-final-rolling-code.vercel.app/](https://proyecto-final-rolling-code.vercel.app/)

## Installation :wrench:

Use the package manager [npm](https://www.npmjs.com/).

```bash
$ git clone https://github.com/karo18delgado/Proyecto-Final-RollingCode.git
$ cd ../path/to/the/file
$ npm install
$ npm start


```
## About the fronted app :computer:
The frontend has a **section for administrators** and a **section for users**, where you can see the products by categories and a section about us.

###### Functionalities in administration :
- CRUD of products.
- User Registration. See detail, delete and disable user.
- CRUD of messages sent by users.
###### Functionalities in web users :
- Products divided by categories.
- See product detail.
- Sending product to shopping cart.
- Remove product from shopping cart.
- Form to send inquiries in footer.

## About the backend app :gear:
###### Routes:
```Ruby
'/api/usuarios', usuariosRoutes:

- router.post('/', usuarioValidations.crearUsuario, usuarioController.crearUsuario);
- router.delete('/:usuarioID', usuarioController.deleteUsuario);
- router.get('/', usuarioController.getUsuarios);
- router.get('/:usuarioID', usuarioController.getUsuario);
- router.put('/', authMiddleware, usuarioController.updateUser);

'/api/auth', authRoutes:
- router.post('/register', usuarioValidations.crearUsuario, authController.register);
- router.post('/login',
    [ check('email', 'Agrega un Email Valido').isEmail(),
      check('password', 'El password debe tener mínimo de 6 caracteres').isLength({ min: 6 }),], authController.login);
- router.get('/', authMiddleware, authController.getUser);

- router.post('/mensaje', mensajeController.enviarMensaje);
- router.get('/mensaje', mensajeController.recibirMensajes);
- router.get('/mensaje/:mensajeID', mensajeController.recibirMensaje);
- router.put('/mensaje', mensajeController.actualizarMensaje);
- router.delete('/mensaje/:mensajeID', mensajeController.eliminarMensaje);
- router.put('/usuarios', authMiddleware, authController.updateUserAdmin);

'/api/productos', productoRoute:
- router.post('/', productoController.createProducto);
- router.get('/:productoId', productoController.getProducto);
- router.get('/', productoController.getProductos);
- router.delete('/:productoId', productoController.deleteProducto);
- router.put('/', productoController.updateProducto);

'/api/ventas', ventasRoutes:
- router.post('/', ventaController.ventaProducto);
- router.get('/', ventaController.getVentas);
```
## Authors :black_nib:
* **Agustín Gómez Urrutia**  - [agustingu20](https://github.com/agustingu20)
* **Ana Carolina Delgado** - [karo18delgado](https://github.com/karo18delgado)
* **Nicolas Gómez** - [nicolasgomez2093](https://github.com/nicolasgomez2093)
* **Rosendo Alves** - [chendo098](https://github.com/chendo098)

## Libraries :books:
- Axios
- Bootstrap
- React-bootstrap
- React-router-dom
- SweetAlert
- React-Credits-cards
## Frameworks :toolbox:
- Express



