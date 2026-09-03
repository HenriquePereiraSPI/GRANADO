/* =========================================================
   1. CRIAR LOGIN
   ========================================================= */

USE [master];
GO

CREATE LOGIN [cliente_externo]
WITH
    PASSWORD = 'ColoqueUmaSenhaForteAqui';
GO


/* =========================================================
   2. DEFINIR DATABASE PADRÃO
   ========================================================= */

ALTER LOGIN [cliente_externo]
WITH DEFAULT_DATABASE = [MeuBanco];
GO


/* =========================================================
   3. CRIAR USER NO DATABASE
   ========================================================= */

USE [MeuBanco];
GO

CREATE USER [cliente_externo]
FOR LOGIN [cliente_externo];
GO


/* =========================================================
   4. PERMISSÃO NAS VIEWS
   ========================================================= */

GRANT SELECT
ON OBJECT::[dbo].[vw_Clientes]
TO [cliente_externo];

GRANT SELECT
ON OBJECT::[dbo].[vw_Pedidos]
TO [cliente_externo];
GO


/* =========================================================
   5. PERMISSÃO NAS PROCEDURES
   ========================================================= */

GRANT EXECUTE
ON OBJECT::[dbo].[pr_ConsultarCliente]
TO [cliente_externo];

GRANT EXECUTE
ON OBJECT::[dbo].[pr_ConsultarPedido]
TO [cliente_externo];
GO