# InitializeSignature

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRSignatureManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** InitializeSignature, Initialize, Signature

## Description

This Business Component method is used for retrieving Signature Header definition, Signature Detail definitions and all the related signature properties. It stores the definitions and initialized signatures in current session's EMR context. The context is available for further processing (e.g. BC method AddSignature and the Business Control "Generate EMR Record").

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderName | Char | No | Name of the EMR Header for which all related signature properties should be retrieved. |
| Input | EmrRecordName | Char | No | Name of the EMR Record for which all related signature properties should be retrieved. |
| Output | SignatureRequired | Boolean | No | Indicates if the EMR Record requires any signature. |
| Output | EmrRecordDefinitionID | Integer | No | EMR Record Definition ID. |
| Output | EmrRecordDefinitionDescription | Char | No | EMR Record Definition description. |
| Output | SignatureHeaderDefinitionID | Integer | No | Signature Header Definition ID. |
| Output | SignatureHeaderCode | Char | No | Signature Header Code. |
| Output | SignatureDetailDefinitionIDList | ListofInteger | No | Signature Detail Definition ID list. |
| Output | SignatureDetailCodeList | ListofChar | No | Signature Detail Code list. |
| Output | SignatureRoleIDList | ListofInteger | No | Signature Role ID list. |
| Output | SignatureRoleDescriptionList | ListofChar | No | Signature Role Description list. |
| Output | SignatureClassIDList | ListofInteger | No | Signature Class ID list. |
| Output | SignatureClassDescriptionList | ListofChar | No | Signature Class Description list. |
| Output | SignatureTimelineIDList | ListofInteger | No | Signature Timeline ID list. |
| Output | SignatureTimelineDescriptionList | ListofChar | No | Signature Timeline Description list. |
| Output | SignatureSequenceNoList | ListofInteger | No | Signature Sequence No list. |

## Validations

- System validates if EMR Header exists in the system. 
- System validates if EMR Record exists in the system. 
- System validates if EMR Record requires signature.

## System Processing

- System validates if EMR Record has a linked signature. If there is no signature required, then the system returns SignatureRequired flag as true. 
- System retrieves all the definitions of required signatures. 
- System stores the retrieved signature definitions in the EMR context of current session. It also removes previously signed signatures from the EMR context. 
- System returns all the details of required signatures.
