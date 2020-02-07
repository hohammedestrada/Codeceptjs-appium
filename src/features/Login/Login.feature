Feature: Ingresar el ingreso al app como Gerente de Zona
  Como una Gerente de Zona
  Yo quiero ingresar al app Crecer es Ganar
  para ver mi ventas
   
@Login @LoginExitoso
Scenario Outline:  Login exitoso
    Given he seleccionado el "<Pais>" e ingresado la "<Region>" o "<Zona>" o "<Seccion>" y el "<Password>"
    When  click en el boton "Ingresar" 
    Then  puedo ver mi indicador de VENTA NETA, PEDIDOS Y RUTAS DE DESARROLLO

Examples:
  |Pais      |Region    |Zona     |Seccion      |Password     |
  |Ecuador   |16        |1611     |             |123456       |
  
#0021515730 pass;0021515730
#0020750091  pass:0020750091
#0020647614  pass:0020647614
#@login @LoginFallido
#Scenario Outline:  Login Fallido
   #Given Ingreso el "<Pais>"  mi "<Usuario>" y mi "<Password>"
  #When  click en el boton "Ingresa a tu cuenta" 
  # Then  me debe mostrar el "<Mensaje>" en el "<TipoForm>"

#Examples:
 #   |Pais   | Usuario            | Password   |  Mensaje                                      | TipoForm |
  #  |PE     |                    | 039926806  | Debe ingresar el Usuario.                     | PopUp|
    #|PE     | 039926806          |            | Debe ingresar la Clave Secreta.               | PopUp |
   # |CO     | 0021594477         | 0021594477 | Mensaje: Su cuenta fue bloqueada, por superar la cantidad maxima de intento ||
    #|CO     | 0020587705         | 0020587705 | Mensaje: No estás autorizada para pasar pedido| |
    #|CO     | 0021515730         | 0021515730 | Mensaje: Usuario o Contraseña Incorrectas||
