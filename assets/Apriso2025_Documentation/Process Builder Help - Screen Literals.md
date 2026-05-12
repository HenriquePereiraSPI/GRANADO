# Screen Literals

Screen Literals                      HTML Layout Editor/HTML        Runtime
                                      Editor
  Literals can be added in HTML tab.

      {@Literal name}

   Screen Literals section

                                      Code

Mobile and Text platforms are no longer supported.

The (remove) button in the Screen Literals section is active only for literals that are not used
in the HTML tab (they were removed form the HTML tab).

Supported Literal Formats

Format      Description

{@literal}  Default format. Literal will be rendered in HTML inside a <span> element.

{@literal:text}

                     Text format. Literal will be rendered in HTML as plain text, without a <span>

                     element.

            This format can be used when inserting literals inside HTML attributes, example:

            <input type="text" placeholder="{@InputSerial:text}" />
