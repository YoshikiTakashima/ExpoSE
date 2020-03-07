#!/bin/bash

# Run SSH
/usr/sbin/sshd -D &
# Run Xvfb server (fake X server)
nohup Xvfb :1 -screen 0 800x600x24 &

# Let debug login as user expose
runuser -l expose -c '/bin/bash'
