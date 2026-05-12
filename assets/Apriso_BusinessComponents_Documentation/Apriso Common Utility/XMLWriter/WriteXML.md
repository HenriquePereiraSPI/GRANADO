# WriteXML

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.XMLWriter`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

This BC provides Services a way to generate custom XML without building a new BC. The custom XML can represent hierarchical data that WriteTransactioHistory BC cannot support. This BC does not perform any operation to the database. It simply creates a custom XML in the following structure:
  <rootName>
 <SessionContext/>
 XMLSegment
 </rootName > 
 
 
- rootName - user input of the name of the root node 
- SessionContext - similar to all BC XML, SessionContext segment is to be included in all custom XML. SessionContext provides traceability with transactional information. 
- XMLSegment - user input of the custom XML Segment. The purpose of this BC is to add custom messages to the log files.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | RootName | Char | Yes | Name of the root node of the new XML |
| Input | XMLSegment | Char | Yes | A well formed custom XML segment |

## Validations

- rootName cannot be empty string 
- XMLSegment cannot be empty String and must be a valid well formed XML. Well formed means there's one root node and each open tag has a closing tag.

## System Processing

The rootName is passed into the standard BI Composer as the transaction name. The XML Segment is added to the transaction data context. Then the write method is invoked to create the custom XML. This is done using the standard BI framework. Therefore this BC supports all standard BI configurations and settings.

## Pre-Conditions

- The user of WriteXML is responsible for creating a valid XSD to ensure XML validation succeeds when DisableAllBusinessComponentXMLValidation is set to false. 
- DisableAllBusinessComponentXMLValidation is set to true which means all BC xml are not validated. In this case, XSD for the custom can be omitted. 
- In Configuration Manager, the new XSD name will not be available in the drop down for source schema for routing and mapping configurations. User needs to manually type in the rootName.
