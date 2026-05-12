# Web Service Function

SOAP Web Services are deprecated.

This Function invokes a remote Web Service using one of the two available standards:
           SOAP
           HTTP

You can switch between SOAP and HTTP services using the Web Service Type drop-down menu.

To Add the Web Service Function

Drag the Web Service Function from the Toolbox to the Function Navigation diagram, or double-
click the Web Service icon in the Toolbox. The system will automatically add the required Inputs
based on Web Service Type.

SOAP Service

Field              Description
Web Service        The type of Web Service to be used: SOAP or HTTP.
Type
WSDL URL           The URL of the WSDL definition of Web Service.
URL                The URL of the remote Web Service.

                   The default URL is set based on the provided WSDL. In some cases, the
                   server name in URL and the WSDL URL are different (for example, in a
                   cluster environment) and need to be changed. In such a case, the URL can
                   be changed in two ways: by changing only the server name using the
                   ServerName Input, or by changing the whole URL using the RuntimeURL
                   Input.

Test button        Performs a test execution of Web Service. If you modified the linked DFC,
                   compile it before running the web service test.
Load/Refresh
button             Reads the WSDL definition of the web service containing the list of services,
Service Name       methods, and their inputs and outputs.
Method Name
Authentication     Name of the remote service which will be invoked.
Type
                   Name of the method which will be invoked.

                   There are three types of Authentication to choose from:

                              Anonymous Access – no authentication
                              Basic Authentication – HTTP basic authentication (Inputs: Username
                              and Password are added to the Function and used to access the web
                              service)
                              NTLM Authentication – the authentication protocol used in Microsoft
                              Windows networks

Inputs and         The list of Inputs and Outputs used to invoke remote web service.
Outputs
                   The list of methods whose parameters have complex types (not supported by
Unsupported        Process Builder).
methods

To invoke DFC on web service (e.g. for testing purposes), the proxy definition cached using
"WebServiceProxyCacheExpirationSpan" is needed. That is why changes in web service
interface may not be visible immediately. For details, refer to the "Framework" section of the
Central Configuration Documentation .

Inputs

Inputs             Description

RuntimeURL The URL (endpoint) used to call the web service in runtime. If specified, it overrides
                   the URL from WSDL definition.

ServerName The server name which is used to call web service. If specified, it overrides the host
                   name part of the URL from WSDL definition.

Timeout            The connection timeout for calling the web service in runtime. The value zero
                   means using a default timeout value (one minute).

Username The name of the user which is used for authentication.

Password The password that is used for authentication.

  The default number of characters which could be sent as WebService Input or Output equals
  8192. When calling a DFC that uses text longer than 8192 characters as Input or Output, make
  sure the below flags are set to the necessary values:
  WebServiceMaxStringContentLength setting in CentralConfiguration.xml file (for details, see
  "Framework" section of the Central Configuration Documentation ).
  <readerQuotas maxStringContentLength="..." /> setting in <drive>\Program Files\Dassault

   Systemes\DELMIA Apriso 2025\WebSite\WebServices\Web.config

  <readerQuotas maxStringContentLength="..." /> setting in <drive>\Program Files\Dassault

   Systemes\DELMIA Apriso 2025\WebSite\WebServices\Public\web.config

HTTP Service

For detailed information on how to configure HTTP Web Services, see the Web APIs Guide.

If a Web Service Function of the HTTP type is included in a GPM Package, the
WebServiceProviders.xml file (<drive>\Program Files\Dassault Systemes\DELMIA Apriso
2025\Website\CentralConfigurationWebServiceProviders.xml) will also be included in the package
as a dependency. Deploying the package on a destination server will overwrite the local
definition of a provider with the same name as the one used by the web service function (if
any). For example, if the function uses a service provider with the name of "apriso", it will
overwrite the "apriso" provider defined in WebServiceProviders.xml on the destination server (for
more information on package deployments, see Global Process Manager Help ).

External client certificates are supported. For information on how to enable external certificates
refer to Configuration Manager Help.

Field              Description

Web Service The type of web service to be used: SOAP or HTTP.
Type

URL                The URL (endpoint) of the web service.

HTTP request One of the supported HTTP methods: GET, POST, PUT, or DELETE.

method
                      If Protection type is set to 3DPassport, only the GET method is available.

Protection         The web service's protection level: Public, OAuth2.0 Token, API Key, or
type               3DPassport.

Service            The entity providing (hosting) the web service. The provider must be defined in
provider           WebServiceProviders.xml (see the Adding a Web Service Provider section in the
                   Web APIs Guide).

Inputs

Inputs             Description

CustomHeaders A list of char representing any additional headers to be used when making the
                         request to the web service.

                   The Accept header is set to application/json by default.

Timeout            The connection timeout for calling the web service in runtime. Zero means
Payload            using the default value (100 seconds).

                   The body of the request (e.g. { "Inputs" : { "Input1" : "Value1", "Input2" :
                   "Value2" }}). This Input is only available if the HTTP request method is set to

                   POST or PUT.

                              If the payload is JSON, "Content-Type: application/json" must be
                              added to CustomHeaders
                              If the payload is XML, "Content-Type: application/xml" must be added
                              to CustomHeaders

Additional           The data type of the Payload Input can be changed to Complex/List of
Parameters           Complex if "Content-Type: application/json" is added to CustomHeaders.

                   To learn what inputs a particular web service expects, make a GET request to
                   that web service. In response, you will receive a JSON document (if the Accept
                   header is set to application/json, as it is by default) or an XML document
                   (Accept: application/xml) containing sample execution parameters which you
                   can use in the body of your POST or PUT request.

                   You can use Inputs to specify additional parameters. They will replace any
                   placeholders used in the URL.

                   All placeholders in the URL should use the following format:
                   ${parameterName}, and are subject to the same limitations that apply to
                   Function Input names. See Input Properties for details.

Outputs

Outputs            Description

StatusCode The HTTP status code returned by the web service (e.g. 200 OK).

ReasonPhrase A short textual description of the Status Code (e.g. 200 OK).

Headers            The headers of the response.

Content

                   The body of the response.

                   The data type of the Output can be changed to Complex/List of Complex if
                   "Accept: application/json" is added CustomHeaders.
