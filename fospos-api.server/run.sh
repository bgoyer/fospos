#!/bin/bash

# Navigate to the project directory
clear 
rm -rf ./publish

# Run dotnet publish
dotnet publish -c Release -o ./publish
cd ./publish
dotnet fospos-api.server.dll

# Check if the publish was successful
if [ $? -eq 0 ]; then
    echo "Publish succeeded."
else
    echo "Publish failed."
    exit 1
fi