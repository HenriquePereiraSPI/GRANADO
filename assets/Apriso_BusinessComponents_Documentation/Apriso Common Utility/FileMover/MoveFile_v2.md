# MoveFile_v2

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Common.FileMover`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to rename and copy or move a file between the specified UNC paths.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceFunctionName | Char | Yes | The name of a sequence that will be used to generate the name of a destination file. |
| Input | SourceFile | Char | Yes | The UNC path that specifies the source file. |
| Input | DestinationFolder | Char | Yes | The UNC path of destination folder. |
| Input | MoveFlag | Boolean | Yes | The flag determining if the file is to be copied or moved. |
| Input | TaskID | Integer | Yes | Task ID to be persisted in transaction history. |
| Output | DestinationFile | Char | No | The destination file name. |

## Validations

- System validates if the sequence name exists in the database.  
- System validates if the source file exists.  
- System validates if the destination folder exists.

## System Processing

- System generates a new destination file name based on the sequence name provided (SequenceFunctionName Input). 
- If the MoveFlag Input is set to true:  
 
- The system moves the source file (SourceFile Input) into the destination folder (DestinationFolder Input) using the generated destination file name. 
 
- Else the source file is only copied into the destination folder.  
- System writes transaction history.

## Pre-Conditions

There is a task for the TaskID specified.

## History Recording in Production

The following information is persisted:
 
 
- Source file name 
- Destination file name 
- Move flag 
- Task ID if specified.
