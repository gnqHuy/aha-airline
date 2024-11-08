# QAirlines

## Server Project Setup Guide
Navigate to this directory:

`your_directory\QAirline\api\QAirlines.API`

### Install .NET Tools

Open the terminal and run the following command:

```cli
dotnet tool install --global dotnet-ef
```

### Set up database connection

Open `appsettings.Development.json` file

![alt text](image.png)

Enter your MySQL username and password in the userid and password field, respectively.

### Create and apply migration

Add new migration ( if there's not a Migration folder inside QAirlines.Migrations folder )

```
dotnet ef migrations add <migration_name> --project ../QAirlines.Migrations
```

Update the database ( if you don't have one )

```
dotnet ef database update
```