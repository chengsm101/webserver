#!/bin/bash

sudo /home/pi/myproject/html/cam/mjpg_streamer -b -i "/home/pi/myproject/html/cam/lib/input_file.so -f /tmp/stream -n pic.jpg" -o "/home/pi/myproject/html/cam/lib/output_http.so -w /home/pi/myproject/html/www"

