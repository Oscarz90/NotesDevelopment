Convenciones:
Convencion Descripción
WSO2GR
WSO2 Governance Registry
GREG_HOME Ubicación de la instalacion de WSO2 Governance Registry C:\wso2greg‐5.3.0
YAJSW_HOME Ubicación de la instalación de YAJSW C:\yajsw‐stable‐11.11
Software requerido.
Software Version Link Descarga
JDK 1.8.0_102
ir a descarga… (http://www.oracle.com/technetwork/java/javase/downloads/jdk8downloads2133151.
html?ssSourceSiteId=otnes)
WSO2 Governance
Registry
5.3.0 ir a descarga… (http://wso2.com/products/governanceregistry/)
MySQL Community
Server
5.7.15.0 ir a descarga… (http://dev.mysql.com/downloads/windows/installer/5.7.html)
MySQL Connector/J
(official JDBC driver)
5.1.39 ir a descarga… (http://dev.mysql.com/downloads/connector/j/5.1.html)
YAJSW
11.11
(estable)
ir a descarga… (https://sourceforge.net/projects/yajsw/files/)
Variables de Entorno de Windows
Variable Descripcion Valor
JAVA_HOME Ubicación del JDK. C:\Progra~1\Java\jdk1.8.0_102
CARBON_HOME Ubicación de la instalacion de WSO2 Governance Registry C:\wso2greg5.3.0
1. Descomprimir el contenido de WSO2GR
(wso2greg5.3.0.
zip) en C:\ .
2. Establercer una variable de entorno de windows llamada CARBON_HOME, con el valor de la ubicación donde se
descomprimió WSO2GR
( C:\wso2greg‐5.3.0 ).
1. Instalar MySQL en el equipo e iniciar el servicio de MySQL.
2. Abrir una ventana de comandos de Windows (cmd), ejecutamos el comando:
"C:\Program Files\MySQL\MySQL Server 5.7\bin\mysql.exe" ‐u root ‐p
nos pedirá la contraseña, la introducimos y con esto iniciamos sesión en el cliente de MySQL con el usuario root (o cualquier
WSO2 Governance Registry Instalación
y configuración.
Instalar WSO2 Governance Registry.
Crear base de datos y usuario para WSO2GR
en MySQL.
otro usuario con privilegios para crear bases de datos).
3. Ahora crearemos la base de datos para WSO2GR,
ejecutando el comando el la terminal:
mysql>create database regdb;
Query OK, 1 row affected (0.42 sec)
4. Ahora creamos el usuario regadmin y le damos permisos para la base de datos regdb, ejecutando el comando en la
terminal:
mysql> GRANT ALL ON regdb.* TO regadmin@localhost IDENTIFIED BY "regadmin";
Query OK, 0 rows affected, 1 warning (0.54 sec)
5. Recargamos todos los privilegios (cache) ejecutando el comando:
mysql>FLUSH PRIVILEGES;
6. Cerramos sesión de la consola de mysql:
mysql>quit;
Bye
1. Copiamos el driverjar
de MySQL Connector/J ( mysql‐connector‐java‐5.1.39‐bin.jar ) en el directorio
<GREG_HOME>/repository/components/lib/ .
2. Editar la configuración del datasource por default ubicado en el archivo <GREG_HOME>/repository/conf/datasources/masterdatasources.
xml , con la información de nuestra base de datos.
<datasource>
<name>WSO2_CARBON_DB</name>
<description>The datasource used for registry and user manager</description>
<jndiConfig>
<name>jdbc/WSO2CarbonDB</name>
</jndiConfig>
<definition type="RDBMS">
<configuration>
<url>jdbc:mysql://localhost:3306/regdb</url>
<username>regadmin</username>
<password>regadmin</password>
<driverClassName>com.mysql.jdbc.Driver</driverClassName>
<maxActive>80</maxActive>
<maxWait>60000</maxWait>
<minIdle>5</minIdle>
<testOnBorrow>true</testOnBorrow>
<validationQuery>SELECT 1</validationQuery>
<validationInterval>30000</validationInterval>
</configuration>
</definition>
</datasource>
3. Crearemos las tablas en la base de datos regdb de manera automática, abrimos una ventana de comandos de Windows
(cmd), nos ubicamos en el directorio <GREG_HOME>/bin/ y ejecutamos el siguiente comando:
> wso2server.bat ‐Dsetup
4. Cuando el servidor haya iniciado nos mostrará una leyenda como la siguiente:
INFO {org.wso2.carbon.core.internal.StartupFinalizerServiceComponent} ‐ WSO2 Carbon started in 1144 sec
Configurar y reemplazar la base de datos default H2 de WSO2GR
con MySQL.
En seguida detenemos el servidor con la combinación de teclas Ctrl+C , con esto ya se habrá creado las tablas necesarias en
la Base de datos de MySQL, remplazando la base de datos embebida de H2 que incluye WSO2GR.
Habilitando un mejor
gestor de base de datos que el incluido por default en WSO2GR.
1. Descomprimir el contenido de YAJSW (yajswstable11.11.
zip) en C:\ .
2. Copiar el todo contenido del archivo wrapper.conf ubicado en en <GREG_HOME>/bin/ al archivo del mismo nombre ubicado en
<YAJSW_HOME>/bin/yajsw/ , adicional agregar al final del archivo la siguiente linea:
wrapper.java.additional.26 = ‐Dorg.apache.jasper.compiler.Parser.STRICT_QUOTE_ESCAPING=false
Esta linea evitara “paginas blancas” en la consola de administración de WSO2GR.
El contenido del archivo wrapper.conf en <YAJSW_HOME>/bin/yajsw/ quedaría de la siguiente manera:
Configurar WSO2 Governance Registry como un servicio de Windows con
YAJSW.
#********************************************************************
# working directory
#********************************************************************
wrapper.working.dir=${carbon_home}\\
# Java Main class.
# YAJSW: default is "org.rzo.yajsw.app.WrapperJVMMain"
# DO NOT SET THIS PROPERTY UNLESS YOU HAVE YOUR OWN IMPLEMENTATION
# wrapper.java.mainclass=
#********************************************************************
# tmp folder
# yajsw creates temporary files named in_.. out_.. err_.. jna..
# per default these are placed in jna.tmpdir.
# jna.tmpdir is set in setenv batch file to <yajsw>/tmp
#********************************************************************
wrapper.tmp.path = ${jna_tmpdir}
#********************************************************************
# Application main class or native executable
# One of the following properties MUST be defined
#********************************************************************
# Java Application main class
wrapper.java.app.mainclass=org.wso2.carbon.bootstrap.Bootstrap
# Log Level for console output. (See docs for log levels)
wrapper.console.loglevel=INFO
# Log file to use for wrapper output logging.
wrapper.logfile=${wrapper_home}\/log\/wrapper.log
# Format of output for the log file. (See docs for formats)
#wrapper.logfile.format=LPTM
# Log Level for log file output. (See docs for log levels)
#wrapper.logfile.loglevel=INFO
# Maximum size that the log file will be allowed to grow to before
# the log is rolled. Size is specified in bytes. The default value
# of 0, disables log rolling by size. May abbreviate with the 'k' (kB) or
# 'm' (mB) suffix. For example: 10m = 10 megabytes.
# If wrapper.logfile does not contain the string ROLLNUM it will be automatically added as suffix of the file name
wrapper.logfile.maxsize=10m
# Maximum number of rolled log files which will be allowed before old
# files are deleted. The default value of 0 implies no limit.
wrapper.logfile.maxfiles=10
# Title to use when running as a console
wrapper.console.title="WSO2 Carbon"
#********************************************************************
# Wrapper Windows Service and Posix Daemon Properties
#********************************************************************
# Name of the service
wrapper.ntservice.name="WSO2CARBON"
# Display name of the service
wrapper.ntservice.displayname="WSO2 Carbon"
# Description of the service
wrapper.ntservice.description="Carbon Kernel"
#********************************************************************
# Wrapper System Tray Properties
#********************************************************************
# enable system tray
wrapper.tray = true
# TCP/IP port. If none is defined multicast discovery is used to find the port
# Set the port in case multicast is not possible.
wrapper.tray.port = 15002
#********************************************************************
# Exit Code Properties
# Restart on non zero exit code
#********************************************************************
wrapper.on_exit.0=SHUTDOWN
wrapper.on_exit.default=RESTART
#********************************************************************
# Trigger actions on console output
#********************************************************************
# On Exception show message in system tray
wrapper.filter.trigger.0=Exception
wrapper.filter.script.0=scripts\/trayMessage.gv
wrapper.filter.script.0.args=Exception
#********************************************************************
# genConfig: further Properties generated by genConfig
#********************************************************************
placeHolderSoGenPropsComeHere=
wrapper.java.command = ${java_home}\\bin\\java
wrapper.java.classpath.1 = ${java_home}\\lib\\tools.jar
wrapper.java.classpath.2 = ${carbon_home}\\bin\\*.jar
wrapper.app.parameter.1 = org.wso2.carbon.bootstrap.Bootstrap
wrapper.app.parameter.2 = RUN
wrapper.java.additional.1 = ‐Xbootclasspath\/a:${carbon_home}\\lib\\xboot\\*.jar
wrapper.java.additional.2 = ‐Xms256m
wrapper.java.additional.3 = ‐Xmx1024m
wrapper.java.additional.4 = ‐XX:MaxPermSize=256m
wrapper.java.additional.5 = ‐XX:+HeapDumpOnOutOfMemoryError
wrapper.java.additional.6 = ‐XX:HeapDumpPath=${carbon_home}\\repository\\logs\\heap‐dump.hprof
wrapper.java.additional.7 = ‐Dcom.sun.management.jmxremote
wrapper.java.additional.8 = ‐Djava.endorsed.dirs=${carbon_home}\\lib\\endorsed;${java_home}\\jre\\lib\\endorsed
wrapper.java.additional.9 = ‐Dcarbon.registry.root=\/
wrapper.java.additional.10 = ‐Dcarbon.home=${carbon_home}
wrapper.java.additional.11 = ‐Dwso2.server.standalone=true
wrapper.java.additional.12 = ‐Djava.command=${java_home}\\bin\\java
wrapper.java.additional.13 = ‐Djava.io.tmpdir=${carbon_home}\\tmp
wrapper.java.additional.14 = ‐Dcatalina.base=${carbon_home}\\lib\\tomcat
wrapper.java.additional.15 = ‐Djava.util.logging.config.file=${carbon_home}\\repository\\conf\\log4j.properties
wrapper.java.additional.16 = ‐Dcarbon.config.dir.path=${carbon_home}\\repository\\conf
wrapper.java.additional.17 = ‐Dcarbon.logs.path=${carbon_home}\\repository\\logs
wrapper.java.additional.18 = ‐Dcomponents.repo=${carbon_home}\\repository\\components\\plugins
wrapper.java.additional.19 = ‐Dconf.location=${carbon_home}\\repository\\conf
wrapper.java.additional.20 = ‐Dcom.atomikos.icatch.file=${carbon_home}\\lib\\transactions.properties
wrapper.java.additional.21 = ‐Dcom.atomikos.icatch.hide_init_file_path=true
wrapper.java.additional.22 = ‐Dorg.apache.jasper.runtime.BodyContentImpl.LIMIT_BUFFER=true
wrapper.java.additional.23 = ‐Dcom.sun.jndi.ldap.connect.pool.authentication=simple
wrapper.java.additional.24 = ‐Dcom.sun.jndi.ldap.connect.pool.timeout=3000
wrapper.java.additional.25 = ‐Dorg.terracotta.quartz.skipUpdateCheck=true
wrapper.java.additional.26 = ‐Dorg.apache.jasper.compiler.Parser.STRICT_QUOTE_ESCAPING=false
4. Establecer la variable de entorno de windows CARBON_HOME con la ubicación de la instalacion de WSO2 Governance Registry
(C:\wso2greg5.3.0).
5. Abrir una ventana de comandos de windows (cmd) en la ubicación <YAJSW_HOME>\bat y ejecutamos el siguiente comando:
>runConsoleW.bat
Esto abrira una consola de administración desde la cual podemos realizar varias operaciones para administrar el servidor de WSO2GR,
como pueden ser iniciar, reiniciar, detener, etc., entre otras operaciones.
Icono de YAJSW en el area de notificación que muestra y notifica el estatus del servidor de WSO2GR.
Imágenes Ilustrativas
Menú del icono de YAJSW en el area de notificación. Selecciona la opcion Console para visualizar la consola de administración.
Consola de Adminsitracion de YAJSW para WSO2GR
WSO2GR
Publisher proporciona una aplicación web para el usuario final enfocada a la colaboración para administrar los activos,
gestionarlos, mostrar sus dependencias, obtener información y el uso de ellos. La aplicación web se puede acceder desde la url:
https://<host>:9443/publisher
WSO2GR
Store proporciona una aplicación web para los consumidores de los activos del gobierno y ofrece funcionalidades como
suscribirse a los activos, evaluar e interactuar con los activos, añade un nivel de categorización y taxonomia, una capacidad de
filtrados por etiquetas entre otras funcionalidades. La aplicación web se puede acceder desde la url:
http://<host>:9763/store
Herramientas disponibles de WSO2GR
WSO2GR
Publisher
WSO2GR
Store
WSO2GR
Carbon
WSO2GR
Carbon proporciona una aplicación web que permite a los administradores configurar, controlar, ajustar y mantener el
WSO2GR.
La aplicación web se puede acceder desde la url:
https://<host>:9443/carbon
