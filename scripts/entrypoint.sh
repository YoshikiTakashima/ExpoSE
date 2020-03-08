#!/bin/bash

# Run Xvfb server (fake X server)
nohup Xvfb :1 -screen 0 800x600x24 &


# Run SSH
/usr/sbin/sshd -D &
export DISPLAY=:1

# Let debug login as user expose
cd /source
runuser -l expose -c '/bin/bash'
