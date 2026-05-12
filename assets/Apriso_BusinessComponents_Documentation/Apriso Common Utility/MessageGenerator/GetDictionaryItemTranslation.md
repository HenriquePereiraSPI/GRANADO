# GetDictionaryItemTranslation

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.MessageGenerator`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

This Business Component method retrieves translation for the specified Dictionary Item and language.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DictionaryItemCode | Char | Yes | Dictionary Item Code as defined in Dictionary Manager. |
| Input | LanguageID | Integer | No | LanguageID of the language for which the translation is retrieved. |
| Output | ShortText | Char | No | Translation taken from TEXT_TRANSLATION.Short. |
| Output | MediumText | Char | No | Translation taken from TEXT_TRANSLATION.Medium. |
| Output | ExtendedText | Char | No | Translation taken from TEXT_TRANSLATION.Extended. |

## Validations

- Validation fails if Dictionary Item is not provided. 
- Validation fails if Dictionary Item with the provided code does not exists.

## System Processing

- System validates if LanguageId is provided. 
- If yes, translation for the provided LanguageId is retrieved. 
- If no, translation for English (LanguageId = 1033) is retrieved.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TEXT_TRANSLATION | Short | Retrieved short translation. |
| TEXT_TRANSLATION | Medium | Retrieved medium translation. |
| TEXT_TRANSLATION | Extended | Retrieved extended translation. |
