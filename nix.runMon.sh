#!/bin/bash

cd mon
java -cp ".:./*:../libs/*" org.nem.monitor.NemMonitor
cd -