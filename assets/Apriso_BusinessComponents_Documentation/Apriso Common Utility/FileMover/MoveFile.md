# MoveFile

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Common.FileMover`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to rename and copy or move a file between the specified UNC paths.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceFunctionName | Char | Yes | The name of sequence that will be used to generate the name of destination file |
| Input | SourceFile | Char | Yes | The UNC path that specifies the source file. |
| Input | SestinationFolder | Char | Yes | The UNC path of destination folder. |
| Input | MoveFlag | Boolean | Yes | The flag determining if the file is to be copied or moved |
| Input | TaskID | Boolean | No | Task ID to be presisted in transaction history. |

## System Processing

- System generates a new destination file name based on the sequence name provided (input sequenceFunctionName) 
- System copies or moves (input moveFlag set to true) the source file (input sourceFile) into the destination folder (input destinationFolder) using generated destination file name 
- System writes transaction history.

## Pre-Conditions

There is a task for the TaskID specified.

## History Recording in Production

The following information is persisted:
 
 
- Source file name 
- Destination file name 
- Move flag 
- Task ID if specified.
