--C:\Program Files\Dassault Systemes\DELMIA Apriso 2025\WebSite\CentralConfiguration\ClientApplication.xml
--ADD 
--AFTER  ClientApplication name="DELMIA Apriso ${WebAddress}"...
--BEFORE ClientApplication name="FlexNet.XmlManager,WebServices.MessageProcessor"...

--CONFIGURAR NO SERVIDOR WEB

<ClientApplication name="APIWebServices">
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


 --USAGE

 POST: https://MES-WEB-QA.granado.com.br/apriso/httpServices/operations/GRD_CreateProductWS

 headers:{
    Authorization: ApiKey 5a674fe5-ea40-420b-8a95-439602f86b58
    X-Client-Application: 20583ac7-1a1f-442d-9794-b771de53771b
 }

 body:{
    {
        "Inputs":{
            "messageId": "JDE-PROD-2026-05-19-000123",
            "productCode": "E176",
            "itemShort": "702854",	
            "description": "ALGODAO BRUTO",
            "descriptionLong": "MISCELANIA",
            "uom": "KG",
            "uomConversions": 
            [
                {"UOMFrom": "CM", "UOMTo": "CC", "Factor": 1.0 },
                { "UOMFrom": "CM", "UOMTo": "MM", "Factor": 100.0 },
                { "UOMFrom": "CX", "UOMTo": "XC", "Factor": 0.00001 },
                { "UOMFrom": "GR", "UOMTo": "KG", "Factor": 0.001 },
                { "UOMFrom": "GR", "UOMTo": "MG", "Factor": 1000.0 },
                { "UOMFrom": "KG", "UOMTo": "GR", "Factor": 1000.0 },
                { "UOMFrom": "KG", "UOMTo": "MG", "Factor": 1000000.0 },
                { "UOMFrom": "KG", "UOMTo": "XK", "Factor": 0.00001 },
                { "UOMFrom": "L", "UOMTo": "XL", "Factor": 0.00001 },
                { "UOMFrom": "MI", "UOMTo": "UN", "Factor": 1000.0 },
                { "UOMFrom": "MT", "UOMTo": "CC", "Factor": 100.0 },
                { "UOMFrom": "MT", "UOMTo": "CM", "Factor": 100.0 },
                { "UOMFrom": "MT", "UOMTo": "M3", "Factor": 1.0 },
                { "UOMFrom": "MT", "UOMTo": "MM", "Factor": 1000.0 },
                { "UOMFrom": "T", "UOMTo": "GR", "Factor": 1000000.0 },
                { "UOMFrom": "T", "UOMTo": "KG", "Factor": 1000.0 },
                { "UOMFrom": "UN", "UOMTo": "MI", "Factor": 0.001 },
                { "UOMFrom": "UN", "UOMTo": "XU", "Factor": 0.00001 },
                { "UOMFrom": "XC", "UOMTo": "CX", "Factor": 100000.0 },
                { "UOMFrom": "XK", "UOMTo": "KG", "Factor": 100000.0 },
                { "UOMFrom": "XL", "UOMTo": "L", "Factor": 100000.0 },
                { "UOMFrom": "XU", "UOMTo": "UN", "Factor": 100000.0 }
            ]
        }
    }
 }