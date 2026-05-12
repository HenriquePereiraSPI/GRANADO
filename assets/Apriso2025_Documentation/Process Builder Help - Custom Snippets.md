# Custom Snippets

It is possible to use Snippets in the HTML Layout Editor and HTML Editor. The content and the
location of the Snippets is fully customizable.

To Add a Custom Snippet

       1. Create an XML file (below is a file structure description). Configure the custom Snippet
           content. To see an example, click here

       2. Place the newly created XML file into location that is defined by
           "ScreenEditorCodeSnippetsLocation" key located in the "ProcessBuilder" section of the
           Central Configuration file (for details, see Central Configuration Documentation ). By
           default it is set to <drive>\Program Files\Dassault Systemes\DELMIA Apriso

             2025\WebSite\Resources\Templates\CodeSnippets\.

XML File Structure

The file should contain three sections:

           Header
           Snippet
           Snippet Options

Header Section

This section consists of two subsections: Title and Shortcut.

           Title – the section that enables the changing of the Snippet title

                 <Header>
                      <Title>Operator Cockpit Layout</Title>

                    ...
                  </Header>

           Shortcut – if defined, the Snippet can be added using Keyboard Shortcuts (Snippet
           Header | + Tab).

Snippet Section

The section consists of two subsections: Declarations and Code.

           Declarations – the list of literals that will be available for use (highlighted text). Every
           literal has its ID number, default text and a tooltip
           Code – consists of the Snippet code, and inside this section you may define:

                      The location of the Declarations. Use a Declaration ID between $ symbols (e.g.,
                      $Production$).
                      The language screen on which the snippet will be available. Use a Language
                      attribute (if you want to specify more than one language, HTML language is
                      required) (e.g., <Code Language="CSS">).

The Code section may appear more than once in the XML file. Each section has to have the other
language attribute defined.

 SnippetOptions Section

The section may consist of seven subsections: Placeholders, Usages, EditorSnippetSubfolder,
ContextMenuIndex, Icon, IntelliPromptContext, and ScreenElements.

1. Placeholders – specifies a placeholder in HTML that should contain custom controls

(Sub-DFC, Business Control, etc.). After dragging-and-dropping, the text will be
automatically replaced with the dropped HTML

Code                                     User Interface

<SnippetOptions>
    <Placeholders>
        <Placeholder><![CDATA[<!-- DROP

(Header) HERE --> Header]]>
</Placeholder>

        <Placeholder><![CDATA[<!-- DROP
(Production Panel) HERE --> Production
Panel]]></Placeholder>

        <Placeholder><![CDATA[<!-- DROP
(OEE Panel) HERE --> OEE Panel]]>
</Placeholder>

        <Placeholder><![CDATA[<!-- DROP
(Alert List) HERE --> Alert List]]>
</Placeholder>

        <Placeholder><![CDATA[<!-- DROP
(Task List) HERE --> Task List]]>
</Placeholder>

        <Placeholder><![CDATA[<!-- DROP
(Footer) HERE --> Footer]]>
</Placeholder>

    </Placeholders>
...
</SnippetOptions>

2. Usages – defines the location of the Snippet. The Snippet may appear in four places:
   Toolbox, HTML Layout Editor Right-Click Menu, and two different HTML Layout Editor
   keyboard shortcuts (see Keyboard Shortcuts on HTML Layout Editor)

       <SnippetOptions>
       ...
       <Usages>None | ContextMenu | EditorIntelliPrompt | EditorCodeSnippets | ToolBox |
       All</Usages>
       ...
       </SnippetOptions>

3. EditorSnippetSubfolder – defines the Snippet's subfolder name in:

Code  The toolbox where the Snippet will appear
      The editor Snippets under the Ctrl+Shift+Space Keyboard Shortcut. You may
      also define more than one subfolder using ">" (e.g.,
      <EditorSnippetsSubfolder>Parent_folder >
      Child_folder</EditorSnippetsSubfolder>)

                                                                          User Interface

<SnippetOptions>
...
<EditorSnippetsSubfolder>UI
controls</EditorSnippetsSubfolder
...
</SnippetOptions>

4. ContextMenuIndex – defines the Snippet's location in the HTML Layout Editor right-click
   menu. The index value indicates the exact place of its appearance in the right-click menu.
   You cannot use the following values (see HTML Layout Editor Right-Click Menu)

Value              Right-Click Menu Commands

10                 Insert Input

20                 Insert Literal

30                 Link to Output

40                 Iterate

50                 Iterate Children

60                 Filter

70                 Set Boolean Attribute

80                 Assign Key

90                 Autoadvance

100                Autofocus

5. Icon – the file path to an image which will be displayed next to the Snippet title (appears in
   the Toolbox or in HTML Layout Editor right-click menu).
   The icon must be placed in the location that is defined by the "ImageRepositoryUrl" key
   located in the "Media" section of the Central Configuration file (for details, see Central
   Configuration Documentation ). Recommended icon size is 16x16 pixels and
   recommended icon format is PNG.
   For example:

6. IntelliPromptContext – the Snippet location in the pop-up window that is displayed after
   using the Cntrl + Space keyboard shortcut (it has to be EditorIntelliPrompt usage defined)

              There are six different contexts which may be set in the IntelliPromptContext section:

                         None
                         Default
                         AttributeName
                         AttributeValue
                         ElementName
                         All (contains Default, AttributeName, AttributeValue, and ElementName)

              You may define more than one Context for one Snippet

Depending on the place of the cursor, the proper context menu will appear, for example:

       A<Binput Ctype="Dtext"/>

              A – Default
              B – Element Name
              C – Attribute name
              D – Attribute value
7. ScreenElements – in this section the user is able to specify Screen Inputs/Outputs that
   will be added when the snippet is activated

              The <ScreenElements> section can contain any number of <ScreenInput> and
              <ScreenOutput> sections
              Each of those sections must contain:

                          <Name> section (the name of an Input/Output)
                          <PortType> section (the type of Input/Output; possible values: Char,
                          Decimal, Boolean, Integer, DateTime)
                          <PortPlurality> section (possible values: Scalar, List)
              Moreover, each ScreenInput section can contain a <DefaultValue> section (which
              is the test value of an Input), and each ScreenOutput section can contain an
              <AutoSubmit> section (which specifies if the Output is auto submit)
              If a Screen Input/Output with the same name already exists, it will not be added
