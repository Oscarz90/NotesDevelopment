# Flask a Python Framework  

#### Instalar Python
===

>Activar el entorno virtual del proyecto para solo instalar Flask en este directorio y no en todo el OS.

~~~bash
$ pip install Flask
~~~

#### Solución a los errores comunes.
===

+ **Error** _Flask Server_

  ~~~bash
  [Error 48] Address already in use
  ~~~
  
  Solución:
  ~~~bash
  lsof -i :5000
  ~~~
  
