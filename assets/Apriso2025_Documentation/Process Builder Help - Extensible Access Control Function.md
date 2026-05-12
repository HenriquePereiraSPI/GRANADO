# Extensible Access Control Function

The EAC function enables requesting and receiving data access permissions.

Adding the Extensible Access Control Function

Prerequisites

The configuration must be set up in the ExtensibleAccessControlConfiguration.xml file in the
CentralConfiguration folder.

In ExtensibleAccessControlConfiguration.xml you can specify the Request Types, which can then be
selected in the Request Message Type dropdown, Inputs for each Request types, and the
MethodName of the REST Service.

Example configuration:

   <?xml version="1.0"?>
   <ExtensibleAccessControlConfigurations xmlns:xsd="http://www.w3.org/2001/XMLSchema"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" >
   <Request RequestType = "CheckWOAcces">
   <Inputs>
   <Input>
   <Name>View</Name>
   <Type>String</Type>
   </Input>
   <Input>
   <Name>doc123</Name>
   <Type>String</Type>
   </Input>
   </Inputs>

   <MethodName>GetPermitResult</MethodName>

   <MessageBody>
   <![CDATA[
   <?xml version="1.0" encoding="UTF-8"?>
   <xacml-ctx:Request ReturnPolicyIdList="true" CombinedDecision="false" xmlns:xacml-
   ctx="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17">
   <xacml-ctx:Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:action" >
   <xacml-ctx:Attribute AttributeId="actionId" IncludeInResult="true">
   <xacml-ctx:AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">@View@</xacml-
   ctx:AttributeValue>
   </xacml-ctx:Attribute>
   </xacml-ctx:Attributes>
   <xacml-ctx:Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource" >
   <xacml-ctx:Attribute AttributeId="resource-id" IncludeInResult="true">
   <xacml-ctx:AttributeValue
   DataType="http://www.w3.org/2001/XMLSchema#string">@doc123@</xacml-ctx:AttributeValue>
   </xacml-ctx:Attribute>
   </xacml-ctx:Attributes>
   </xacml-ctx:Request>
   ]]>
   </MessageBody>
   </Request>
   </ExtensibleAccessControlConfigurations>

<MessageBody> is a message template that is sent to the EAC service. The attribute values are
replaced by the input values that is inserted during the runtime.

  The attribute values in the Message Body must be preceded and followed by @.

Multiple Request Types can be configured in the ExtensibleAccessControlConfiguration.xml.

To Add the Extensible Access Control Function

Drag the Extensible Access Control function from the Toolbox to the Function Navigation diagram,
or double-click the Extensible Access Control icon in the Toolbox. The system will automatically add
the required Inputs based on the configuration defined in the
ExtensibleAccessControlConfiguration.xml.

EAC Function Inputs

Input              Description
CustomHeaders      A custom information added to the EAC request header.

EAC Function Outputs

Output             Description
Permission         Permission to access the data or object.
DecisionType
                   Possible decision types:

                              Permit
                              Deny
                              Indeterminate
                              NotApplicable

ResultContent      The response message from the service contents.

EAC Function Properties

Field              Description

Request            The type of data the EAC function will try to get the access to. Multiple request
Message            message types can be configured in the ExtensibleAccessControlConfiguration.xml
Type               file.

Block process If the checkbox is selected, the DFC will stop when an error is returned from the

when error EAC service. Otherwise, the error will be ignored and the DFC will continue

occurs             uninterrupted, but the permission to access the data will be denied.
