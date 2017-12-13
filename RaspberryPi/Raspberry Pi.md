Raspberry Pi, firsts steps.
---

+ Update and upgrade Raspberry pi 

```shell
pi@raspberry:~ $ sudo apt-get update
pi@raspberry:~ $ sudo apt-get dist-upgrade
pi@raspberry:~ $ sudo apt-get clean
```

+ Verify the core temperature

```shell
pi@raspberry:~ $ /opt/vc/bin/vcgencmd measure_temp
```

Constantly monitor the core temperature

[monitor-temperature.py](scripts/monitor-temperature.py)

```python
import os
import time

def measure_temp():
        temp = os.popen("vcgencmd measure_temp").readline()
        return (temp.replace("temp=",""))

while True:
        print(measure_temp())
        time.sleep(1)
```

Execute the script

```shell
pi@raspberrypi:~ $ python monitor-temperature.py
41.9'C
42.3'C
```



