# Linking Custom Documentation Content to a Screen

After enabling the Help button when configuring the Header, custom documentation for the new
Screens can be created and invoked when the Help button is pressed:

The Apriso Help Service uses the unique namespace of each Screen to find the relevant
documentation topics that have been mapped to the Screens.

Documentation content can be mapped to the Help button by:

           Using a relative path
           Using a URL link

Mapping the Documentation Content to the Help Button

If a relative path is used, the documentation content is located in the following directory on the
DELMIA Apriso server: <drive>\Program Files\Dassault Systemes\DELMIA Apriso 2025\WebSite\Help\

In a default installation, all the documentation content is provided in the English language and is
placed in the en-us folder. Any new content can be placed in this folder (the help mechanism will
always fall back on the en-us folder) or a new folder (e.g., en-gb).

Once the documentation content is present on the server, perform the following actions:

1. Add an entry in the maps.xml file (this file should already exist in the directory specified
   above along with all of the Help content):

                   The maps.xml file contains information used by the DELMIA Apriso Help Service
                   about the location of the map.xml for each Help
                   Each entry has the following structure:

                   Key     Value

                   <lang>  The language code identifier of the documentation content. It is a
                           combination of the language code and locale code. Go to
                           Languages M&M Screen to see the list of available language and
                           locale codes.

                   <mapfile> The path to the map.xml file, relative to the language folder, which maps
                                the unique namespaces to the relevant documentation content.

                   <content> The directory – relative to the language folder – where the
                                documentation content referenced in the map.xml file is located.

                   This is an example configuration:

                   <map>
                       <entry>
                              <lang>en-us</lang>
                              <mapfile>Example_Help_Project/map.xml</mapfile>
                              <content>Example_Help_Project/</content>
                       </entry>

                   </map>

2. Create or edit an existing map.xml file (this file should be in the folder with your custom Help
   project files):

                   The map.xml file contains information about which documentation content is
                   relevant for the display in the context of a given namespace
                   Each entry has the following structure:

                   Key Value

                   <alias>

                             The namespace of the Screen for which the documentation content is to
                             be displayed. The namespace for a Screen can be found by clicking the
                             Help button (that is, clicking the Help button before any documentation
                             file is linked).

                   The namespace for a Screen is created in the following way:

                   Apriso.<second part of revision name>.<Screen name>

                   E.g., if a Screen is called MTC and has revision APR.MNC.000.001, the
                   following namespace will be generated:

                   Apriso.MNC.MTC

                   If revision name has no "." character in it, the following namespace will be
                   generated:

                   Apriso.MTC

                                 It is recommended to use a consistent revision naming convention.
                                 Revision naming convention can be configured with use of the
                                 "RevisionNamingConventionMask" key located in the
                                 "ProcessBuilder" section of the Central Configuration file (for details,
                                 see Central Configuration Documentation ).

                   <link> The name of the documentation file to be displayed. It is assumed that
                              the file is located in the same directory as the map.xml file.

                                 Any file type that can be displayed in the browser (e.g., HTML, PDF)
                                 can be used.

                   This is an example configuration:

                      <map>
                             <entry>
                                  <alias>Apriso.MNC</alias>
                                  <link>Main_Topic.htm</link>
                             </entry>

                      </map>
                      <map>

                             <entry>
                                  <alias>Apriso.MNC.MTC</alias>
                                  <link>Linking_Screens_to_Custom_to_Online_Help.htm</link>

                             </entry>
                      </map>

                         The help mechanism has a fallback functionality which uses the namespace's
                         structure. When a target namespace is not found in any of the map.xml files,
                         the namespace is trimmed starting with the last "." character and the search is
                         performed again. E.g., if the Apriso.MNC.QLT namespace is not found, the
                         search mechanism looks for Apriso.MNC and then for Apriso.

       3. Restart the DELMIA Apriso Help Service.

Using a URL Link to Map the Documentation Content to the Help
Button

Documentation content can also be located on a different server. In such a case instead of setting
a relative path, a URL link is used. The alias is obtained in the same way (that is, based on the
Screen name and revision).

To create this type of mapping, go to the map.xml file and add an entry with the link to the
documentation content. The link must begin with "http", for example:

   <entry>
               <alias>Apriso</alias>
               <link>http://exampleaddress.com/documentation</link>

   </entry>
