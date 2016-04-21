#!/bin/bash
while read -r line
do
  phantomjs ./test.js $line
done < $1
