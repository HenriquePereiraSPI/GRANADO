# CSS Style Maintenance

It is recommended to use the already defined CSS classes. The CSS Framework is supported
  in the client mode. For details, see the CSS Framework Documentation .

If it is necessary to define a new CSS class in order to add some visual attributes to some parts of
a designed Screen, there are the following options available.

These are the recommended options:

           Use the configuration (recommended option)
                      New CSS classes and properties can be added via the CSS Classes and Inline
                      Styles properties available on the Layout: General Tab and View: Advanced Tab
                      As an example, some CSS properties can be defined at the Panel definition level
                      to position the Panel correctly on the Screen
                      The Layout will only affect the way each Panel is rendered, not its content

           Using an external CSS file
                      For example, a new class in the interpreter CSS that will affect all the specified
                      elements
                                  Such a change should always be validated, as changes done in such a
                                  file will globally affect all the elements to which the file is applied
                                  This is especially critical when adding or modifying the properties of an
                                  existing CSS class (as this kind of change will have global impact)

There are other possible options, but they are not recommended practices:

           Using the CSS Tab in the HTML Layout Editor
                      CSS properties can be defined that will affect all the elements of a specific Screen
                      but which are not proper for global application
                      An example of such usage would be the need to apply some additional CSS
                      properties to the standard Buttons or to overwrite some existing properties, in
                      which case it is possible to define a new CSS class in the CSS tab and apply it to
                      a Button directly in the HTML Layout Editor
                                  Such configuration will not affect the standard behavior of the Buttons and
                                  adds the possibility to customize if necessary
                      For more information, see Styling

                         This is not a recommended option.

           Using the CSS properties added directly in the HTML Layout Editor
                      If some CSS property needs to be applied to a specific part of the Screen (with a
                      specific HTML tag) to affect this single entity, it can be done directly in the HTML
                      Layout Editor

                      For more information, see Styling

                         This is not a recommended option.

Limitations

Using inline styles with Views comes with the following limitations:
           Width and height cannot be applied.
           Vertical margins cannot be applied.
           Vertical paddings can overlap with the padding of the parent element.
           Transform cannot be applied.
