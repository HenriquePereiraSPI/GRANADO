USE AprOp25M;
SELECT r.name AS RoleDoFlxAdmin
FROM sys.database_role_members m
JOIN sys.database_principals r ON r.principal_id = m.role_principal_id
JOIN sys.database_principals u ON u.principal_id = m.member_principal_id
WHERE u.name = 'FlxAdmin';


-------------------


--DAR PERMISSÃO
GRANT EXECUTE ON OBJECT::dbo.SP_TEST TO FlxWriter;


------------------

--CONSULTAR PERMISSÃO

SELECT
    dp.name AS Usuario,
    o.name AS ProcedureName,
    p.permission_name,
    p.state_desc
FROM sys.database_permissions p
JOIN sys.database_principals dp
    ON p.grantee_principal_id = dp.principal_id
JOIN sys.objects o
    ON p.major_id = o.object_id
WHERE dp.name = 'FlxWriter'
  AND o.name = 'SP_TEST';