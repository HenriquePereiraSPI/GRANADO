# GetClientInformation

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.ClientInfoRetreiver`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to get basic information about the client that is connected to the DELMIA Apriso Portal. If proxy server is used, proxy address is ignored if header X_FORWARDED_FOR is set by the server during forwarding.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Output | HostAddress | Char | Yes | The IP address of the client. |
| Output | HostName | Char | No | The DNS host name (or IP address) of the client. |
| Output | DNSName | Char | No | The primary DNS host name of the client. |

## System Processing

System retrieves client info.
