#!/bin/bash

# Installs node.js and npm on Raspberry Pi 3
# See https://raspberrypi.stackexchange.com/a/48313
# and https://raspberrypi.stackexchange.com/a/69527

PURPLE='\033[1;35m'
NC='\033[0m' # No Color
F="${PURPLE}[install-rasp-arm7-node.sh]${NC}"

echo -e "${F} Changing directory to ~"
cd ~

echo -e "${F} Getting the arm7 binary from nodejs.org"
wget https://nodejs.org/dist/v8.9.3/node-v8.9.3-linux-armv7l.tar.xz

echo -e "${F} Uncompressing the tarball"
tar xf node-v8.9.3-linux-armv7l.tar.xz


echo -e "${F} Copying files to /usr/local"
cd node-v8.9.3-linux-armv7l
sudo cp -R * /usr/local/

echo -e "${F} Adding node and npm to PATH temporarily for this bash session"
export PATH=$PATH:/usr/local/bin

echo -e "${F} Adding node and npm to PATH permantly by writing to .bashrc"
cd ~
LINE='export PATH=$PATH:/usr/local/bin # Managed by install-rasp-arm7-node.sh'
FILE=.bashrc
grep -q "$LINE" "$FILE" || echo "$LINE" >> "$FILE"

echo -e "${F} Deleting temporary files"
rm node-v8.9.3-linux-armv7l.tar.xz
rm -R node-v8.9.3-linux-armv7l

echo -e "${F} Outputting node version"
node -v

echo -e "${F} Outputting npm version"
npm -v
