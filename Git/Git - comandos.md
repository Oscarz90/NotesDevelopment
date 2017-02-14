Comandos de Git.
---

Tu repositorio local esta compuesto por tres "árboles" administrados por git. El primero es tu **Directorio de trabajo** que contiene los archivos, el segundo es el **Index** que actua como una zona intermedia, y el último es el **HEAD** que apunta al último commit.

**Inicializar Repositorio Local**
`git init`

**Inicializar Repositorio Compartido**
`git init --bare --shared`

**Agregar Archivo al Indexado del Repositorio**
Agregar todos los archivos nuevos
`git add . `
Agrega un archivo en especifico
`git add file.ext`

**Realizar Commit**
`git commit -a -m 'Comentarios'`
**-a**
**--all**
Incluye todos los archivos modificados o borrados en el commit

**Deshacer el último commit**
`git reset --hard HEAD~1`
Nos ubica en el commit que apunta la rama activa menos _uno_

**Deshacer el último commit**
`git reset HEAD~1`
`git reset HEAD <file>`
Nos ubica en el commit que apunta la rama activa menos _uno_, además mantienen las modificaciones del commit eliminado en el area de trabajo.


**Obtener cambios del servidor y mezclarlos con rama local**
`git pull <ramaRemota> <RamaLocal>`
`git pull origin master`

**Para fusionar otra rama a tu rama activa (por ejemplo master)**
`git merge <branch>`

**Muestra las diferencias entre el commit y el working tree**
`git diff <source_branch> <target_branch>`
`git diff`

**Subir cambios a servidor**
`git push -u <RamaRemota> <RamaLocal>`
`git push -u origin master`

**Crear una nueva rama y cambiarte a ella**
`git checkout -b nombreRama`

**Volver a la rama principal**
`git checkout master`

**Reemplaza los cambios en tu directorio de trabajo con el último contenido de HEAD**
`git checkout -- <filename>`

**Deshacer todos los cambios locales y commits, puedes traer la última versión del servidor y apuntar a tu copia local**
`git fetch origin`
`git reset --hard origin/master`

**Borrar la rama**
`git branch -d nombreRama`

**Subir la rama al repositorio remoto (rama remota)**
`git push origin <branch>`

**Obtener ramas del proyecto actual**
`git branch`

**Ver los ultimos cambios en cada rama del proyecto actual**
`git branch -v`

**Borrar rama local**
`git branch -d <NombreRama>`
`git branch -d ramatemporal`

**Borrar rama del servidor**
`git push origin : <bugfixes>`
`git push origin --delete <bugfixes>`

**Crear etiquetas de una version publicada**
`git tag <idVersion> <idCommit>`
`git tag 1.0.0 1b2e1d63ff`

**Configurar usuario de github**
`git config --global github.user <NombreUsuario>`
`git config --global github.user Oscarz90`

**Configurar usuario local que se mostrara**
al hacer commits y subir cambios al servidor.
`git config --global user.name <NombreUsuario>`
`git config --global user.name "Oscar Martinez"`

**Configurar email de usuario local que se
mostrara al hacer commits y subir cambios al servidor**
`git config --global user.email <EmailUsuario>`
`git config --global user.email omsz90@live.com.mx`

**Clonar repositorio remoto**
`git clone <usuario>@<host|ip>:<path>`
`git clone git@github.com:Oscarz90/ProyectoTest`

**Clonar repositorio local**
`git clone /path/to/repository`

**Ver commits del un repositorio**
`git log`

**Agregar rama remota al repositorio local**
`git remot add <RamaRemota>`

**Quieres conectar tu repositorio local a un repositorio remoto**
`git remote add origin <server>`

**Interfaz gráfica por defecto**
`gitk`

**Colores especiales para la consola**
`git config color.ui true`

**Mostrar sólo una línea por cada commit en la traza**
`git config format.pretty oneline`

**Agregar archivos de forma interactiva**
`git add -i`

**En el remoto un git pull para ver cambios
cambios automaticos en hooks modificando post-receive**
~~~
#!/bin/sh
GIT_WORK_TREE=/urldondequeremosqueseactualice git chekout -f
#!/bin/sh
GIT_WORK_TREE=/home/residente/proyectos_dev/ptapoarequi/ptapoarequi git checkout -f
~~~

**Despues dar permisos al archivo post-receive**
`chmod +x post-receive`
