#!/bin/bash

cd ncc
java -cp ".:./*:../libs/*" org.nem.deploy.CommonStarter
cd -
