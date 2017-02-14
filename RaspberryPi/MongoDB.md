Instalar Servidor MongoDB 
---  
* Cuando se instale un programa, actualizar la lista de paquetes del OS.
~~~bash
$ sudo apt-get update
$ sudo apt-get upgrade
~~~

1. Instala servidor mongoDB.  
  ~~~bash
  $ sudo apt-get install mongodb-server
  ~~~  
  + Los binarios son guardados en `/usr/bin/`
  + Los datos son guardados en `/var/lib/mongodb`

2. Inicia el servidor mongoDB.  
  ~~~bash
  $ sudo service mongodb start
  ~~~

3. Valida que se haya instalado todo bien, ejecutando el shell de mongodb.  
  ~~~bash
  $ mongo
  $ MongoDB shell version: 2.4.10
  $ connecting to: test
  ~~~

