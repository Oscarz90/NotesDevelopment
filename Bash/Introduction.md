#### Bash Scripting

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
~~~
