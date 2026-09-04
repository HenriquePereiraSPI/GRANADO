-------------------------------------------------------------
-------------------------------------------------------------
--------------------100 PRODUCTION LINE----------------------
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
VALUES (@textId, @lang, N'Production Line', N'Production Line', N'Production Line');

INSERT INTO EQUIPMENT_TYPE (EquipmentType, TextID)
VALUES (100, @textId);

GO

-------------------------------------------------------------
-------------------------------------------------------------
--------------------101 WORKCENTER----------------------
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
VALUES (@textId, @lang, N'Workcenter', N'Workcenter', N'Workcenter');

INSERT INTO EQUIPMENT_TYPE (EquipmentType, TextID)
VALUES (101, @textId);

GO

-------------------------------------------------------------
-------------------------------------------------------------
--------------------102 EQUIPMENT----------------------
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
VALUES (@textId, @lang, N'Equipment', N'Equipment', N'Equipment');

INSERT INTO EQUIPMENT_TYPE (EquipmentType, TextID)
VALUES (102, @textId);

GO

-------------------------------------------------------------
-------------------------------------------------------------
--------------------103 FACILITY----------------------
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
VALUES (@textId, @lang, N'Facility', N'Facility', N'Facility');

INSERT INTO EQUIPMENT_TYPE (EquipmentType, TextID)
VALUES (103, @textId);

GO

-------------------------------------------------------------
-------------------------------------------------------------
--------------------104 SENSOR TEMP----------------------
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
VALUES (@textId, @lang, N'Sensor Temperature', N'Sensor Temperature', N'Sensor Temperature');

INSERT INTO EQUIPMENT_TYPE (EquipmentType, TextID)
VALUES (104, @textId);

GO

-------------------------------------------------------------
-------------------------------------------------------------
--------------------105 SENSOR PRESS----------------------
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
VALUES (@textId, @lang, N'Sensor Pressure', N'Sensor Pressure', N'Sensor Pressure');

INSERT INTO EQUIPMENT_TYPE (EquipmentType, TextID)
VALUES (105, @textId);

GO