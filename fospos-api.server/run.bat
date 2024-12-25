cls

dotnet publish -c Release -o ./publish
xcopy certs publish /E /Y

dotnet ./publish/fospos-api.server.dll
