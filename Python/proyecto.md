Crear Proyecto en Python con entorno Virtual
---

Se crea un entorno virtual para solamente instalar los paquetes de manera **local** al proyecto y no de manera **global** en el sistema operativo. Previamente se debe tener instalado **pip** ya sea para python 2 o 3 .

#### Pasos para crear un proyecto:  
---

1. Crear el directorio del proyecto.  

  ~~~console
  $ mkdir MyRestAPI
  $ cd MyRestAPI
  ~~~

2. Crear un entorno virtual.
  Vamos a crear un entorno virtual (también llamado un virtualenv). Aislará la configuración Python/Flask en base de cada proyecto, lo que significa que cualquier cambio que realice en un proyecto no afectará a otros que también estés desarrollando.
  
  >Mac OS X, Linux y Windows  
  ~~~console
  $ python3 -m venv MyRestAPIEnv
  ~~~
  
  Este comando creará una carpeta llamada "MyRestAPIEnv" que contiene nuestro entorno virtual básicamente un monton de archivos y carpetas.

3. Activar el entorno Virtual
  Ahora activaremos nuestro entorno virtual para poder trabajar sobre él y que las configuraciones y descargas de paquetes que hagamos esten solamente en nuestro Proyecto y no de forma global.  
  
  >Windows:    
  
  ~~~console
  C:\Users\Name\MyRestAPI> MyRestAPIEnv\Scripts\activate
  ~~~
  
  >Mac OS X y Linux:  
  
  ~~~bash
  ~/MyRestAPI $ . MyRestAPIEnv/bin/activate
  ~~~
  
  _Sabrás que tienes el entorno virtual activado cuando veas este mensaje en la consola._
  
  >Windows:
  
  ~~~bash
  (MyRestAPIEnv) C:\Users\Name\MyRestAPI>
  ~~~
  
  >Mac OS X y Linux:
  
  ~~~bash
  (MyRestAPIEnv) ~/MyRestAPI $
  ~~~

