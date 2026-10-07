DECLARE @lang INT = 1033;            
DECLARE @out TABLE (TextID INT);     -- recebe o ID gerado pelo OUTPUT

-- ================= Tipo 100 = Linha =================
INSERT INTO TEXT (FUID, Type)
OUTPUT INSERTED.ID INTO @out (TextID)   -- <-- INSERTED.ID (PK da TEXT)
VALUES (NEWID(), NULL);

DECLARE @textId INT = (SELECT TextID FROM @out);
DELETE FROM @out;                       -- limpa pro próximo

INSERT INTO TEXT_TRANSLATION (TextID, LanguageID, [Text], Short, Medium)
VALUES (@textId, @lang, N'Custom Alert', N'Custom Alert', N'Custom Alert');

INSERT INTO ALERT_TYPE (ID, TextID, Active)
VALUES (8, @textId, 1);