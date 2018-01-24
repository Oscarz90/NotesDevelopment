# Linux CLI and Bash Scripting Tutorial

### Table of Contents

+ [Introduction](#introduction)
+ [What is a Bash Script?](#what-is-a-bash-script)
    * [So what are they exactly?](#so-what-are-they-exactly)
    * [How do they work?](#how-do-they-work)
    * [How do we run them?](#how-do-we-run-them)
    * [Formatting](#formatting)
+ [Variables](#variables)
    * [How do variables work?](#how-do-variables-work)
    * [Command line arguments](#command-line-arguments)
    * [Other Special Variables](#other-special-variables)
    * [Setting Our Own Variables](#setting-our-own-variables)
    * [Quotes](#quotes)
    * [Command Substitution](#command-substitution)
    * [Exporting Variables](#exporting-variables)
    * [Variables Summary](#variables-summary)
+ [Input](#input)
    * [Ask the User for Input](#ask-the-user-for-input)
    * [Reading from STDIN](#reading-from-stdin)
    * [So which should I use?](#so-which-should-i-use)
    * [Input Summary](#input-summary)
+ [Arithmetic](#arithmetic)
    * [Let](#let)
    * [Expr](#expr)
    * [Double Parentheses](#double-parentheses)
    * [Length of a Variable](#length-of-a-variable)
    * [Arithmetic Summary](#arithmetic-summary)
+ [If Statements](#if-statements)
    * [Basic If Statements](#basic-if-statements)
    * [Test](#test)
    * [Indenting](#indenting)
    * [Nested If statements](#nested-if-statements)
    * [If Else](#if-else)
    * [If Elif Else](#if-elif-else)
    * [Boolean Operations](#boolean-operations)
    * [Case Statements](#case-statements)
    * [If Statements Summary](#if-statements-summary)
+ [Loops](#loops)
    * [While Loops](#while-loops)
    * [Until Loops](#until-loops)
    * [For Loops](#for-loops)
    * [Controlling Loops: Break and Continue](#controlling-loops:-break-and-continue)
    * [Select](#select)
    * [Loops Summary](#loops-summary)
+ [Functions](#functions)
    * [Variable Scope](#variable-scope)
    * [Overriding Commands](#overriding-commands)
    * [Design](#design)
    * [Functions Summary](#functions-summary)
+ [User Interface](#user-interface)
    * [TPut](#tput)
    * [Supplying Data](#supplying-data)
    * [Presenting Data](#presenting-data)
    * [Organising Your Code](#organising-your-code)

## Introduction

## What is a Bash Script?

This page is mostly foundation information. It's kinda boring but essential stuff that will help you to appreciate why and how certian things behave the way they do once we start playing about with the fun stuff (which I promise we'll do in the next section). Taking the time to read and understand the material in this section will make the other sections easier to digest so persevere and it'll be well worth your time.

### So what are they exactly?

Think of a script for a play, or a movie, or a TV show. The script tells the actors what they should say and do. A script for a computer tells the computer what it should do or say. In the context of Bash scripts we are telling the Bash shell what it should do.

A Bash script is a plain text file which contains a series of commands. These commands are a mixture of commands we would normally type ouselves on the command line (such as **ls** or **cp** for example) and commands we could type on the command line but generally wouldn't (you'll discover these over the next few pages). An important point to remember though is:

**Anything you can run normally on the command line can be put into a script and it will do exactly the same thing. Similarly, anything you can put into a script can also be run normally on the command line and it will do exactly the same thing.**

You don't need to change anything. Just type the commands as you would normally and they will behave as they would normally. It's just that instead of typing them at the command line we are now entering them into a plain text file. In this sense, if you know how to do stuff at the command line then you already know a fair bit in terms of Bash scripting.

It is convention to give files that are Bash scripts an extension of **.sh** ( [myscript.sh](scripts/myscript.sh) for example). As you would be aware, Linux is an extensionless system so a script doesn't necessarily have to have this characteristic in order to work.

**[Back to top](#table-of-contents)**

### How do they work?

This is just a little bit of background knowledge. It's not necessary to understand this in order to write scripts but it can be useful to know once you start getting into more complex scripts (and scripts that call and rely on other scripts once you start getting really fancy).

In the realm of Linux (and computers in general) we have the concept of programs and processes. A program is a blob of binary data consisting of a series of instructions for the CPU and possibly other resources (images, sound files and such) organised into a package and typically stored on your hard disk. When we say we are running a program we are not really running the program but a copy of it which is called a process. What we do is copy those instructions and resources from the hard disk into working memory (or RAM). We also allocate a bit of space in RAM for the process to store variables (to hold temporary working data) and a few flags to allow the operating system (OS) to manage and track the process during it's execution.

**Essentially a process is a running instance of a program.**

There could be several processes representing the same program running in memory at the same time. For example I could have two terminals open and be running the command **cp** in both of them. In this case there would be two cp processes currently existing on the system. Once they are finished running the system then destroys them and there are no longer any processes representing the program cp.

When we are at the terminal we have a Bash process running in order to give us the Bash shell. If we start a script running it doesn't actually run in that process but instead starts a new process to run inside. We'll demonstrate this in the next section on variables and it's implications should become clearer. For the most part you don't need to worry too much about this phenomenon however.

**[Back to top](#table-of-contents)**

### How do we run them?

Running a Bash script is fairly easy. Another term you may come across is **executing** the script (which means the same thing). Before we can execute a script it must have the execute permission set (for safety reasons this permission is generally not set by default). If you forget to grant this permission before running the script you'll just get an error message telling you as such and no harm will be done.

**Terminal**
```
pi@raspberry:~$ ./myscript.sh
bash: ./myscript.sh: Permission denied
pi@raspberry:~$ ls -l myscript.sh
-rw-r--r-- 18 ryan users 4096 Feb 17 09:12 myscript.sh
pi@raspberry:~$ chmod 755 myscript.sh
pi@raspberry:~$ ls -l myscript.sh
-rwxr-xr-x 18 ryan users 4096 Feb 17 09:12 myscript.sh
pi@raspberry:~$ ./myscript.sh
Hello World!
pi@raspberry:~$
```

>The shorthand **755** is often used for scripts as it allows you **the owner to write or modify** the script and for **everyone to execute** the script.

[myscript.sh](scripts/myscript.sh)
```
#!/bin/bash
# A sample Bash script, by Ryan

echo Hello World!
```

Let's break it down:

+ **Line 1** - Is what's referred to as the **shebang**. See below for what this is.
+ **Line 2** - This is a comment. Anything after **#** is not executed. It is for our reference only.
+ **Line 4** - Is the command echo which will print a message to the screen. You can type this command yourself on the command line and it will behave exactly the same.
The syntax highlighting is there only to make it easier to read and is not something you need to do in your own files (remember they are just plain text files).

**Why the ./**

You've possibly noticed that when we run a normal command (such as **ls**) we just type its name but when running the script above I put a ./ in front of it. **When you just type a name on the command line Bash tries to find it in a series of directories stored in a variable called $PATH**. We can see the current value of this variable using the command **echo** (you'll learn more about variables in the next section).

**Terminal**
```
pi@raspberry:~$ echo $PATH
/home/ryan/bin:/usr/local/bin:/usr/bin:/bin
pi@raspberry:~$
```

The directories are separated by " : "

Bash only looks in those specific directories and doesn't consider sub directories or your current directory. It will look through those directories in order and execute the first instance of the program or script that it finds.

**The $PATH variable is an individual user variable so each user on a system may set it to suit themselves.**

This is done for a few different reasons.

+ It allows us **to have several different versions of a program** installed. We can control which one gets executed based on where it sits in our $PATH.
+ It allows for convenience. As you saw above, the first directory for myself is a **bin** directory in my home directory. This allows me **to put my own scripts and programs there and then I can use them no matter where I am in the system by just typing their name**. I could even create a script with the same name as a program (to act as a wrapper) if I wanted slightly different behaviour.
+ **It increases safety** - For example a malicious user could create a script called **ls** which actually deletes everything in your home directory. You wouldn't want to inadvertantly run that script. But as long as it's not in your $PATH that won't happen.

If a program or script is not in one of the directories in your $PATH then you can run it by telling Bash where it should look to find it. You do so by including either **an absolute or relative path** in front of the program or script name. You'll remember that** dot ( . ) is actually a reference to your current directory**. Assuming this script is in my home directory I could also have run it by using an absolute path.

**Terminal**
```
pi@raspberry:~$ /home/pi/myscript.sh
Hello World!
pi@raspberry:~$
```

**The Shebang (#!)**

**#!/bin/bash**

This is the first line of the script above. **The hash exclamation mark ( #! ) character sequence is referred to as the _Shebang_**. Following it is the path to the interpreter (or program) that should be used to run (or interpret) the rest of the lines in the text file. (For Bash scripts it will be the path to Bash, but there are many other types of scripts and they each have their own interpreter.)

Formatting is important here. **The shebang must be on the very first line of the file** (line 2 won't do, even if the first line is blank). There must also be no spaces before the **#** or between the ! and the path to the interpreter.

Whilst you could use a relative path for the interpreter, most of the time you are going to want to use an absolute path. You will probably be running the script from a variety of locations so absolute is the safest (and often shorter than a relative path too in this particular case).

**It is possible to leave out the line with the shebang and still run the script** but it is unwise. If you are at a terminal and running the Bash shell and you execute a script without a shebang then Bash will assume it is a Bash script. So this will only work assuming the user running the script is running it in a Bash shell and there are a variety of reasons why this may not be the case, which is dangerous.

You can also run Bash, passing the script as an argument.

**Terminal**
```
pi@raspberry:~$ bash myscript.sh
Hello World!
pi@raspberry:~$
```

Whilst this is safe it also involves unnecessary typing every time you want to run the script.

**Best Practice**
>Given the observations above it is best to always include the shebang **( #! )**. It is the most reliable and convenient approach.

### Formatting

As we saw above, formatting for the shebang was important (ie no spaces, must be on first line). **There are many areas in Bash scripts where formatting is important**. Typically it involves spaces and either the presence or absence of a space can be the difference between the command working or not. I'll point these out as we encounter them. Also get in the habit of being mindful of the presence or absence of spaces when looking at code.

The main reason for this is that Bash was originally developed as an interface for Users to interact with the system and later extended to have more powerful scripting capabilities. Many decisions regarding it's behaviour were made considering only the needs of the user and then scripting capabilities had to be worked in, later, around those decisions. People generally don't mind this however as Bash scripts are still an awesome tool for quickly and easily joining existing programs into more powerful solutions.

I have seen students spend quite a bit of time in frustration that a piece of code that looks perfectly fine isn't working. They get quite embarassed when they find out the culprit (a space that either should or shouldn't be there). You will probably make this mistake a few times yourself before it sinks in so don't worry too much but the sooner you get the hang of it the happier you will be :)

Indenting of code is another area of formatting that is important. We'll look at indenting of code in section 5 (If Statements) when it becomes relevant. Indenting is not required but it does make your code easier to read and make it harder to make simple errors.

**[Back to top](#table-of-contents)**

## Variables

For those of you that have dabbled in programming before, you'll be quite familiar with variables. For those of you that haven't, think of a **variable as a temporary store for a simple piece of information**. These variables can be very useful for allowing us to manage and control the actions of our Bash Script. We'll go through a variety of different ways that variables have their data set and ways we can then use them.

Variables are one of those things that are actually quite easy to use but are also quite easy to get yourself into trouble with if you don't properly understand how they work. As such there is a bit of reading in this section but if you take the time to go through and understand it you will be thankful you did later on when we start dabbling in more complex scripts.

**[Back to top](#table-of-contents)**

### How do variables work?

A variable is a temporary store for a piece of information. There are two actions we may perform for variables:

+ Setting a value for a variable.
+ Reading the value for a variable.

Variables may have their value set in a few different ways. The most common are to set the value directly and for its value to be set as the result of processing by a command or program. You will see examples of both below.

**To read the variable we then place its name (preceded by a $ sign)** anywhere in the script we would like. Before Bash interprets (or runs) every line of our script it first checks to see if any variable names are present. For every variable it has identified, it replaces the variable name with its value. Then it runs that line of code and begins the process again on the next line.

Here are a few quick points on syntax. They will be elaborated on and demonstrated as we go into more detail below.

+ When referring to or reading a variable we place a $ sign before the variable name.
+ When setting a variable we leave out the $ sign.
+ Some people like to always write variable names in uppercase so they stand out. It's your preference however. They can be all uppercase, all lowercase, or a mixture.
+ A variable may be placed anywhere in a script (or on the command line for that matter) and, when run, Bash will replace it with the value of the variable. This is made possible as the substitution is done before the command is run.

**[Back to top](#table-of-contents)**

### Command line arguments

Command line arguments are commonly used and easy to work with so they are a good place to start.

When we run a program on the command line you would be familiar with supplying arguments after it to control its behaviour. For instance we could run the command **ls -l /etc**. **-l** and **/etc** are both command line arguments to the command **ls**. We can do similar with our bash scripts. To do this we use the variables **$1** to represent the first command line argument, **$2** to represent the second command line argument and so on. These are automatically set by the system when we run our script so all we need to do is refer to them.

Let's look at an example.

[mycopy.sh](scripts/mycopy.sh)
```
#!/bin/bash
# A simple copy script

cp $1 $2

# Let's verify the copy worked

echo Details for $2
ls -lh $2
```

Let's break it down:

+ **Line 4** - run the command **cp** with the first command line argument as the source and the second command line argument as the destination.
+ **Line 8** - run the command **echo** to print a message.
+ **Line 9** - After the copy has completed, run the command **ls** for the destination just to verify it worked. We have included the options **l** to show us extra information and **h** to make the size human readable so we may verify it copied correctly.

**Terminal**
```
pi@raspberry:~$ ./mycopy.sh /projects/file1.data ./results.data
Details for ./results.data
-rw-r--r-- 18 ryan users 3.4M Feb 14 07:18 results.data
pi@raspberry:~$
```

**[Back to top](#table-of-contents)**

### Other Special Variables

There are a few other variables that the system sets for you to use as well.

**$0** - The name of the Bash script.
**$1** - **$9** - The first 9 arguments to the Bash script. (As mentioned above.)
**$#** - How many arguments were passed to the Bash script.
**$@** - All the arguments supplied to the Bash script.
**$?** - The exit status of the most recently run process.
**$$** - The process ID of the current script.
**$USER** - The username of the user running the script.
**$HOSTNAME** - The hostname of the machine the script is running on.
**$SECONDS** - The number of seconds since the script was started.
**$RANDOM** - Returns a different random number each time is it referred to.
**$LINENO** - Returns the current line number in the Bash script.

**Tip**
>If you type the command **env** on the command line you will see a listing of other variables which you may also refer to.

Some of these variables may seem useful to you now. Others may not. As we progress to more complex scripts in later sections you will see examples of how they can be useful.

**[Back to top](#table-of-contents)**

### Setting Our Own Variables

As well as variables that are preset by the system, we may also set our own variables. This can be useful for keeping track of results of commands and being able to refer to and process them later.

There are a few ways in which variables may be set (such as part of the execution of a command) but the basic form follows this pattern:

`variable=value`

This is one of those areas where formatting is important. Note **there is no space on either side of the equals ( = ) sign**. We also leave off the $ sign from the beginning of the variable name when setting it.

Variable names may be uppercase or lowercase or a mixture of both but Bash is a case sensitive environment so whenever you refer to a variable you must be consistent in your use of uppercase and lowercase letters. You should always make sure variable names are descriptive. This makes their purpose easier for you to remember.

Here is a simple example to illustrate their usage.

[simplevariables.sh](scripts/simplevariables.sh)
```
#!/bin/bash
# A simple variable example

myvariable=Hello

anothervar=Fred

echo $myvariable $anothervar

echo

sampledir=/etc

ls $sampledir
```

Let's break it down:

+ **Lines 4 and 6** - set the value of the two variables myvariable and anothervar.
+ **Line 8** - run the command **echo** to check the variables have been set as intended.
+ **Line 9** - run the command **echo** this time with no arguments. This is a good way to get a blank line on the screen to help space things out.
+ **Line 11** - set another variable, this time as the path to a particular directory.
+ **Line 13** - run the command **ls** substituting the value of the variable sampledir as its first command line argument.

**Terminal**
```
pi@raspberry:~$ ./simplevariables.sh
Hello Fred

a2ps.cfg aliases alsa.d ...
pi@raspberry:~$ 
```

It is important to note that in the example above we used the command **echo** simply because it is a convenient way to demonstrate that the variables have actually been set. echo is not needed to make use of variables and is only used when you wish to print a specific message to the screen. (Pretty much all commands print output to the screen as default so you don't need to put echo in front of them.)

**Best Practice**
>Variables can be useful for making our scripts easier to manage. Maybe our script is going to run several commands, several of which will refer to a particular directory. Rather than type that directory out each time we can set it once in a variable then refer to that variable. Then if the required directory changes in the future we only need to update one variable rather than every instance within the script.

**[Back to top](#table-of-contents)**

### Quotes

In the example above we kept things nice and simple. The variables only had to store a single word. When we want variables to store more complex values however, we need to make use of quotes. This is because under normal circumstances Bash uses a space to determine separate items.

**Terminal**
```
pi@raspberry:~$ myvar=Hello World
-bash: World: command not found
pi@raspberry:~$ 
```

_Remember, commands work exactly the same on the command line as they do within a script._

**Tip**
>Because commands work exactly the same on the command line as in a script it can sometimes be easier to experiment on the command line.

When we enclose our content in quotes we are indicating to Bash that the contents should be considered as a single item. You may use single quotes ( ' ) or double quotes ( " ).

+ **Single quotes** will treat every character **literally**.
+ **Double quotes** will allow you to do **substitution** (that is include variables within the setting of the value).

**Terminal**
```
pi@raspberry:~$ myvar='Hello World'
pi@raspberry:~$ echo $myvar
Hello World
pi@raspberry:~$ newvar="More $myvar"
pi@raspberry:~$ echo $newvar
More Hello World
pi@raspberry:~$ newvar='More $myvar'
pi@raspberry:~$ echo $newvar
More $myvar
pi@raspberry:~$ 
```


**[Back to top](#table-of-contents)**

### Command Substitution

Command substitution allows us to take the output of a command or program (what would normally be printed to the screen) and save it as the value of a variable. To do this we place it within brackets, preceded by a $ sign.

**Terminal**
```
pi@raspberry:~$ myvar=$( ls /etc | wc -l )
pi@raspberry:~$ echo There are $myvar entries in the directory /etc
pi@raspberry:~$ 
```

Command substitution is nice and simple if the output of the command is a single word or line. If the output goes over several lines then the newlines are simply removed and all the output ends up on a single line.

**Terminal**
```
pi@raspberry:~$ ls
bin Documents Desktop ...
Downloads public_html ...
pi@raspberry:~$ myvar=$( ls )
pi@raspberry:~$ echo $myvar
bin Documents Desktop Downloads public_html ...
pi@raspberry:~$ 
```

Let's break it down:

+ **Line 1** - We run the command ls. Normally its output would be over several lines. I have shortened it a bit in the example above just to save space.
+ **Line 4** - When we save the command to the variable **myvar** all the newlines are stripped out and the output is now all on a single line.

**Tip**
>When playing about with command substitution it's a good idea to test your output rather than just assuming it will behave in a certain way. The easiest way to do that is simply to **echo** the variable and see what has happened. (You can then remove the echo command once you are happy.)

**[Back to top](#table-of-contents)**

### Exporting Variables

Remember how in the previous section we talked about scripts being run in their own process? This introduces a phenomenon known as scope which affects variables amongst other things. The idea is that variables are limited to the process they were created in. Normaly this isn't an issue but sometimes, for instance, a script may run another script as one of its commands. If we want the variable to be available to the second script then we need to export the variable.

[script1.sh](scripts/script1.sh)
```
#!/bin/bash
# demonstrate variable scope 1.

var1=blah
var2=foo

# Let's verify their current value

echo $0 :: var1 : $var1, var2 : $var2

export var1
./script2.sh

# Let's see what they are now

echo $0 :: var1 : $var1, var2 : $var2
```

[script2.sh](scripts/script2.sh)
```
#!/bin/bash
# demonstrate variable scope 2

# Let's verify their current value

echo $0 :: var1 : $var1, var2 : $var2

# Let's change their values

var1=flop
var2=bleh
```

Now lets run it and see what happens.

**Terminal**
```
pi@raspberry:~$ ./script1.sh
script1.sh :: var1 : blah, var2 : foo
script2.sh :: var1 : blah, var2 :
script1.sh :: var1 : blah, var2 : foo
pi@raspberry:~$ 
```

The output above may seem unexpected. What actually happens when we export a variable is that we are telling Bash that every time a new process is created (to run another script or such) then make a copy of the variable and hand it over to the new process. So although the variables will have the same name they exist in separate processes and so are unrelated to each other.

Exporting variables is a one way process. The original process may pass variables over to the new process but anything that process does with the copy of the variables has no impact on the original variables.

Exporting variables is something you probably won't need to worry about for most Bash scripts you'll create. Sometimes you may wish to break a particular task down into several separate scripts however to make it easier to manage or to allow for reusability (which is always good). For instance you could create a script which will make a dated (ie todays date prepended to the filename) copy of all filenames exported on a certain variable. Then you could easily call that script from within other scripts you create whenever you would like to take a snapshot of a set of files.

**[Back to top](#table-of-contents)**

### Variables Summary

**Stuff We Learnt**

**$1, $2, ...**
The first, second, etc command line arguments to the script.

**variable=value**
To set a value for a variable. Remember, no spaces on either side of =
**Quotes " '**
Double will do variable substitution, single will not.
**variable=$( command )**
Save the output of a command into a variable
**export var1**
Make the variable var1 available to child processes.

**Important Concepts**

**Formatting**
The presence or absence of spaces is important.
**Manageability**
If a particular value is used several times within a script (eg a file or directory name) then using a variable can make it easier to manage.

**[Back to top](#table-of-contents)**

## Input

We looked at one form of user input (command line arguments) in the previous section. Now we would like to introduce other ways the user may provide input to the Bash script. Following this we'll have a discussion on when and where is best to use each method.

After the mammoth previous section this one is much easier to get through.

**[Back to top](#table-of-contents)**

### Ask the User for Input

If we would like to ask the user for input then we use a command called **read**. This command takes the input and will save it into a variable.

`read var1`

Let's look at a simple example:

[introduction.sh](scripts/introduction.sh)
```
#!/bin/bash
# Ask the user for their name

echo Hello, who am I talking to?

read varname

echo It\'s nice to meet you $varname
```

Let's break it down:

**Line 4** - Print a message asking the user for input.
**Line 6** - Run the command **read** and save the users response into the variable **varname**
**Line 8 - echo** another message just to verify the read command worked. Note: I had to put a backslash ( \ ) in front of the ' so that it was escaped.

**Terminal**
```
pi@raspberry:~$ ./introduction.sh
Hello, who am I talking to?
Ryan
It's nice to meet you Ryan
pi@raspberry:~$ 
```

**Note**: Ryan above is in italics just to show that it was something I typed in. On your terminal input will show up normally.

**More with Read**

You are able to alter the behaviour of **read** with a variety of command line options. (See the man page for read to see all of them.) Two commonly used options however are **-p** which allows you to specify a prompt and **-s** which makes the input silent. This can make it easy to ask for a username and password combination like the example below:

[login.sh](scripts/login.sh)
```
#!/bin/bash
# Ask the user for login details

read -p 'Username: ' uservar
read -sp 'Password: ' passvar
echo
echo Thankyou $uservar we now have your login details
```

+ On lines 4 and 5 above we include the prompt within quotes so we can have a space included with it. Otherwise the user input will start straight after the last character of the prompt which isn't ideal from a readability point of view.

**Terminal**
```
pi@raspberry:~$ ./login.sh
Username: ryan
Password:
Thankyou ryan we now have your login details
pi@raspberry:~$ 
```

**More variables**

So far we have looked at a single word as input. We can do more than that however.

[cars.sh](scripts/cars.sh)
```
#!/bin/bash
# Demonstrate how read actually works

echo What cars do you like?

read car1 car2 car3

echo Your first car was: $car1
echo Your second car was: $car2
echo Your third car was: $car3
```

**Terminal**
```shell
pi@raspberry:~$ ./cars.sh
What cars do you like?
Jaguar Maserati Bentley
Your first car was: Jaguar
Your second car was: Maserati
Your third car was: Bentley
pi@raspberry:~$ 
pi@raspberry:~$ ./cars.sh
What cars do you like?
Jaguar Maserati Bentley Lotus
Your first car was: Jaguar
Your second car was: Maserati
Your third car was: Bentley Lotus
pi@raspberry:~$ 
```

The general mechanism is that you can supply several variable names to **read**. Read will then take your input and split it on whitespace. The first item will then be assigned to the first variable name, the second item to the second variable name and so on. If there are more items than variable names then the remaining items will all be added to the last variable name. If there are less items than variable names then the remaining variable names will be set to blank or null.

**[Back to top](#table-of-contents)**

### Reading from STDIN

It's common in Linux to pipe a series of simple, single purpose commands together to create a larger solution tailored to our exact needs. The ability to do this is one of the real strenghs of Linux. It turns out that we can easily accommodate this mechanism with our scripts also. By doing so we can create scripts that act as filters to modify data in specific ways for us.

Bash accomodates piping and redirection by way of special files. Each process gets it's own set of files (one for STDIN, STDOUT and STDERR respectively) and they are linked when piping or redirection is invoked. Each process gets the following files:

+ **STDIN** - **/proc/<processID>/fd/0**
+ **STDOUT** - **/proc/<processID>/fd/1**
+ **STDERR** - **/proc/<processID>/fd/2**

To make life more convenient the system creates some shortcuts for us:

+ **STDIN** - **/dev/stdin** or **/proc/self/fd/0**
+ **STDOUT** - **/dev/stdout** or **/proc/self/fd/1**
+ **STDERR** - **/dev/stderr** or **/proc/self/fd/2**

**fd** in the paths above stands for file descriptor.

So if we would like to make our script able to process data that is piped to it all we need to do is read the relevant file. All of the files mentioned above behave like normal files.

**summary**
```
#!/bin/bash
# A basic summary of my sales report

echo Here is a summary of the sales data:
echo ====================================
echo

cat /dev/stdin | cut -d' ' -f 2,3 | sort
```

Let's break it down:

**Lines 4, 5, 6** - Print a title for the output
**Line 8** - cat the file representing STDIN, **cut** setting the delimiter to a space, fields 2 and 3 then sort the output.

**Terminal**
```
pi@raspberry:~$ cat salesdata.txt
Fred apples 20 December 4
Susy oranges 5 December 7
Mark watermelons 12 December 10
Terry peaches 7 December 15
pi@raspberry:~$ 
pi@raspberry:~$ cat salesdata.txt | ./summary
Here is a summary of the sales data:
====================================

apples 20
oranges 5
peaches 7
watermelons 12
pi@raspberry:~$ 
```

**[Back to top](#table-of-contents)**

### So which should I use?

So we now have 3 methods for getting input from the user:

+ Command line arguments
+ Read input during script execution
+ Accept data that has been redirected into the Bash script via STDIN

Which method is best depends on the situation.

You should normally favor command line arguments wherever possible. They are the most convenient for users as the data will be stored in their command history so they can easily return to it. It is also the best approach if your script may be called by other scripts or processes (eg. maybe you want it to run periodically using [CRON](https://www.linuxtotal.com.mx/index.php?cont=info_admon_006).

Sometimes the nature of the data is such that it would not be ideal for it to be stored in peoples command histories etc. A good example of this is login credentials (username and password). In these circumstances it is best to **read** the data during script execution.

If all the script is doing is processing data in a certain way then it is probably best to work with STDIN. This way it can easily be added into a pipeline.

Sometimes you may find that a combination is ideal. The user may supply a filename as a command line argument and if not then the script will process what it finds on STDIN (when we look at If statements we'll see how this may be achieved). Or maybe command line arguments define certain behaviour but **read** is also used to ask for more information if required.

Ultimatately you should think about 3 factors when deciding how users will supply data to your Bash script:

+ **Ease of use** - which of these methods will make it easiest for users to use my script?
+ **Security** - Is there sensitive data which I should handle appropriately?
+ **Robustness** - Can I make it so that my scripts operation is intuitive and flexible and also make it harder to make simple mistakes?

**[Back to top](#table-of-contents)**

### Input Summary

**Stuff We Learnt**

**read varName**
Read input from the user and store it in the variable varName.
**/dev/stdin**
A file you can read to get the STDIN for the Bash script

**Important Concepts**

**Useability**
Your choice of input methods will have an impact on how useable your script is.

**[Back to top](#table-of-contents)**


## Arithmetic

Depending on what type of work you want your scripts to do you may end up using arithmetic a lot or not much at all. It's a reasonable certainty however that you will need to use arithmetic at some point. Like variables, they are reasonably easy to implement and knowing how to do so is an essential skill in Bash scripting mastery.

There are several ways to go about arithmetic in Bash scripting. We'll cover them for completeness but the recommended approach is arithmetic expansion (covered last).

**[Back to top](#table-of-contents)**

### Let

**let** is a builtin function of Bash that allows us to do simple arithmetic. It follows the basic format:

`let <arithmetic expression>`

The arithmetic expression can take a variety of formats which we'll outline below. The first part is generally always a variable which the result is saved into however.

Let's look at a simple example:

[let_example.sh](scripts/let_example.sh)
```
#!/bin/bash
# Basic arithmetic using let

let a=5+4
echo $a # 9

let "a = 5 + 4"
echo $a # 9

let a++
echo $a # 10

let "a = 4 * 5"
echo $a # 20

let "a = $1 + 30"
echo $a # 30 + first command line argument
```

Let's break it down:

**Line 4** - This is the basic format. Note that if we don't put quotes around the expression then it must be written with no spaces.
**Line 7** - This time we have used quotes which allow us to space out the expression to make it more readable.
**Line 10** - This is a shorthand for increment the value of the variable a by 1. It is the same as writing "a = a + 1".
**Line 16** - We may also include other variables in the expression.

**Terminal**
```
pi@raspberry:~$ ./let_example.sh 15
9
9
10
20
45
pi@raspberry:~$ 
```

Here is a table with some of the basic expressions you may perform. There are others but these are the most commonly used.

| Operator | Operation |
| :---: | :--- |
| **+, -, /*, /**  | addition, subtraction, multiply, divide |
| **var++** | Increase the variable var by 1 |
| **var--** | Decrease the variable var by 1 |
| **%** | Modulus (Return the remainder after division) |

These operators may be used in the other mechanisms described below as well.

**[Back to top](#table-of-contents)**

### Expr

**expr** is similar to let except instead of saving the result to a variable it instead prints the answer. Unlike **let** you don't need to enclose the expression in quotes. You also must have spaces between the items of the expression. It is also common to use **expr** within command substitution to save the output to a variable.

`expr item1 operator item2`

[expr_example.sh](scripts/expr_example.sh)
```
#!/bin/bash
# Basic arithmetic using expr

expr 5 + 4

expr "5 + 4"

expr 5+4

expr 5 \* $1

expr 11 % 2

a=$( expr 10 - 3 )
echo $a # 7
```

Let's break it down:

**Line 4** - This is the basic format. Note that there must be spaces between the items and no quotes.
**Line 6** - If we do put quotes around the expression then the expression will not be evaluated but printed instead.
**Line 8** - If we do not put spaces between the items of the expression then the expression will not be evaluated but printed instead.
**Line 10** - Some characters have a special meaning to Bash so we must escape them (put a backslash in front of) to remove their special meaning.
**Line 12** - Here we demonstrate the operator **modulus**. The modulus is the remainder when the first item is divided by the second item.
**Line 14** - This time we're using expr within command substitution in order to save the result to the variable **a**.

**Terminal**
```
pi@raspberry:~$ ./expr_example.sh 12
9
5 + 4
5+4
60
1
7
pi@raspberry:~$ 
```

**[Back to top](#table-of-contents)**

### Double Parentheses

In the section on Variables we saw that we could save the output of a command easily to a variable. It turns out that this mechanism is also able to do basic arithmetic for us if we tweak the syntax a little. We do so by using double brackets like so:

`$(( expression ))`

Here's an example to illustrate:

**_expansion_example.sh_**
```
#!/bin/bash
# Basic arithmetic using double parentheses

a=$(( 4 + 5 ))
echo $a # 9

a=$((3+5))
echo $a # 8

b=$(( a + 3 ))
echo $b # 11

b=$(( $a + 4 ))
echo $b # 12

(( b++ ))
echo $b # 13

(( b += 3 ))
echo $b # 16

a=$(( 4 * 5 ))
echo $a # 20
```

Let's break it down:

**Line 4** - This is the basic format. As you can see we may space it out nicely for readability without the need for quotes.
**Line 7** - As you can see, it works just the same if we take spacing out.
**Line 10** - We may include variables without the preceding $ sign.
**Line 13** - Variables can be included with the $ sign if you prefer.
**Line 16** - This is a slightly different form. Here the value of the variable b is incremented by 1 (using the same mechanism illustrated under **let**). When we do this we don't need the $ sign preceding the brackets.
**Line 19** - This is a slightly different form of the previous example. Here the value of the variable b is incremented by 3. It is a shorthand for **b = b + 3**.
**Line 19** - Unlike other methods, when we do multiplication we don't need to escape the * sign.

**Terminal**
```
pi@raspberry:~$ ./expansion_example.sh
9
8
11
12
13
16
20
pi@raspberry:~$ 
```

So as you can see double parenthese is quite flexible in how you format it's expression. This is part of why we prefer this method. As double parentheses is builtin to Bash it also runs slighly more efficiently (though to be honest, with the raw computing power of machines these days the difference in performance is really insignificant).

**[Back to top](#table-of-contents)**

### Length of a Variable

This isn't really arithmetic but it can be quite useful. If you want to find out the lengh of a variable (how many characters) you can do the following:

`${#variable}`

Here's an example:

[length_example.sh](scripts/length_example.sh)
```
#!/bin/bash
# Show the length of a variable.

a='Hello World'
echo ${#a} # 11

b=4953
echo ${#b} # 4
```

**Terminal**
```
pi@raspberry:~$ ./length_example.sh
11
4
pi@raspberry:~$ 
```

**[Back to top](#table-of-contents)**

### Arithmetic Summary

**Stuff We Learnt**

**let expression**
Make a variable equal to an expression.
**expr expression**
print out the result of the expression.
**$(( expression ))**
Return the result of the expression.
**${#var}**
Return the length of the variable var.

**Important Concepts**

**Arithmetic**
There are several ways in which to do arithmetic in Bash scripts. Double parentheses is the preferred method.
**Formatting**
When doing arithmetic, the presence or absence of spaces (and quotes) is often important.

**[Back to top](#table-of-contents)**

## If Statements

Bash if statements are very useful. In this section of our Bash Scripting Tutorial you will learn the ways you may use if statements in your Bash scripts to help automate tasks.

If statements (and, closely related, case statements) allow us to make decisions in our Bash scripts. They allow us to decide whether or not to run a piece of code based upon conditions that we may set. If statements, combined with loops (which we'll look at in the next section) allow us to make much more complex scripts which may solve larger tasks.

Like what we have looked at in previous sections, their syntax is very specific so stay on top of all the little details.

**[Back to top](#table-of-contents)**

#### Basic If Statements

A basic if statement effectively says, **if** a particular test is true, then perform a given set of actions. If it is not true then don't perform those actions. If follows the format below:

```  
if [ <some test> ]
then
  <commands>
fi
```

Anything between **then** and **fi** (if backwards) will be executed only if the test (between the square brackets) is true.

Let's look at a simple example:

[if_example.sh](scripts/if_example.sh)
```
#!/bin/bash
# Basic if statement

if [ $1 -gt 100 ]
then
  echo Hey that\'s a large number.
  pwd
fi

date
```

Let's break it down:

**Line 4** - Let's see if the first command line argument is greater than 100
**Line 6 and 7** - Will only get run if the test on line 4 returns true. You can have as many commands here as you like.
**Line 6** - The backslash ( \ ) in front of the single quote ( ' ) is needed as the single quote has a special meaning for bash and we don't want that special meaning. The backslash escapes the special meaning to make it a normal plain single quote again.
**Line 8** - fi signals the end of the if statement. All commands after this will be run as normal.
**Line 10** - Because this command is outside the if statement it will be run regardless of the outcome of the if statement.

**Terminal**
```
pi@raspberry:~$ ./if_example.sh 15
Thu 28 Dec 17:58:45 2017
pi@raspberry:~$ ./if_example.sh 150
Hey that's a large number.
/home/ryan/bin
Thu 28 Dec 17:58:45 2017
pi@raspberry:~$ 
```

**Tip**
>It is always good practice to test your scripts with input that covers the different scenarios that are possible.

**[Back to top](#table-of-contents)**

#### Test

The square brackets ( [ ] ) in the **if** statement above are actually a reference to the command **test**. This means that all of the operators that test allows may be used here as well. Look up the man page for test to see all of the possible operators (there are quite a few) but some of the more common ones are listed below.

| Operator | Description |
| :---: | :--- |
| Operator | Description |
| ! EXPRESSION |  The EXPRESSION is false. |
| -n STRING | The length of STRING is greater than zero. |
| -z STRING | The lengh of STRING is zero (ie it is empty). |
| STRING1 = STRING2 |  STRING1 is equal to STRING2 |
| STRING1 != STRING2 |   STRING1 is not equal to STRING2 |
| INTEGER1 -eq INTEGER2 | INTEGER1 is numerically equal to INTEGER2 |
| INTEGER1 -gt INTEGER2 | INTEGER1 is numerically greater than INTEGER2 |
| INTEGER1 -lt INTEGER2 | INTEGER1 is numerically less than INTEGER2 |
| -d FILE | FILE exists and is a directory. |
| -e FILE | FILE exists. |
| -r FILE | FILE exists and the read permission is granted. |
| -s FILE | FILE exists and it's size is greater than zero (ie. it is not empty). |
| -w FILE | FILE exists and the write permission is granted. |
| -x FILE | FILE exists and the execute permission is granted. |

A few points to note:

+ **=** is slightly different to **-eq**. [ 001 = 1 ] will return false as = does a string comparison (ie. character for character the same) whereas -eq does a numerical comparison meaning [ 001 -eq 1 ] will return true.
+ When we refer to FILE above we are actually meaning a path. Remember that a path may be absolute or relative and may refer to a file or a directory.
+ Because [ ] is just a reference to the command **test** we may experiment and trouble shoot with test on the command line to make sure our understanding of its behaviour is correct.

**Terminal**
```
pi@raspberry:~$ test 001 = 1
pi@raspberry:~$ echo $?
1
pi@raspberry:~$ test 001 -eq 1
pi@raspberry:~$ echo $?
0
pi@raspberry:~$ touch myfile
pi@raspberry:~$ test -s myfile
pi@raspberry:~$ echo $?
1
pi@raspberry:~$ ls /etc > myfile
pi@raspberry:~$ test -s myfile
pi@raspberry:~$ echo $?
0
pi@raspberry:~$ 
```

Let's break it down:

**Line 1** - Perform a string based comparison. Test doesn't print the result so instead we check it's exit status which is what we will do on the next line.
**Line 2** - The variable **$?** holds the exit status of the previously run command (in this case test). 0 means TRUE (or success). 1 = FALSE (or failure).
**Line 4** - This time we are performing a numerical comparison.
**Line 7** - Create a new blank file **myfile** (assuming that myfile doesn't already exist).
**Line 8** - Is the size of **myfile** greater than zero?
**Line 11** - Redirect some content into myfile so it's size is greater than zero.
**Line 12** - Test the size of **myfile** again. This time it is TRUE.


**[Back to top](#table-of-contents)**

#### Indenting

You'll notice that in the **if** statement above we indented the commands that were run if the statement was true. This is referred to as indenting and is an important part of writing good, clean code (in any language, not just Bash scripts). The aim is to improve readability and make it harder for us to make simple, silly mistakes. There aren't any rules regarding indenting in Bash so you may indent or not indent however you like and your scripts will still run exactly the same. I would highly recommend you do indent your code however (especially as your scripts get larger) otherwise you will find it increasingly difficult to see the structure in your scripts.

**[Back to top](#table-of-contents)**

#### Nested If statements

Talking of indenting. Here's a perfect example of when it makes life easier for you. You may have as many **if** statements as necessary inside your script. It is also possible to have an if statement inside of another if statement. For example, we may want to analyse a number given on the command line like so:

[nested_if.sh](scripts/nested_if.sh)
```
#!/bin/bash
# Nested if statements

if [ $1 -gt 100 ]
then
  echo Hey that\'s a large number.

  if (( $1 % 2 == 0 ))
  then
    echo And is also an even number.
  fi
fi
```

Let's break it down:

**Line 4** - Perform the following, only if the first command line argument is greater than 100.
**Line 8** - This is a light variation on the **if** statement. If we would like to check an expression then we may use the double brackets just like we did for variables.
**Line 10** - Only gets run if both if statements are true.

**Tip**
>You can nest as many if statements as you like but as a general rule of thumb if you need to nest more than 3 levels deep you should probably have a think about reorganising your logic.

**[Back to top](#table-of-contents)**

#### If Else

Sometimes we want to perform a certain set of actions if a statemen is true, and another set of actions if it is false. We can accommodate this with the **else** mechanism.

```
if [ <some test> ]
then
  <commands>
else
  <other commands>
fi
```

Now we could easily read from a file if it is supplied as a command line argument, **else** read from STDIN.

[else.sh](scripts/else.sh)
```
#!/bin/bash
# else example

if [ $# -eq 1 ]
then
  nl $1
else
  nl /dev/stdin
fi
```

**[Back to top](#table-of-contents)**

#### If Elif Else

Sometimes we may have a series of conditions that may lead to different paths.
```
if [ <some test> ]
then
  <commands>
elif [ <some test> ] 
then
  <different commands>
else
  <other commands>
fi
```

For example it may be the case that if you are 18 or over you may go to the party. If you aren't but you have a letter from your parents you may go but must be back before midnight. Otherwise you cannot go.

[if_elif.sh](scripts/if_elif.sh)
```
#!/bin/bash
# elif statements

if [ $1 -ge 18 ]
then
  echo You may go to the party.
elif [ $2 == 'yes' ]
then
  echo You may go to the party but be back before midnight.
else
  echo You may not go to the party.
fi
```

You can have as many elif branches as you like. The final else is also optional.

**[Back to top](#table-of-contents)**

#### Boolean Operations

Sometimes we only want to do something if multiple conditions are met. Other times we would like to perform the action if one of several condition is met. We can accommodate these with **boolean operators**.

+ **and** - &&
+ **or** - ||

For instance maybe we only want to perform an operation if the file is readable **and** has a size greater than zero.

[and.sh](scripts/and.sh)
```
#!/bin/bash
# and example

if [ -r $1 ] && [ -s $1 ]
then
  echo This file is useful.
fi
```

Maybe we would like to perform something slightly different if the user is either bob or andy.

[or.sh](scripts/or.sh)
```
#!/bin/bash
# or example

if [ $USER == 'bob' ] || [ $USER == 'andy' ]
then
  ls -alh
else
  ls
fi
```

**[Back to top](#table-of-contents)**

#### Case Statements

Sometimes we may wish to take different paths based upon a variable matching a series of patterns. We could use a series of **if** and **elif** statements but that would soon grow to be unweildly. Fortunately there is a **case** statement which can make things cleaner. It's a little hard to explain so here are some examples to illustrate:

```
case <variable> in
<pattern 1>)
  <commands>
  ;;
<pattern 2>)
  <other commands>
  ;;
esac
```

Here is a basic example:

[case.sh](scripts/case.sh)
```
#!/bin/bash
# case example

case $1 in
  start)
    echo starting
    ;;
  stop)
    echo stoping
    ;;
  restart)
    echo restarting
    ;;
  *)
    echo don\'t know
    ;;
esac
```

Let's break it down:

**Line 4** - This line begins the **case mechanism**.
**Line 5** - If $1 is equal to 'start' then perform the subsequent actions. the ) signifies the end of the pattern.
**Line 7** - We identify the end of this set of statements with a double semi-colon ( ;; ). Following this is the next case to consider.
**Line 14** - Remember that the test for each case is a pattern. The * represents any number of any character. It is essentialy a catch all if for if none of the other cases match. It is not necessary but is often used.
**Line 17** - esac is case backwards and indicates we are at the end of the case statement. Any other statements after this will be executed normally.

**Terminal**
```
pi@raspberry:~$ ./case.sh start
starting
pi@raspberry:~$ ./case.sh restart
restarting
pi@raspberry:~$ ./case.sh blah
don't know
pi@raspberry:~$ 
```

Now let's look at a slightly more complex example where patterns are used a bit more.

**_disk_usage.sh_**
```
#!/bin/bash
# Print a message about disk useage.

space_free=$( df -h | awk '{ print $5 }' | sort -n | tail -n 1 | sed 's/%//' )

case $space_free in
  [1-5]*)
    echo Plenty of disk space available
    ;;
  [6-7]*)
    echo There could be a problem in the near future
    ;;
  8*)
    echo Maybe we should look at clearing out old files
    ;;
  9*)
    echo We could have a serious problem on our hands soon
    ;;
  *)
    echo Something is not quite right here
    ;;
esac
```

**[Back to top](#table-of-contents)**

#### If Statements Summary

**Stuff We Learng**

**if**
Perform a set of commands if a test is true.
**else**
If the test is not true then perform a different set of commands.
**elif**
If the previous test returned false then try this one.
**&&**
Perform the and operation.
**||**
Perform the or operation.
**case**
Choose a set of commands to execute depending on a string matching a particular pattern.

**Important Concepts**

**Indenting**
Indenting makes your code much easier to read. It get's increasingly important as your Bash scripts get longer.
**Planning**
Now that your scripts are getting a little more complex you will probably want to spend a little bit of time thinking about how you structure them before diving in.

**[Back to top](#table-of-contents)**

## Loops

Bash loops are very useful. In this section of our Bash Scripting Tutorial we'll look at the different loop formats available to us as well as discuss when and why you may want to use each of them.

Loops allow us to take a series of commands and keep re-running them until a particular situation is reached. They are useful for automating repetitive tasks.

There are 3 basic loop structures in Bash scripting which we'll look at below. There are also a few statements which we can use to control the loops operation.

**[Back to top](#table-of-contents)**

### While Loops

One of the easiest loops to work with is **while** loops. They say, while an expression is true, keep executing these lines of code. They have the following format:

```
while [ <some test> ]
do
  <commands>
done
```

You'll notice that similar to if statements the test is placed between square brackets [ ].

In the example below we will print the numbers 1 through to 10:

[while_loop.sh](scripts/while_loop.sh)
```
#!/bin/bash
# Basic while loop

counter=1
while [ $counter -le 10 ]
do
  echo $counter
  ((counter++))
done

echo All done
```

Let's break it down:

**Line 4** - We'll initialise the variable **counter** with it's starting value.
**Line 5** - While the test is true (counter is less than or equal to 10) let's do the following commands.
**Line 7** - We can place any commands here we like. Here **echo** is being used as it's an easy way to illustrate what is going on.
**Line 8** - Using the double brackets we can increase the value of **counter** by 1.
**Line 9** - We're at the bottom of the loop so go back to line 5 and perform the test again. If the test is true then execute the commands. If the test is false then continue executing any commands following **done**.

**Terminal**
```
pi@raspberry:~$ ./while_loop.sh
1
2
3
4
5
6
7
8
9
10
All done
pi@raspberry:~$ 
```

**Tip**
>A common mistake is what's called an off by one error. In the example above we could have put -lt as opposed to -le (less than as opposed to less than or equal). Had we done this it would have printed up until 9. These mistakes are easy to make but also easy to fix once you've identified it so don't worry too much if you make this error.

**[Back to top](#table-of-contents)**

### Until Loops

The **until** loop is fairly similar to the while loop. The difference is that it will execute the commands within it until the test becomes true.

```
until [ <some test> ]
do
  <commands>
done
```

[until_loop.sh](scripts/until_loop.sh)
```
#!/bin/bash
# Basic until loop

counter=1
until [ $counter -gt 10 ]
do
  echo $counter
  ((counter++))
done

echo All done
```

As you can see in the example above, the syntax is almost exactly the same as the while loop (just replace while with until). We can also create a script that does exactly the same as the while example above just by changing the test accordingly.

So you may be asking, 'Why bother having the two different kinds of loops?'. We don't necessarily. The while loop would be able to handle every scenario. Sometimes, however, it just makes it a little easier to read if we phrase it with **until** rather than **while**. Think about the following statement:

**Leave the towel on the line until it's dry.**

We could have said:

**Leave the towel on the line while it is not dry.**

Or:

**Leave the towel on the line while it is wet.**

But they just don't seem as elegant and easy to understand. So by having both while and until we can pick whichever one makes the most sense to us and as a result, end up with code that is easier for us to understand when we read it.

**Tip**
>We should always strive for clean, obvious and elegant code when writing our Bash scripts.

**[Back to top](#table-of-contents)**

### For Loops

The **for** loop is a little bit different to the previous two loops. What it does is say for each of the items in a given list, perform the given set of commands. It has the following syntax.

```
for var in <list>
do
  <commands>
done
```

The for loop will take each item in the list (in order, one after the other), assign that item as the value of the variable **var**, execute the commands between do and done then go back to the top, grab the next item in the list and repeat over.

The list is defined as a series of strings, separated by spaces.

Here is a simple example to illustrate:

[for_loop.sh](scripts/for_loop.sh)
```
#!/bin/bash
# Basic for loop

names='Stan Kyle Cartman'

for name in $names
do
  echo $name
done

echo All done
```

Let's break it down:

**Line 4** - Create a simple list which is a series of names.
**Line 6** - For each of the items in the list **$names** assign the item to the variable **$name** and do the following commands.
**Line 8** - echo the name to the screen just to show that the mechanism works. We can have as many commands here as we like.
**Line 11** - echo another command to show that the bash script continued execution as normal after all the items in the list were processed.

**Terminal**
```
pi@raspberry:~$ ./for_loop.sh
Stan
Kyle
Cartman
All done
pi@raspberry:~$ 
```

**Ranges**

We can also process a series of numbers

[for_loop_series.sh](scripts/for_loop_series.sh)
```
#!/bin/bash
# Basic range in for loop

for value in {1..5}
do
  echo $value
done

echo All done
```

+ **Line 4** - It's important when specifying a range like this that there are no spaces present between the curly brackts { }. If there are then it will not be seen as a range but as a list of items.

**Terminal**
```
pi@raspberry:~$ ./for_loop_series.sh
1
2
3
4
5
All done
pi@raspberry:~$ 
```

When specifying a range you may specify any number you like for both the starting value and ending value. The first first value may also be larger than the second in which case it will count down.

It is also possible to specify a value to increase or decrease by each time. You do this by adding another two dots ( .. ) and the value to step by.

[for_loop_stepping.sh](scripts/for_loop_stepping.sh)
```
#!/bin/bash
# Basic range with steps for loop

for value in {10..0..2}
do
  echo $value
done

echo All done
```

**Terminal**
```
pi@raspberry:~$ ./for_loop.sh
10
8
6
4
2
0
All done
pi@raspberry:~$ 
```

One of the more useful applications of **for** loops is in the processing of a set of files. To do this we may use wildcards. Let's say we want to convert a series of .html files over to .php files.

[convert_html_to_php.sh](scripts/convert_html_to_php.sh)
```
#!/bin/bash
# Make a php copy of any html files

for value in $1/*.html
do
  cp $value $1/$( basename -s .html $value ).php
done
```

**[Back to top](#table-of-contents)**

### Controlling Loops: Break and Continue

Most of the time your loops are going to through in a smooth and ordely manner. Sometimes however we may need to intervene and alter their running slightly. There are two statements we may issue to do this.

**Break**

The **break** statement tells Bash to leave the loop straight away. It may be that there is a normal situation that should cause the loop to end but there are also exceptional situations in which it should end as well. For instance, maybe we are copying files but if the free disk space get's below a certain level we should stop copying.

[copy_files.sh](scripts/copy_files.sh)
```
#!/bin/bash
# Make a backup set of files

for value in $1/*
do
  used=$( df $1 | tail -1 | awk '{ print $5 }' | sed 's/%//' )
  if [ $used -gt 90 ]
  then
    echo Low disk space 1>&2
    break
  fi
  cp $value $1/backup/
done
```

**Continue**

The **continue** statement tells Bash to stop running through this iteration of the loop and begin the next iteration. Sometimes there are circumstances that stop us from going any further. For instance, maybe we are using the loop to process a series of files but if we happen upon a file which we don't have the read permission for we should not try to process it.

[copy_check.sh](scripts/copy_check.sh)
```
#!/bin/bash
# Make a backup set of files

for value in $1/*
do
  if [ ! -r $value ]
  then
    echo $value not readable 1>&2
    continue
  fi
cp $value $1/backup/
done
```

**[Back to top](#table-of-contents)**

### Select

The **select** mechanism allows you to create a simple menu system. It has the following format:

```
select var in <list>
do
  <commands>
done
```

When invoked it will take all the items in **list** (similar to other loops this is a space separated set of items) and present them on the screen with a number before each item. A prompt will be printed after this allowing the user to select a number. When they select a number and hit enter the corresponding item will be assigned to the variable **var** and the commands between do and done are run. Once finished a prompt will be displayed again so the user may select another option.

A few points to note:

+ No error checking is done. If the user enters something other than a number or a number not corresponding to an item then **var** becomes null (empty)
+ If the user hits enter without entering any data then the list of options will be displayed again.
+ The loop will end when an EOF signal is entered or the break statement is issued.
+ You may change the system variable **PS3** to change the prompt that is displayed.

Here is a simple example to illustrate it's usage:

[select_example.sh](scripts/select_example.sh)
```
#!/bin/bash
# A simple menu system

names='Kyle Cartman Stan Quit'

PS3='Select character: '

select name in $names
do
  if [ $name == 'Quit' ]
  then
    break
  fi
  echo Hello $name
done

echo Bye
```

Let's break it down:

+ **Line 4** - Set up a variable with the list of characters and a last option which we may select to quit. Note that the items are separated by a space.
+ **Line 6** - Change the value of the system variable **PS3** so that the prompt is set to something a little more descriptive. (By default it is #?)
+ **Lines 10 - 13** - If the last option, 'Quit', is selected then **break** out of the select loop.
+ **Line 14** - Print out a message just to demonstrate the mechanism has worked. You may have as many commands here as you like.
+ **Line 17** - Print a message just to show that the script has continued as normal after the **select** loop.

And now let's run the Bash script:

**Terminal**
```
pi@raspberry:~$ ./select_example.sh
1) Kyle     3) Stan
2) Cartman  4) Quit
Select character: 2
Hello Cartman
Select Character: 1
Hello Kyle
Select character: 4
Bye
pi@raspberry:~$ 
```

**[Back to top](#table-of-contents)**

### Loops Summary

**Stuff We Learng**

**while do done**
Perform a set of commands while a test is true.
**until do done**
Perform a set of commands until a test is true.
**for do done**
Perform a set of commands for each item in a list.
**break**
Exit the currently running loop.
**continue**
Stop this iteration of the loop and begin the next iteration.
**select do done**
Display a simple menu system for selecting items from a list.

**Important Concepts**

**Clarity**
There are several Bash loop mechanisms. Pick the one which makes your code the easiest to follow.
**Planning**
Now that your scripts are getting a little more complex you will probably want to spend a little bit of time thinking about how you structure them before diving in.

**[Back to top](#table-of-contents)**

## Functions

Functions in Bash Scripting are a great way to reuse code. In this section of our Bash scripting tutorial you'll learn how they work and what you can do with them.

Think of a function as a small script within a script. It's a small chunk of code which you may call multiple times within your script. They are particularly useful if you have certain tasks which need to be performed several times. Instead of writing out the same code over and over you may write it once in a function then call that function every time.

Creating a function is fairly easy. They may be written in two different formats:

```
function_name () {
  <commands>
}
```

or

```
function function_name {
  <commands>
}
```

A few points to note:

+ Either of the above methods of specifying a function is valid. Both operate the same and there is no advantage or disadvantage to one over the other. It's really just personal preference.
+ In other programming languages it is common to have arguments passed to the function listed inside **the brackets (), in Bash they are there only for decoration and you never put anything inside them.**
+ The **function definition** ( the actual function itself) **must appear in the script before any calls to the function**.

Let's look at a simple example:

[function_example.sh](scripts/function_example.sh)
```
#!/bin/bash
# Basic function

print_something () {
  echo Hello I am a function
}

print_something
print_something
```

Let's break it down:

**Line 4** - We start defining the function by giving it a name.
**Line 5** - Within the curly brackets we may have as many commands as we like.
**Lines 8 and 9** - Once the function has been defined, we may call it as many times as we like and it will execute those commands.

**Terminal**
```
pi@raspberry:~$ ./function_example.sh
Hello I am a function
Hello I am a function
pi@raspberry:~$ 
```

**Best Practice**
>You should pick function names that are descriptive. That way it is obvious what task the function serves.

**Passing Arguments**

It is often the case that we would like the function to process some data for us. We may send data to the function in a similar way to passing command line arguments to a script. We supply the arguments directly after the function name. Within the function they are accessible as **$1, $2, etc.**

[arguments_example.sh](scripts/arguments_example.sh)
```
#!/bin/bash
# Passing arguments to a function

print_something () {
  echo Hello $1
}

print_something Mars
print_something Jupiter
```

**Terminal**
```
pi@raspberry:~$ ./arguments_example.sh
Hello Mars
Hello Jupiter
pi@raspberry:~$ 
```

**Return Values**

Most other programming languages have the concept of a return value for functions, a means for the function to send data back to the original calling location. Bash functions don't allow us to do this. They do however allow us to set a return status. Similar to how a program or command exits with an exit status which indicates whether it succeeded or not. We use the keyword **return** to indicate a return status.

[return_status_example.sh](scripts/return_status_example.sh)
```
#!/bin/bash
# Setting a return status for a function

print_something () {
  echo Hello $1
  return 5
}

print_something Mars
print_something Jupiter
echo The previous function has a return value of $?
```

Let's break it down

+ **Line 6** - The return status doesn't have to be hardcoded. It may be a variable
+ **Line 11** - Remember that the variable $? contains the return status of the previously run command or function.

**Terminal**
```
pi@raspberry:~$ ./return_status_example.sh
Hello Mars
Hello Jupiter
The previous function has a return value of 5
pi@raspberry:~$ 
```

**Tip**
>Typically a return status of 0 indicates that everything went successfully. A non zero value indicates an error occurred.

If all you want to do is return a number (eg. the result of a calculation) then you can consider using the return status to achieve this. It is not it's intended purpose but it will work.

One way to get around this is to use **Command Substitution** and have the function print the result (and only the result).

[return_hack.sh](scripts/return_hack.sh)
```
#!/bin/bash
# Setting a return value to a function

lines_in_file () {
  cat $1 | wc -l
}

num_lines=$( lines_in_file $1 )

echo The file $1 has $num_lines lines in it.
```

**Terminal**
```
pi@raspberry:~$ cat myfile.txt
Tomato
Lettuce
Capsicum
pi@raspberry:~$ ./return_hack.sh myfile.txt
The file myfile.txt has 3 lines in it.
pi@raspberry:~$ 
```

Just be wary if you take this approach as if you don't call the function with command substitution then it will print the result to the screen. Sometimes that is ok because that is what you want. Other times that may be undesireable.

**[Back to top](#table-of-contents)**

### Variable Scope

Scope refers to which parts of a script can see which variables. By default a variable is **global**. This means that it is visible everywhere in the script. **We may also create a variable as a local variable**. When we create a local variable within a function, it is only visible within that function. To do that we use the keyword local in front of the variable the first time we set it's value.

```
local var_name=<var_value>
```

It is generally considered good practice to use local variables within functions so as to keep everything within the function contained. This way variables are safer from being inadvertently modified by another part of the script which happens to have a variable with the same name (or vice versa)

[local_variables.sh](scripts/local_variables.sh)
```
#!/bin/bash
# Experimenting with variable scope

var_change () {
  local var1='local 1'
  echo Inside function: var1 is $var1 : var2 is $var2
  var1='changed again'
  var2='2 changed again'
}

var1='global 1'
var2='global 2'

echo Before function call: var1 is $var1 : var2 is $var2

var_change

echo After function call: var1 is $var1 : var2 is $var2
```

**Terminal**
```
pi@raspberry:~$ ./local_variables.sh
Before function call: var1 is global 1 : var2 is global 2
Inside function: var1 is local 1 : var2 is global 2
After function call: var1 is global 1 : var2 is 2 changed again
pi@raspberry:~$ 
```

**Best Practice**
>Always use local variables within functions. Use global variables as a last resort and consider if there is a better way to do it before using them.

Scope can sometimes be hard to get your head around at first. If it seems a bit confusing, the best approach is to create a Bash script similar to the one above and tweak it several times setting and changing variables in different places then observing the behaviour when you run it.

**[Back to top](#table-of-contents)**

### Overriding Commands

It is possible to name a function as the same name as a command you would normally use on the command line. This allows us to create a wrapper. eg. Maybe every time we call the command ls in our script, what we actually want is **ls -lh**. We could do the following:

[override.sh](scripts/override.sh)
```
#!/bin/bash
# Create a wrapper around the command ls

ls () {
  command ls -lh
}

ls
```

Let's break it down:

+ **Line 5** - When we have a function with the same name as a command we need to put the keyword command in front of the the name when we want the command as opposed to the function as the function normally takes precedence.

In the example above, if we didn't put the keyword **command** in front of ls on line 5 we would end up in an endless loop. Even though we are inside the function ls when we call ls it would have called another instance of the function ls which in turn would have done the same and so on.

**Tip**
>It's easy to forget the **command** keyword and end up in an endless loop. If you encounter this then you can cancel the script from running by pressing the keys **CTRL+C** at the same time on your keyboard. **CTRL+C** is a good way to cancel your script (or a program) whenever you get into trouble on the command line.

**[Back to top](#table-of-contents)**

### Design

Creating functions in your Bash scripts is easy. Creating good functions that make your scripts easier to write and maintain takes time and experience however. As with most things with computers when you get to this level of complexity, there will be several ways you could achieve the desired outcome. Some will be better than others so take the time to think about different ways you could write your code and which way may be better.

Sometimes better is least lines of code, sometimes better is easiest to modify later if requirements change. Sometimes better is the approach which is least prone to errors.

If a particular task needs to be performed several times then it is a good candidate for placing within a function.

Sometimes it is good to put ancilliary tasks within functions too so that they are logically separate from the main part of the script. A common example is validating input (eg. making sure a specified file exists and is readable).

A function is most reuseable when it performs a single task and a single task only. Instead of having a large function, consider breaking it up into several functions and breaking the task up.

You need to find the right balance however. If the functions are too large and take on too much processing then you don't get the full benefit. If you divide up into too many functions then your code can easily grow and become silly. With experience you will find that sweet spot in the middle.

**[Back to top](#table-of-contents)**

### Functions Summary

**Stuff We Learnt**

**function <name> or <name> ()**
Create a function called name.
**return <value>**
Exit the function with a return status of value.
**local <name>=<value>**
Create a local variable within a function.
**command <command>**
Run the command with that name as opposed to the function with the same name.

**Important Concepts**

**Re-use**
Functions allow us to easily re-use code making the code easier to manage and read.
**Planning**
Now that your scripts are getting a little more complex you will probably want to spend a little bit of time thinking about how you structure them before diving in.

**[Back to top](#table-of-contents)**

### User Interface

This is the final section in the tutorial and I'd like to use it to discuss a very important topic (which is often neglected) the user interface. I've touched on various points regarding the user interface throughout the tutorial but here I'll bring them all together and introduce a few other concepts as well.

When most people think about the user interface they think about the bits the end user sees and how they interact with the tool. For Bash scripts I like to think about the layout and structure of the commands inside the script as well. Bash scripts are often small tools used to automate tedious and repetitive tasks. They are always readable by the end user and often modified to suit changing requirements. Therefore the ease with which the user (often yourself) may modify and extend the script is also very important.

**[Back to top](#table-of-contents)**

### TPut

tput is a command which allows you to control the cursor on the terminal and the format of content that is printed. It is quite a powerful and complex tool so I'll introduce some of the basics here but leave it up to you to do further research.

Here is an example printing a message in the center of the screen.

[center_message.sh](scripts/center_message.sh)
```
#!/bin/bash
# Print message in center of terminal

cols=$( tput cols )
rows=$( tput lines )

message=$@

input_length=${#message}

half_input_length=$(( $input_length / 2 ))

middle_row=$(( $rows / 2 ))
middle_col=$(( ($cols / 2) - $half_input_length ))

tput clear

tput cup $middle_row $middle_col
tput bold
echo $@
tput sgr0
tput cup $( tput lines ) 0
```

Let's break it down:

+ **Line 4** - **tput cols** will tell us how many columns the terminal has.
+ **Line 5** - **tput lines** will tell us how many lines (or rows) the terminal has.
+ **Line 7** - Take all the command line arguments and assign them to a single variable **message**.
+ **Line 9** - Find out how many characters are in the string **message**. We had to assign all the input values to the variable **message** first as ${#@} would tell us how many command line arguments there were instead of the number of characters combined.
+ **Line 11** - We need to know what 1/2 the length of the string **message** is in order to center it.
+ **Lines 13 and 14** - Calculate where to place the message for it to be centered.
+ **Line 16** - **tput clear** will clear the terminal.
+ **Line 18** - **tput cup** will place the cursor at the given row and column.
+ **Line 19** - **tput bold** will make everything printed to the screen bold.
+ **Line 20** - Now we have everything set up let's print our message.
+ **Line 21** - **tput sgr0** will turn bold off (and any other changes we may have made).
+ **Line 22** - Place the prompt at the bottom of the screen.

**Terminal**
```
pi@raspberry:~$ ./center_message.sh Hello there



                          Hello there



pi@raspberry:~$ 
```

**Note:** Normally the first prompt (where we run the script) would be removed with the clear command. We have left it here only so you can see that it was run to get the script started.

With **tput** and a bit of creativity you can create some really interesting effects. Especially so if you delay actions using the command **sleep**. Only use it when appropriate however. Most of the time just printing the processed data (without formatting) is more convenient for the user.

**[Back to top](#table-of-contents)**

### Supplying Data

Remember there are 3 ways in which you may supply data to a Bash script:

+ As command line arguments
+ Redirected in as STDIN
+ Read interactively during script execution

Your script may use one or a combination of these but should always aim to be the most convenient for the user.

Command line arguments are good as they will be retained in the users history making it easy for them to rerun commands. Command line arguments are also convenient when the script is not run directly by the user (eg, as part of another script or a cron task etc).

Redirected from STDIN is good when your script is behaving like a filter and just modifying or reformatting data that is fed to it.

Reading interactively is good when you don't know what data may be required until the script is already running. eg. You may need to clarify some suspicious or erroneous input. Passwords are also ideally asked for this way so they aren't kept as plain text in the users history.

**Input Flexibility**

Think about how strict you are going to be with supplied data as well. The more flexible you can be the happier the end user is going to be. Think of someone supplying a date as an argument. They could supply the date as:

**04-01-2018**

or

**04/01/2018**

or

**04:01:2018**

We could write our script to insist on input in only one particular format. This would be easiest for us but potentially not convenient for the end user. What if they want to feed the date in as provided from another command or source that provides it in a different format?

We should always aim to be most convenient for the end user as oposed to ourselves. After all, we'll write it once but they will run it many times.

The command sed can easily allow us to accommodate many formats for input data.

[flexible_date.sh](scripts/flexible_date.sh)
```
#!/bin/bash
# A date is the first command line argument

clean_date=$( echo $1 | sed 's/[ /:\^#]/-/g' )

echo $clean_date
```

**[Back to top](#table-of-contents)**

### Presenting Data

Remember that the terminal and the nature of the commands you use there are typically a little different to your normal interaction with computers in a graphical user interface. Again we want what is most convenient for the user. Often this is just to print the output as a plain result, without any formatting or fancy messages surrounding it. Then it is easiest for the user to redirect the output into other commands for further processing or to a file for saving.

**[Back to top](#table-of-contents)**

### Organising Your Code

Presentation of your code is very important and you should take pride in it. Good structure makes it easier for you to see what the code is doing and harder to make silly mistakes (which can easily waste a lot of time or potentially worse if you don't realise the mistake).

It's common to take the approach of 'yeah yeah, that's other people though, I don't make those silly mistakes so I can be lazy and write sloppy code and it'll be fine.' Everyone can make mistakes, even [NASA](https://en.wikipedia.org/wiki/Mars_Climate_Orbiter#Cause_of_failure). Take the time to structure your code well and later on you'll be thankful you did.

+ Indent your code and space it out well so that different sections are easily distinguished.
+ Name variables and functions with descriptive names so it is clear what they represent and do.
+ Use comments where appropriate to explain a bit of code who's operation is not immediately obvious.

**[Back to top](#table-of-contents)**


