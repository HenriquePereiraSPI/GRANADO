# Get3DEXPERIENCEConfiguration

**Category:** Apriso/3DEXPERIENCE
**Class:** `FlexNet.BusinessFacade.ThreeDmi.ConfigurationReader`
**Assembly:** `FlexNet.BusinessFacade.3DMI, Version=24.0.0.0, Culture=neutral, PublicKeyToken=33f692327842122b`
**Status:** Active
**Keywords:** 3DEXPERIENCE

## Description

Retrieves parts of the 3DEXPERIENCE configuration for use in standard operation flows.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Alias | Char | Yes | 3DEXPERIENCE Platform alias of the configuration. |
| Output | Cloud | Boolean | No | Dynamic Output. Indicates if the cloud deployment is selected. |
| Output | Release | Char | No | Dynamic Output. Release version of DELMIA Apriso instance. Used for on-premises deployments. Otherwise, empty. |
| Output | FD | Char | No | Dynamic Output. Functional Delivery version. Used for on-premises deployments. Otherwise, empty. |
| Output | Tenant | Char | No | Dynamic Output. Identifier of the tenant that connects to 3DEXPERIENCE Platform. Used for on-cloud deployments. Otherwise, empty. |
| Output | PersistDocuments | Boolean | No | Dynamic Output. Indicates if documents are persisted. |
| Output | RetrieveAlternativeDocuments | Boolean | No | Dynamic Output. Indicates if alternative documents are retrieved. |
| Output | RetrieveIpProtectionAndExportControl | Boolean | No | Dynamic Output. Indicates if IP Protection and Export Control are retrieved. |
| Output | 3DSpaceURL | Char | No | Dynamic Output. URL for 3DSpace. |
| Output | TranslationLanguageIDs | List of Integer | No | Dynamic Output. List of LanguageIDs for the translations that should be retrieved for the inputted Alias. |

## Validations

- Validation passes if Alias is not empty. 
- Validation passes if Alias exists in the configuration.

## System Processing

System validates the inputted alias and retrieves the platform configuration.
