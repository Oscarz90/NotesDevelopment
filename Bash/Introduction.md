## Bash Scripting

A Bash script is a plain text file which contains a series of commands.

Anything you can run normally on the command line can be put into a script and it will do exactly the same thing. Similarly, anything you can put into a script can also be run normally on the command line and it will do exactly the same thing.

##### How do they work?

---
In the realm of Linux (and computers in general) we have the concept of programs and processes. A program is a blob of binary data consisting of a series of instructions for the CPU and possibly other resources (images, sound files and such) organised into a package and typically stored on your hard disk. When we say we are running a program we are not really running the program but a copy of it which is called a process. What we do is copy those instructions and resources from the hard disk into working memory (or RAM). We also allocate a bit of space in RAM for the process to store variables (to hold temporary working data) and a few flags to allow the operating system (OS) to manage and track the process during it's execution.

When we are at the terminal we have a Bash process running in order to give us the Bash shell. If we start a script running it doesn't actually run in that process but instead starts a new process to run inside.

##### How do we run then?

---
Running a Bash script is fairly easy. Another term you may come across is executing the script (which means the same thing). Before we can execute a script it must have the execute permission set (for safety reasons this persmission is generally not set by default). If you forget to grant this permission before running the script you'll just get an error message telling you as such and no harm will be done.

~~~bash
pi@raspberrypi:~ $ ./myscript.sh
Hello World!
~~~

**myscript.sh**
~~~bash
#!/bin/bash

#A Sample Bash Script by OMS
echo Hello World!
~~~

##### What is ./

---

When you just type a name on the command line Bash tries to find it in a series of directories stored in a variable called $PATH. We can see the current value of this variable using the command echo

~~~bash
pi@raspberrypi:~ $ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games:/opt/bin
~~~

Bash only looks in those specific directories and doesn't consider sub directories or your current directory. It will look through those directories in order and execute the first instance of the program or script that it finds.
The $PATH variable is an individual user variable so each user on a system may set it to suit themselves.

If a program or script is not in one of the directories in your $PATH then you can run it by telling Bash where it should look to find it. You do so by including either an absolute or relative path in front of the program or script name. You'll remember that dot ( . ) is actually a reference to your current directory. Assuming this script is in my home directory I could also have run it by using an absolute path.

~~~bash
pi@raspberrypi:~ $ ./myscript.sh
Hello World!
pi@raspberrypi:~ $ /home/pi/myscript.sh
Hello World!
~~~

##### The Shebang (#!)

---

The hash exclamation mark ( #! ) character sequence is referred to as the Shebang. Following it is the path to the interpreter (or program) that should be used to run (or interpret) the rest of the lines in the text file. (For Bash scripts it will be the path to Bash, but there are many other types of scripts and they each have their own interpreter.)

**Formatting is important here. The shebang must be on the very first line of the file (line 2 won't do, even if the first line is blank). There must also be no spaces before the # or between the ! and the path to the interpreter.**

It is possible to leave out the line with the shebang and still run the script but it is unwise. If you are at a terminal and running the Bash shell and you execute a script without a shebang then Bash will assume it is a Bash script.

~~~bash
pi@raspberrypi:~ $ bash myscript.sh
Hello World!
~~~

##### Formatting

---

Formatting for the shebang was important (ie no spaces, must be on first line). There are many areas in Bash scripts where formatting is important. Typically it involves spaces and either the presence or absence of a space can be the difference between the command working or not. I'll point these out as we encounter them.

The main reason for this is that Bash was originally developed as an interface for Users to interact with the system and later extended to have more powerful scripting capabilities. Many decisions regarding it's behaviour were made considering only the needs of the user and then scripting capabilities had to be worked in, later, around those decisions. People generally don't mind this however as Bash scripts are still an awesome tool for quickly and easily joining existing programs into more powerful solutions.
