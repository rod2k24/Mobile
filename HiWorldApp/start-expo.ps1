#!/usr/bin/env powershell
# Expo Start Script for HiWorldApp

# Set the working directory
Set-Location "C:\GitHubEnterprise\Mobile\HiWorldApp"

# Run expo start
& "$PSScriptRoot\node_modules\.bin\expo.ps1" start --localhost --android
