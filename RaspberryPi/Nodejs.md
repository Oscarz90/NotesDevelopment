Instalar Nodejs
---  

1. Descargar Nodejs para ARMv6.  

  ~~~bash
  $ wget https://nodejs.org/dist/v6.2.2/node-v6.2.2-linux-armv6l.tar.xz
  ~~~

2. Descomprimir e instalar.
  
  ~~~bash
  $ tar -xvf node-v6.2.2-linux-armv6l.tar.xz
  $ cd node-v6.2.2-linux-armv6l/
  $ sudo cp -R * /usr/local/
  ~~~

3.  Valida instalacion

  ~~~bash
  $ node -v
  $ v6.2.2
  ~~~
