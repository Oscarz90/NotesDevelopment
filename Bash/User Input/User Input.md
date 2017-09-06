## User Input

We looked at one form of user input (command line arguments) in the previous section. Now we would like to introduce other ways the user may provide input to the Bash script.

##### User Input

---

We would like to ask the user for input then we use a command called read. This command takes the input and will save it into a variable.


**introduction.sh**
~~~bash
#!/bin/bash
#ask me for my name

echo What is your name?
read varname

echo your name is $varname
~~~

**Terminal**
~~~bash
pi@raspberrypi:~ $ ./introduction.sh
What is your name?
Oscar
your name is Oscar
~~~

_**More Variables**_

**cars.sh**
~~~bash
#!/bin/bash

#How read actually works

echo What cars do you like?

read car1 car2 car3

echo Your first car was: $car1
echo Your second car was: $car2
echo Your third car was: $car3
~~~

**Terminal**
~~~bash
pi@raspberrypi:~ $ ./cars.sh
What cars do you like?
Ferrari Lamborghini Porshe Bentley
Your first car was: Ferrari
Your second car was: Lamborghini
Your third car was: Porshe Bentley
~~~

The general mechanism is that you can supply several variable names to read. Read will then take your input and split it on whitespace. The first item will then be assigned to the first variable name, the second item to the second variable name and so on. If there are more items than variable names then the remaining items will all be added to the last variable name. If there are less items than variable names then the remaining variable names will be set to blank or null.

_**More with Read**_

You are able to alter the behaviour of read with a variety of command line options. (See the man page for read to see all of them.) Two commonly used options however are -p which allows you to specify a prompt and -s which makes the input silent. This can make it easy to ask for a username and password combination like the example below:

**login.sh**
~~~bash
#!/bin/bash

#ask the user for login details

read -p 'User Name:' uservar
read -sp 'Password:' passvar
echo
echo Thank you $uservar now we have your login details
~~~

**Terminal**
~~~bash
pi@raspberrypi:~ $ ./login.sh
User Name:omsz90
Password:
Thank you omsz90 now we have your login details
~~~

#### Reading from STDIN

---
It's common in Linux to pipe a series of simple, single purpose commands together to create a larger solution tailored to our exact needs. The ability to do this is one of the real strenghs of Linux. It turns out that we can easily accommodate this mechanism with our scripts also. By doing so we can create scripts that act as filters to modify data in specific ways for us.

Bash accomodates piping and redirection by way of special files. Each process gets it's own set of files (one for STDIN, STDOUT and STDERR respectively) and they are linked when piping or redirection is invoked. Each process gets the following files:

+ STDIN - /proc/<processID>/fd/0
+ STDOUT - /proc/<processID>/fd/1
+ STDERR - /proc/<processID>/fd/2

To make life more convenient the system creates some shortcuts for us:

+ STDIN - /dev/stdin or /proc/self/fd/0
+ STDOUT - /dev/stdout or /proc/self/fd/1
+ STDERR - /dev/stderr or /proc/self/fd/2

**summary.sh**
~~~bash
#!/bin/bash
# A basic summary of my sales report
echo Here is a summary of the sales data:
echo ====================================
echo
cat /dev/stdin | cut -d' ' -f 2,3 | sort
~~~

**Terminal**
~~~bash
cat salesdata.txt | ./summary.sh
Here is a summary of the sales data:
====================================

apples 20
oranges 5
peaches 7
watermelons 12
~~~
