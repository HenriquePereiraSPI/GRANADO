# GenerateTranslatedLiteral

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.MessageGenerator`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active
**Keywords:** Generate Literal Translation, Placeholder Replacement, LITERAL, LITERAL_TRANSLATION

## Description

The purpose of this business component is to get the short, medium, and long translations of a literal, and replace string placeholders with values coming from the function inputs.
 

 

Placeholders are substrings that are surrounded by curly brackets. For example, in the literal translation: *Employee ID: {EmployeeID}*, the substring *{EmployeeID}* is a placeholder. If you have a function input named EmployeeID, its value will replace all instances of the placeholder {EmployeeID}. The name of the placeholder and input should be an exact match. 
 

 

Function input names cannot repeat the names of the inputs of this business component. If a function input cannot find a matching placeholder, it will be ignored.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LiteralID | Char | Yes | ID of the literal. |
| Input | LanguageID | Integer | No | Language ID of the literal translation. If not supplied, the default Language ID will be used. |
| Output | TranslatedLiteralShort | Char | No | Short literal translation. |
| Output | TranslatedLiteralMedium | Char | No | Medium literal translation. |
| Output | TranslatedLiteralLong | Char | No | Long literal translation. |

## Validations

- Validate if LiteralID is not empty.  
- Validate if LanguageID is supplied. If not use default LanguageID.

## System Processing

- Get the literal translations and replace the placeholders with values coming from the function inputs.

## Pre-Conditions

LiteralID must have actual records in the LITERAL and LITERAL_TRANSLATION tables. The LITERAL_TRANSLATION columns Short, Medium, and Extended should have values in order to return non-empty literal translations.

## Published Events

None

## History Recording in Production

None

## Host Integration Support

None
