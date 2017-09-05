## Variables

A variable is a temporary store for a piece of information. There are two actions we may perform for variables:

+ Setting a value for a variable.
  + When setting a variable we leave out the $ sign
+ Reading the value for a variable.
  + When referring to or reading a variable we place a $ sign before the variable name


Variables may have their value **set** in a few different ways. The most common are to set the value directly and for its value to be set as the result of processing by a command or program.
To **read** the variable we then place its name (preceded by a **$** sign) anywhere in the script we would like.

Before Bash interprets (or runs) every line of our script it first checks to see if any variable names are present. For every variable it has identified, it replaces the variable name with its value. Then it runs that line of code and begins the process again on the next line.

##### Command line arguments

---

Command line arguments are commonly used and easy to work with so they are a good place to start.

When we run a program on the command line you would be familiar with supplying arguments after it to control its behaviour.

We can do similar with our bash scripts. To do this we use the variables $1 to represent the first command line argument, $2 to represent the second command line argument and so on. These are automatically set by the system when we run our script so all we need to do is refer to them.

**mycopy.sh**
~~~bash
#!/bin/bash
#A simple copy script.
cp $1 $2
echo Details for $2
ls -lh $2
~~~

~~~bash
pi@raspberrypi:~ $ chmod +x ./mycopy.sh
pi@raspberrypi:~ $ ./mycopy.sh ./file1.data ./file2.data
Details for ./file2.data
-rw-r--r-- 1 pi pi 11 Sep  5 04:57 ./file2.data
~~~

##### Other special variables

---

| System's variables | Description |
|:---:|:---|
| $0 | The name of the Bash script. |
| $1 to $9| The first 9 arguments to the Bash script. (As mentioned above.) |
| $# | How many arguments were passed to the Bash script. |
| $@ | All the arguments supplied to the Bash script. |
| $? | The exit status of the most recently run process. |
| $$ | The process ID of the current script. |
| $USER | The username of the user running the script. |
| $HOSTNAME | The hostname of the machine the script is running on. |
| $SECONDS | The number of seconds since the script was started. |
| $RANDOM | Returns a different random number each time is it referred to. |
| $LINENO | Returns the current line number in the Bash script. |

**myarguments.sh**
~~~bash
#!/bin/bash

echo name bash scripting: $0
echo first argument: $1
echo last argument: $9
echo how many arguments were passed: $#
echo all the arguments supplied: $@
echo status of the most recently run process: $?
echo user name of the user running the script: $USER
echo the hostname of the machine the script is running: $HOSTNAME
echo the number of seconds since the script was started: $SECONDS
echo get a random number: $RANDOM
echo the current line number is: $LINENO
~~~

~~~bash
pi@raspberrypi:~ $ chmod +x ./myarguments.sh
pi@raspberrypi:~ $ ./myarguments.sh one two three four five six seven eight nine
name bash scripting: ./myarguments.sh
first argument: one
last argument: nine
how many arguments were passed: 9
all the arguments supplied: one two three four five six seven eight nine
status of the most recently run process: 0
user name of the user running the script: pi
the hostname of the machine the script is running: raspberrypi
the number of seconds since the script was started: 0
get a random number: 7175
the current line number is: 13
~~~
