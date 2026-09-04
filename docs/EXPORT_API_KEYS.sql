--C:\Program Files\Dassault Systemes\DELMIA Apriso 2025\WebSite\CentralConfiguration\ClientApplication.xml
--ADD 
--AFTER  ClientApplication name="DELMIA Apriso ${WebAddress}"...
--BEFORE ClientApplication name="FlexNet.XmlManager,WebServices.MessageProcessor"...

<ClientApplication name="nome_da_application">
    <ClientId>20583ac7-1a1f-442d-9794-b771de53771b</ClientId>
    <ClientSecret>88c9421b-8103-43d4-9d56-3aa4e12e7c6b</ClientSecret>
    <ApiKey>5a674fe5-ea40-420b-8a95-439602f86b58</ApiKey>
    <RedirectUris>
        <Uri>${WebRootURL}/Apriso/modules/oauth/oauth_callback.html</Uri>
    </RedirectUris>
    <Scopes>
        <Scope name="personalization" />
        <Scope name="standard_operations" />
    </Scopes>
    <SupportedGrants>
        <Grant>Implicit</Grant>
        <Grant>ClientCredentials</Grant>
    </SupportedGrants>
 </ClientApplication>


 --C:\Program Files\Dassault Systemes\DELMIA Apriso 2025\WebSite\CentralConfiguration\WebServiceProviders.xml

<Provider name="apikeywebservices" friendlyName="API Key for WebServices">
    <ApiKey>
        <Headers>
            <Header>Authorization: ApiKey 5a674fe5-ea40-420b8a95-439602f86b58</Header>
            <Header>X-Client-Application: 20583ac7-1a1f-442d9794-b771de53771b</Header>
        </Headers>
        <QueryString/>
    </ApiKey>
</Provider>


 