-------------------------------------------------------------
-------------------------------------------------------------
--------------------100 Completed Weight----------------------
-------------------------------------------------------------
-------------------------------------------------------------


DECLARE @lang INT = 1033;            
DECLARE @out TABLE (TextID INT);     -- recebe o ID gerado pelo OUTPUT

INSERT INTO TEXT (FUID, Type)
OUTPUT INSERTED.ID INTO @out (TextID)   -- <-- INSERTED.ID (PK da TEXT)
VALUES (NEWID(), NULL);

DECLARE @textId INT = (SELECT TextID FROM @out);
DELETE FROM @out;                       -- limpa pro próximo

INSERT INTO TEXT_TRANSLATION (TextID, LanguageID, [Text], Short, Medium)
VALUES (@textId, @lang, N'Completed Weight', N'Completed Weight', N'Completed Weight');

INSERT INTO WIP_ORDER_STATUS (WipOrderStatus, TextID, DSOrderStatus)
VALUES (100, @textId, 'Completed Weight');

GO

-------------------------------------------------------------
-------------------------------------------------------------
--------------------101 Pending Release----------------------
-------------------------------------------------------------
-------------------------------------------------------------


DECLARE @lang INT = 1033;            
DECLARE @out TABLE (TextID INT);     -- recebe o ID gerado pelo OUTPUT

INSERT INTO TEXT (FUID, Type)
OUTPUT INSERTED.ID INTO @out (TextID)   -- <-- INSERTED.ID (PK da TEXT)
VALUES (NEWID(), NULL);

DECLARE @textId INT = (SELECT TextID FROM @out);
DELETE FROM @out;                       -- limpa pro próximo

INSERT INTO TEXT_TRANSLATION (TextID, LanguageID, [Text], Short, Medium)
VALUES (@textId, @lang, N'Pending Release', N'Pending Release', N'Pending Release');

INSERT INTO WIP_ORDER_STATUS (WipOrderStatus, TextID, DSOrderStatus)
VALUES (101, @textId, 'Pending Release');

GO