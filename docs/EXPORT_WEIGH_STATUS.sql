-------------------------------------------------------------
-------------------------------------------------------------
--------------------100 CANCELLED----------------------
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
VALUES (@textId, @lang, N'Cancelled', N'Cancelled', N'Cancelled');

INSERT INTO WEIGH_STATUS (WeighStatus, TextID)
VALUES (100, @textId);

GO

-------------------------------------------------------------
-------------------------------------------------------------
--------------------101 Integrated----------------------
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
VALUES (@textId, @lang, N'Integrated', N'Integrated', N'Integrated');

INSERT INTO WEIGH_STATUS (WeighStatus, TextID)
VALUES (101, @textId);

GO

-------------------------------------------------------------
-------------------------------------------------------------
--------------------102 PartialWeigh----------------------
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
VALUES (@textId, @lang, N'PartialWeigh', N'PartialWeigh', N'PartialWeigh');

INSERT INTO WEIGH_STATUS (WeighStatus, TextID)
VALUES (102, @textId);