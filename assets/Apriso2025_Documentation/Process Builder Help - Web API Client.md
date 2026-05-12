# Web API Client

You can call API key-protected and access token-protected REST web services (see Web Services
Manager) from the JavaScript tab or the HTML tab (inside a <script> tag) using the dedicated Web
API Client. For a complete list of available objects and functions, see the API Documentation .

To call an external Web Service using the Web API Client, you must add its provider in
WebServiceProviders.xml. For more information, see the Web APIs Guide (Web API Client section).

When using the Web API Client inside the HTML tab, be careful when using double curly
braces ("{{" and "}}"). The HTML tab treats double curly braces as an escaped single brace.
Therefore, make sure to separate any double curly braces, e.g. in a JSON object or string, with
a space character. Alternatively, you can use a double curly brace ("}}") to represent a single
brace ("}").
Bad: {"Inputs":{"Example":1}}
Good: {"Inputs":{"Example":1} }
Good: {"Inputs":{"Example":1}}}

When calling an external provider, a pop-up window with a log-in form may appear. Therefore,
make sure that pop-up windows in the browser which displays the DFC are enabled.
