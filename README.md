# QAirlines

## Server Project Setup Guide
Open the terminal in this directory:

`your_directory\QAirline\api\QAirlines.API`

Install .NET Tools

```cli
dotnet tool install --global dotnet-ef
```

Add new migration ( if there's not a Migration folder inside QAirlines.Migrations folder )

```
dotnet ef migrations add <migration_name> --project ../QAirlines.Migrations
```

Update the database

```
dotnet ef database update
```