# Linux CLI and Bash Scripting Tutorial

### Content {#content}

+ [Introduction](#introduction)
+ [Bash](#bash)
    * [Why Bash?](#bash-whyBash)
    * [What is a Bash Script?](#bash-whatIsABashScript)
    * [Running a Bash Script](#bash-runningABashScript)
    * [Why The ./](#bash-whyThe)
+ [Bash Scripting](#bashscripting)
    * [Variables](#bashscripting-variables)
        * [Command Line Arguments](#bashscripting-variables-commandarguments)
        * [Special Variables](#bashscripting-variables-specialvariables)
        * [Setting our own variables](#bashscripting-variables-settingOurOwnVariables)
        * [Quotes](#bashscripting-variables-quotes)
        * [Command Substitution](#bashscripting-variables-commandSubstitution)
        * [Exporting Variables ](#bashscripting-variables-exportingVariables)
    * [Input](#bashscripting-input)
    * [Arithmetic](#bashscripting-arithmetic)
    * [If Statements](#bashscripting-ifStatements)
    * [Loops](#bashscripting-loops)
    * [Functions](#bashscripting-functions)
    * [User Interface](#bashscripting-userInterface)
+ [Installing virtual environment](#test)
+ [Information Commands](#test)
+ [Finding Documentation](#test)
+ [Navigatin the Linux file system](#test)
+ [Manipulatin Files and Folders](#test)
+ [Reading and Editing Files](#test)
+ [Privileges and Users](#test)
+ [Wildcards/Regular Expressions](#test)
+ [Installing packages](#test)
+ [System Adminstration Section](#test)
+ [Network Diagnostics](#test)
+ [Terminal Customization](#test)


## [![Home](assets\icon\home.png )](#content)  Introduction {#introduction}

The following pages are intended to give you a solid foundation in how to use the terminal, how to write Bash scripts and how to administer Linux, to get the computerto do complex, repetitive tasks for you. You won't be a bash guru at the end but you will be well on your way and armed with the right knowledge and skilss to get you there if that's what you want.

## [![Home](assets\icon\home.png )](#content)  Bash {#bash}

#### [![Home](assets\icon\up.png )](#bash) Why Bash? {#bash-whyBash}

Bash scripts are used by Systems Administrators, Programmers, Network Engineers, Scientists and just about anyone else who uses a Linux/ Unix system regularly. No matter what you do or what your general level of computer proficiency is, you can generally find a way to use Bash scripting to make your life easier.

The linux command line (Bash) may seem complex and scary, but it is actually quite simple and intuitive (once you understand how it works), and once you work through the following sections you will understand what is going on.

#### [![Home](assets\icon\up.png )](#bash) What is a Bash Script? {#bash-whatIsABashScript}

A Bash script is a plain text file which contains a series of commands. These commands are a mixture of commands we would normally type ouselves on the command line (such as ls or cp for example) and commands we could type on the command line but generally wouldn't (you'll discover these over the next few pages). An important point to remember though is:

**Anything you can run normally on the command line can be put into a script and it will do exactly the same thing. Similarly, anything you can put into a script can also be run normally on the command line and it will do exactly the same thing.**

It's just that instead of typing them at the command line we are now entering them into a plain text file.

#### [![Home](assets\icon\up.png )](#bash) How do they work? {#bash-howDoTheyWork}

In the realm of Linux (and computers in general) we have the concept of programs and processes. A program is a blob of binary data consisting of a series of instructions for the CPU and possibly other resources (images, sound files and such) organised into a package and typically stored on your hard disk. When we say we are running a program we are not really running the program but a copy of it which is called a process. What we do is copy those instructions and resources from the hard disk into working memory (or RAM). We also allocate a bit of space in RAM for the process to store variables (to hold temporary working data) and a few flags to allow the operating system (OS) to manage and track the process during it's execution.

**Essentially a process is a running instance of a program.**

There could be several processes representing the same program running in memory at the same time. For example I could have two terminals open and be running the command cp in both of them. In this case there would be two cp processes currently existing on the system. Once they are finished running the system then destroys them and there are no longer any processes representing the program cp.

When we are at the terminal we have a Bash process running in order to give us the Bash shell. If we start a script running it doesn't actually run in that process but instead starts a new process to run inside.

#### [![Home](assets\icon\up.png )](#bash) Running a Bash Script {#bash-runningABashScript}

Running a Bash script is fairly easy. Another term you may come across is **executing** the script (which means the same thing). Before we can execute a script it must have the execute **permission set** (for safety reasons this persmission is generally not set by default). If you forget to grant this permission before running the script you'll just get an error message telling you as such and no harm will be done.

>**myFirstScript.sh**

~~~bash
#!/bin/bash
# A sample Bash script, by OMS
echo Hello World!
~~~

###### **\#!/bin/bash** Is what's referred to as the shebang

>**Terminal**

~~~console
oscar@oscar-VirtualBox ~/scripts $ ./myFirstScript.sh
bash: ./myFirstScript.sh: Permission denied
oscar@oscar-VirtualBox ~/scripts $ ls -l myFirstScript.sh 
-rw-rw-r-- 1 oscar oscar 59 Nov  6 10:03 myFirstScript.sh
oscar@oscar-VirtualBox ~/scripts $ chmod 755 myFirstScript.sh 
oscar@oscar-VirtualBox ~/scripts $ ls -l myFirstScript.sh 
-rwxr-xr-x 1 oscar oscar 59 Nov  6 10:03 myFirstScript.sh
oscar@oscar-VirtualBox ~/scripts $ ./myFirstScript.sh
Hello World!
~~~

###### The shorthand 755 is often used for scripts as it allows you the owner to write or modify the script and for everyone to execute the script.

#### [![Home](assets\icon\up.png )](#bash) Why the ./ {#bash-whyThe}


You've possibly noticed that when we run a normal command (such as ls) we just type its name but when running the script above I put a ./ in front of it. When you just type a name on the command line Bash tries to find it in a series of directories stored in a variable called $PATH. We can see the current value of this variable using the command echo (you'll learn more about variables in the next section).

~~~console
oscar@oscar-VirtualBox ~/scripts $ echo $PATH
/home/oscar/bin:/home/oscar/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games
~~~

###### The directories are separated by ":"

**Bash only looks in those specific directories and doesn't consider sub directories or your current directory**. It will look through those directories in order and execute the first instance of the program or script that it finds. The **$PATH variable** is an individual user variable so each user on a system may set it to suit themselves.

This is done for a few different reasons.

+ It allows us **to have several different versions of a program installed**. We can control which one gets executed based on where it sits in our $PATH.
+ It allows for convenience. As you saw above, the first directory for myself is a bin directory in my home directory. This allows me **to put my own scripts and programs there and then I can use them no matter where I am in the system** by just typing their name. I could even create a script with the same name as a program (to act as a wrapper) if I wanted slightly different behaviour.
+ **It increases safety** - For example a malicious user could create a script called ls which actually deletes everything in your home directory. You wouldn't want to inadvertantly run that script. But as long as it's not in your $PATH that won't happen.

If a **program or script is not in one of the directories** in your $PATH then **you can run it by telling Bash where it should look to find it**. You do so by including either an **absolute** or **relative path** in front of the program or script name. You'll remember that **dot ( . ) is actually a reference to your current directory**. Assuming this script is in my home directory I could also have run it by using an absolute path.

Formatting is important here. **The shebang must be on the very first line of the file** (line 2 won't do, even if the first line is blank). There must also be no spaces before the # or between the ! and the path to the interpreter.

**It is possible to leave out the line with the shebang** and still run the script but it is unwise. If you are at a terminal and running the Bash shell and you execute a script without a shebang then Bash will assume it is a Bash script. So this will only work assuming the user running **the script is running it in a Bash shell** and there are a variety of reasonshis why t may not be the case, which is dangerous.

You can also run Bash, passing the script as an argument.

>**Terminal**

~~~console
oscar@oscar-VirtualBox ~/scripts $ bash myFirstScript.sh 
Hello World!
~~~

## [![Home](assets\icon\home.png )](#content)  Bash Scripting {#bashscripting}

#### [![Home](assets\icon\up.png )](#bashscripting) Variables {#bashscripting-variables}

A variable is a temporary store for a piece of information. There are two actions we may perform for variables: **setting** a value for a variable or **reading** the value for a variable. The most common are to set the value directly and for its value to be set as the result of processing by a command or program, to read the variable we then place its name (preceded by a $ sign) anywhere in the script we would like, for every variable it has identified, it replaces the variable name with its value.

Here are a few quick points on syntax:

+ When referring to or reading a variable we **place a $ sign before** the variable name.
+ When setting a variable we **leave out the $** sign.
+ A variable can be written with all **uppercase**, all **lowercase**, or a **mixture**.
+ A variable may be placed anywhere in a script (or on the command line for that matter) and, when run, Bash will replace it with the value of the variable. This is made possible as **the substitution is done before the command is run**.

##### [![Home](assets\icon\up.png )](#bashscripting) Command line arguments {#bashscripting-variables-commandarguments}

Command line arguments are commonly used and easy to work with so they are a good place to start. When we run a program on the command line you would be familiar with **supplying arguments** after it to control its behaviour. For instance we could run the command **ls -l /etc**. **-l** and **/etc** are both **command line arguments** to the command **ls**. We can do similar with our bash scripts. To do this we use the variables **$1** to represent the first command line argument, **$2** to represent the second command line argument and so on. These are automatically set by the system when we run our script so all we need to do is refer to them.

Let's look at an example.

>**myCopy.sh**

~~~bash
#!/bin/bash
#A simple copy script
cp $1 $2
#Let's verify the copy worked
echo Details for $2
ls -lh $2
~~~

###### 

>**Terminal**

~~~console
oscar@oscar-VirtualBox ~/scripts $ ./myCopy.sh file1.data ./results
Details for ./results
total 0
-rw-rw-r-- 1 oscar oscar 0 Nov  6 13:07 file1.data
~~~

##### [![Home](assets\icon\up.png )](#bashscripting) Special Variables {#bashscripting-variables-specialvariables}

Here are a few other variables that the **system sets** for you to use as well.

| Variable | Description |
|:---:| :---: |
| **$0** | The name of the Bash script. |
| **$1 to $9** | The first 9 arguments to the Bash script. (As mentioned above.) |
| **$#** | How many arguments were passed to the Bash script. |
| **$@** | All the arguments supplied to the Bash script. |
| **$?** | The exit status of the most recently run process. |
| **$$** | The process ID of the current script. |
| **$USER** | The username of the user running the script. |
| **$HOSTNAME** | The hostname of the machine the script is running on. |
| **$SECONDS** | The number of seconds since the script was started. |
| **$RANDOM** | Returns a different random number each time is it referred to. |
| **$LINENO** | Returns the current line number in the Bash script. |
| **$PS1** | This is the main prompt, seen at the command-line. |

**Note:**  
If you type the command `env` on the command line you will see a listing of other variables which you may also refer to.

[More Internal Variables](http://tldp.org/LDP/abs/html/internalvariables.html)
[Parameter and Variable Index](https://www.gnu.org/software/bash/manual/html_node/Variable-Index.html#Variable-Index)

##### [![Home](assets\icon\up.png )](#bashscripting) Setting our own variables {#bashscripting-variables-settingOurOwnVariables}

As well as variables that are preset by the system, we may also set our own variables. This can be useful for keeping track of results of commands and being able to refer to and process them later. There are a few ways in which variables may be set, the basic form follows this pattern `variable=value`; this is one of those areas where formatting is important. Note **there is no space on either side of the equals** ( = ) sign. We also **leave off the _$_ sign from the beginning of the variable** name when setting it.

>**simpleVariables.sh**

~~~bash
#!/bin/bash
#A simple variable example
myvariable=Hello
anothervar=Fred
echo $myvariable $anothervar
echo

sampledir=/etc
ls $sampledir
~~~

>**Terminal**

~~~console
oscar@oscar-VirtualBox ~/scripts $ ./simpleVariables.sh 
Hello Fred

acpi      gdb      logrotate.conf    rcS.d ...
~~~

##### [![Home](assets\icon\up.png )](#bashscripting-variables) Quotes {#bashscripting-variables-quotes}

In the example above we kept things nice and simple. The variables only had to store a single word. When we want variables to store more complex values however, we need to make use of quotes. This is because under normal circumstances Bash uses a space to determine separate items.

>**Terminal**

~~~console
oscar@oscar-VirtualBox ~/scripts $ myvar=Hello World!
World!: command not found
~~~

**Remember, commands work exactly the same on the command line as they do within a script. Because commands work exactly the same on the command line as in a script it can sometimes be easier to experiment on the command line.**

When we enclose our content in quotes we are indicating to Bash that the contents should be considered as a single item. You may use single quotes ( ' ) or double quotes ( " ):

+ **Single quotes** will treat every character **literally**.
+ **Double quotes** will allow you **to do substitution** (that is include variables within the setting of the value).

>**Terminal**

~~~console
oscar@oscar-VirtualBox ~/scripts $ myvar=Hello World!
World!: command not found
oscar@oscar-VirtualBox ~/scripts $ myvar='Hello World'
oscar@oscar-VirtualBox ~/scripts $ echo $myvar
Hello World
oscar@oscar-VirtualBox ~/scripts $ newvar="More $myvar"
oscar@oscar-VirtualBox ~/scripts $ echo $newvar
More Hello World
oscar@oscar-VirtualBox ~/scripts $ newvar='More $myvar'
oscar@oscar-VirtualBox ~/scripts $ echo $newvar
More $myvar
~~~

##### [![Home](assets\icon\up.png )](#bashscripting-variables) Command Substitution {#bashscripting-variables-commandSubstitution}

Command substitution allows us to take the output of a command or program (what would normally be printed to the screen) and save it as the value of a variable. To do this **we place it within brackets, preceded by a $ sign**.

>**Terminal**

~~~console
oscar@oscar-VirtualBox ~/scripts $ myvar=$( ls /etc/ | wc -l )
oscar@oscar-VirtualBox ~/scripts $ echo There are $myvar entries in the directory /etc
There are 243 entries in the directory /etc
~~~

Command substitution is nice and simple if the output of the command is a single word or line. **If the output goes over several lines then the newlines are simply removed and all the output ends up on a single line.**

##### [![Home](assets\icon\up.png )](#bashscripting-variables) Exporting Variables {#bashscripting-variables-exportingVariables}

Every process is a running instance of a program, this introduces a phenomenon known as scope which affects variables amongst other things. The idea is that variables are limited to the process they were created in. Normaly this isn't an issue but sometimes, for instance, a script may run another script as one of its commands. If we want the variable to be available to the second script then we need to export the variable.

>**script1scope.sh**

~~~bash
#!/bin/bash
#demostrate variable scope 1
var1=blah
var2=foo

#Let's verify their current value
echo $0 :: var1 : $var1, var2 : $var2

#Let's export var1's value to script2scope.sh
export var1
./script2scope.sh

#Let's see what they are now
echo $0 :: var1 : $var1, var2 : $var2
~~~

>**script2scope.sh**

~~~bash
#!/bin/bash
#demostrate variable scope 2

#Let's verify their current value
echo $0 :: var1 : $var1, var2 : $var2

#Let's change their values
var1=flop
var2=bleh
~~~

>**Terminal**

~~~console
oscar@oscar-VirtualBox ~/scripts $ ./script1scope.sh 
./script1scope.sh :: var1 : blah, var2 : foo
./script2scope.sh :: var1 : blah, var2 :
./script1scope.sh :: var1 : blah, var2 : foo
~~~

What actually happens when we export a variable is that we are telling Bash that every time a new process is created (to run another script or such) then make a copy of the variable and hand it over to the new process. So although the variables will have the same name they exist in separate processes and so are unrelated to each other, exporting variables is a one way process.

#### [![Home](assets\icon\up.png )](#bashscripting) Input {#bashscripting-input}

#### [![Home](assets\icon\up.png )](#bashscripting) Arithmetic {#bashscripting-arithmetic}

#### [![Home](assets\icon\up.png )](#bashscripting) If Statements {#bashscripting-ifStatements}

#### [![Home](assets\icon\up.png )](#bashscripting) Loops {#bashscripting-loops}

#### [![Home](assets\icon\up.png )](#bashscripting) Functions {#bashscripting-functions}

#### [![Home](assets\icon\up.png )](#bashscripting) User Interface {#bashscripting-userInterface}