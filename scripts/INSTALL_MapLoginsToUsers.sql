GO
IF NOT EXISTS(SELECT * FROM sysUsers WHERE name ='FlxAdmin')
               CREATE USER FlxAdmin FOR LOGIN FlxAdmin WITH DEFAULT_SCHEMA=dbo
GO
EXECUTE sp_addrolemember 'db_owner', 'FlxAdmin'
GO
IF NOT EXISTS(SELECT * FROM sysUsers WHERE name ='FlxReader')
               CREATE USER FlxReader FOR LOGIN FlxReader WITH DEFAULT_SCHEMA=dbo
GO
EXECUTE sp_addrolemember 'db_datareader', 'FlxReader'
GO
IF NOT EXISTS(SELECT * FROM sysUsers WHERE name ='FlxWriter')
               CREATE USER FlxWriter FOR LOGIN FlxWriter WITH DEFAULT_SCHEMA=dbo
EXECUTE sp_addrolemember 'db_datareader', 'FlxWriter'
EXECUTE sp_addrolemember 'db_datawriter', 'FlxWriter'
GO
ALTER USER flxAdmin WITH LOGIN=FlxAdmin
ALTER USER FlxReader WITH LOGIN=FlxReader
ALTER USER FlxWriter WITH LOGIN=FlxWriter
GO
