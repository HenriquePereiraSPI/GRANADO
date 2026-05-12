# MoveFile_v4

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Common.FileMover`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Move, file, MoveFile

## Description

Renames and copies or moves a file between the specified UNC paths.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceFunctionName | Char | No | The name of a sequence that will be used to generate the name of a destination file. |
| Input | SourceFile | Char | Yes | The UNC path that specifies the source file. |
| Input | Delimiter | Char | No | The delimiter to be used to separate the sequence and the source filename. |
| Input | DestinationFolder | Char | Yes | The UNC path of destination folder. |
| Input | MoveFlag | Boolean | Yes | The flag determining if the file is to be copied or moved. |
| Input | IsOverwrite | Boolean | Yes | The flag determining if the file is to be overwritten with the same name if it already exists. |
| Input | TaskID | Integer | No | Task ID to be persisted in transaction history. |
| Output | DestinationFile | Char | No | The destination file name. |

## Validations

- System validates if the delimiter contains any invalid characters (\ / : * ? " < > |). 
- System validates if the sequence name exists in the database. 
- System validates if the source file exists. 
- System validates if the destination folder exists.

## System Processing

- If the IsOverwrite input is set to false, system generates a new destination file name based on the sequence name provided (SequenceFunctionName Input). 
- If the IsOverwrite input is set to true, system uses source file name as destination file name and overwrites the file on the destination folder. 
- If the MoveFlag Input is set to true: 
 
- The system moves the source file (SourceFile Input) into the destination folder (DestinationFolder Input) using the generated destination file name. 
 
- Else the source file is only copied into the destination folder. 
- System writes transaction history.

## Pre-Conditions

There is a task for the TaskID specified.

## History Recording in Production

Source file nameDestination file nameMove flagTask ID if specified.
