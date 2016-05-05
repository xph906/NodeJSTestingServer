#!/bin/bash

filename="$1"
if [ $# -ne 1 ]; then
  echo "usage: ./removeRedirection.sh url_file"
  exit 1
fi

while read -r line
do
  rs=$(curl -A "Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0" -Is $line | egrep -i 'HTTP/1\.[0-1] 200 OK')  
  if [ -n "$rs" ]; then
    echo "good url $line"
  fi
done < $filename
