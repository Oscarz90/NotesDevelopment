###Instalación de software en linux

###### Contenido
1. Instalar sudo en Debian 8
2. Instalar Ant en Debian 8
3. Instalar JDK en Debian 8
4. Establecer JAVA_HOME y JRE_HOME en el PATH en Debian 8


#### Instalar sudo en Debian 8
---

1. Abrir la termina e instalar sudo.
~~~console
user@hostname:~$ apt-get install sudo
~~~

2. Configuración de sudo. 

Ahora le vamos a dar acceso sudo a nuestro usuario. Hay dos maneras:

+ Añadiendo nuestro usuario al grupo sudo con el siguiente comando (se requiere reiniciar para tomar cambios):
~~~console
user@hostname:~$ usermod -a -G sudo tuNombreDeUsuario
~~~

+ Añadiendo nuestro usuario al archivo de configuración de sudo (no requiere reiniciar):
~~~console
user@hostname:~$ nano /etc/sudoers
~~~

y debajo de la linea donde pone `root ALL=(ALL:ALL) ALL` añadimos `tuNombreDeUsuario ALL=(ALL:ALL) ALL` nos tiene que quedar algo asi:

~~~console
root              ALL=(ALL:ALL) ALL
tuNombreDeUsuario ALL=(ALL:ALL) ALL
~~~

#### Instalar Ant en Debian 8
---
~~~console
user@hostname:~$ apt-get update
user@hostname:~$ apt-get install ant
~~~

#### Instalar JDK en Debian 8
---

#### Establecer JAVA_HOME y JRE_HOME en el PATH en Debian 8
---

>El archivo .bash_profile no existe en Debian

1. Abrir el archivo profiles:

~~~console
user@hostname:~$ nano /etc/profile
~~~

2. Añadir las siguientes lineas al archivo

~~~console
...
export JAVA_HOME=/opt/jdk/jdk1.8.0_101
export JRE_HOME=/opt/jdk/jdk1.8.0_101/jre
export PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/jre/bin
~~~

3. Desloguearnos y volver a loguear para aplicar cambios, o ejecutar el siguiente comando para que se apliquen los cambios inmediatamente:

~~~console
source /etc/profile
~~~
