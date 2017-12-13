Install NodeJS
---  

In order to install NodeJS, we'll have two options. The first is the **manual installation** and the second is with an **automated script**.

**Manual Option**

---

1. Download Nodejs for ARMv7 (Raspberry pi 3 Model B)

```shell
pi@raspberry:~ $ wget https://nodejs.org/dist/v8.9.3/node-v8.9.3-linux-armv7l.tar.xz
```

2. Uncompress and Install.

```shell
pi@raspberry:~ $ tar -xvf node-v8.9.3-linux-armv7l.tar.xz
pi@raspberry:~ $
pi@raspberry:~ $
pi@raspberry:~ $
```

  Once the archive downloaded, extract the package, move it in the /opt/node folder and **create the symbolic links**:
  
```shell
pi@raspberry:~ $ mv node-v8.9.3-linux-armv7l /opt/node
pi@raspberry:~ $ sudo mkdir /opt/bin
pi@raspberry:~ $ sudo ln -s /opt/node/bin/* /opt/bin/
pi@raspberry:~ $ sudo ln -s /opt/node/bin/* /opt/bin/
```

To finish the installation, let’s **add the binaries in the PATH**:

```shell
pi@raspberry:~ $ sudo nano /etc/profile
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/opt/bin"
```

Press `CTRL+O` then `CTRL+X` to save the file. Voilà! The installation is done, check that everything is ok by taping these commands.

3.  Validate Installation

```shell
pi@raspberry:~ $ node -v
v8.9.3
pi@raspberry:~ $ npm -v
5.5.1
```

**Automated Option**

---


1. Copy the script to the Home.

[install-rasp-arm7-node.sh](scripts/install-rasp-arm7-node.sh)

2. Add grant execution permissions

```shell
pi@raspberrypi:~ $ chmod 755 install-rasp-arm7-node.sh 
pi@raspberrypi:~ $ ls -la
total 12
drwxr-xr-x 2 pi pi 4096 dic 12 22:47 .
drwxr-xr-x 4 pi pi 4096 dic 12 22:47 ..
-rwxr-xr-x 1 pi pi 1137 dic 12 22:42 install-rasp-arm7-node.sh
```

3. Execute and wait for the installation.

Before execute it, we need grant the execution permission to the user pi.

```shell
pi@raspberrypi:~ $ chmod 755 install-rasp-arm7-node.sh 
```

Now we can execute the script for the installation.

```shell
pi@raspberrypi:~ $ ./install-rasp-arm7-node.sh 
```

4. Set the owner of the Node folders to the pi user

```shell
pi@raspberrypi:~ $ sudo chown -R  pi /usr/local/share 
pi@raspberrypi:~ $ sudo chown -R  pi /usr/local/lib
pi@raspberrypi:~ $ sudo chown -R  pi /usr/local/include
pi@raspberrypi:~ $ sudo chown -R  pi /usr/local/bin
```

3.  Validate Installation

```shell
pi@raspberry:~ $ node -v
v8.9.3
pi@raspberry:~ $ npm -v
5.5.1
```

