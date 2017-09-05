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
