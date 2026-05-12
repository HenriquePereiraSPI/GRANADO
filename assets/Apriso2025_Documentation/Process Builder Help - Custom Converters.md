# Custom Converters

These are special type of Functions that convert HTML tags into the appropriate HTML.
There are standard converters (called Node Converters) defined in the system.

Node Converter       ExecutionOrderIndex Description       HTML                        HTML
                                                           Layout                      Editor
Dom-bind Converter                                         Editor                      (HTML
Preview Converter                                                                      View)

Remover Script       5    Adds data binding support.
Converter
                     10   Generates "preview"
Iterate Converter
                          attributes (only for preview).
Boolean Attributes
Converter            20   Removes scripts if the
Literal Converter
If Converter              "Include JavaScript" option is
Screen Interface
Inputs Converter          disabled (only for preview).
Filters Converter
                     30   Adds data-flx-iterate (data-
Step Grid Converter
                          flx-iterate-children) attribute
Standard Inputs
Converter                 support.
Standard Outputs
Converter            40   Adds data-flx-attr attribute
Sub-DFC Converter
                          support.
Business Controls
Converter            50   Adds literals support.
Buttons Tabs
Converter            55   Adds conditionals support.

Action Converter     60   Allows for parsing Screen

Dynamic Bindings          Interface Input values.
Converter
Output Bindings      70   Adds data-flx-filter attribute
Converter
Screen Context            support.
Converter
                     80   Adds Step Grid, data-flx-

                          stepgrid attribute support.

                     90   Adds standard Inputs, data-

                          flx-input attribute support.

                     100  Adds standard Outputs, data-

                          flx-output attribute support.

                     110  Adds Sub-DFC, data-flx-

                          subdfc (previously data-flx-

                          subop) attribute support.

                     120  Adds Business Control, data-

                          flx-bc attribute support.

                     127  Adds Actions, data-flx-button,

                          data-flx-button-disabled,

                          datal-flx-taband data-flx-tab-

                          text attribute support.

                     128  Adds data-flx-action attribute

                          support.

                     129  Adds data-flx-dynamic-bind

                          attribute support.

                     130  Adds data-flx-bind attribute

                          support.

                     140  Adds $Context and $View

                          variables script support

ScreenInitConverter 160    (JavaScript).

HTML Controls         170  Is responsible for initializing
                           $Context JS variable.
Preserving Converter
                           Adds support for preserving
Key Tag Converter 180      HTML control values in case
                           of server error.

                           Adds data-flx-key attribute
                           support

To Add a Custom Converter

       1. Create an assembly (that needs to be signed) containing classes implementing the
           FlexNetProcess Builder2.BusinessRules.ScreenModel.Converters.INodeConverter
           interface (FlexNet.ProcessBuilder2.BusinessRules.ScreenModel.dll).

       2. Copy a DLL file to GAC and Program Files\Dassault Systemes\DELMIA Apriso
           2025\WebSite\Downloads\PB2 (on the server).

       3. Add the converter assembly name to the "ExtensionAssemblies" key located in the
           "ProcessBuilder" section of the Central Configuration file (for details, see Central
           Configuration Documentation ). Its value is a list of assemblies (separated by '|')
           containing converter definitions (classes that derive from the INodeConverter). See the
           example below:

                 <add key="ExtensionAssemblies" value="MyCompany.CustomNodeConverter, Version=1.0,
                 Culture=neutral, PublicKeyToken=xxxxxxxxxxxx | MyCompany.CustomNodeConverter2,
                 Version=1.5, Culture=neutral, PublicKeyToken=xxxxxxxxxxxx" />

4. Rebuild ClickOnce and restart DELMIA Apriso Services/IIS.

  Node Converters will be automatically loaded based on the implemented interface. Additionally,
  each Converter contains an index of execution, which sets all of the converters in a specified
  order and allows the custom converters to be executed in a specified moment (before, after, or
  between the DELMIA Apriso converters).

To Add a JavaScript Custom Converter

     A JavaScript converter can be used in HTML View.

          1. Create a project containing classes that implement FlexNetProcess
              Builder2.BusinessRules.ScreenModel.Converters.INodeConverter interface
              (FlexNet.ProcessBuilder2.BusinessRules.ScreenModel.dll). Example:

                    public class CustomConverter : INodeConverter
                    {

                          public ConverterScope Scope { get { return ConverterScope.ClientRuntime; } }
                          public string Filter { get { return "data-flx-custom" } }
                          public string JsConverterPath { get { return @"converters/CustomConverter.js"; }
                    }

                          //rest of the interface

          2. Generate a signed assembly.
          3. Create a converter in JavaScript. Example:

                   var Converters;
                      (function(Converters) {
                       var CustomConverter = (function() {
                       function CustomConverter() {

                   }
                   CustomConverter.prototype.parse = function (html, params) {
                   return new Promise(function (res, reject) {

                       try {
                              var found = html.querySelectorAll("[data-flx-custom]");
                              if (found.length === 0){
                                   return res(html);
                                   }else{
                                   //
                                   // your code here
                                   //
                                   return res(html);
                                   }
                              }
                              catch (err) {

                            reject(err);
                            }
                         });
                   };
                   return CustomConverter;
                   }());
                   Converters.CustomConverter = CustomConverter;
                   //200 - Execution Order Index
                   Converters.ConverterManager.addConverter(200, new CustomConverter());
                   })(Converters || (Converters = {}));

      Make sure that JS file is valid and does not cause any errors.

4. Copy the DLL file to the Global Assembly Cache using gacutil.exe located in

    <drive>\Program Files\Dassault Systemes\DELMIA Apriso 2025\Setup\Tools

   In command line type: gacutil -i "<path to the assembly file>".
5. Copy the DLL file to <drive>\Program Files\Dassault Systemes\DELMIA Apriso

    2025\WebSite\Downloads\PB2

6. Copy the JS file to <drive>\Program Files\Dassault Systemes\DELMIA Apriso

    2025\WebSite\Portal\Scripts\converters

7. Add the converter assembly name to the "ExtensionAssemblies" key located in the
   "ProcessBuilder" section of the Central Configuration file (for details, see Central
   Configuration Documentation ). Example:

       <add key="ExtensionAssemblies" value="CustomConverter, Version=1.0.0.0,
       Culture=neutral, PublicKeyToken=xxxxxxxxxxxx" />

8. Rebuild ClickOnce (run the Publish Apriso Process Builder via ClickOnce batch file
   located in <drive>\Program Files\Dassault Systemes\DELMIA Apriso
   2025\WebSite\Downloads\ClickOnce Tools) and restart DELMIA Apriso Services/IIS.
