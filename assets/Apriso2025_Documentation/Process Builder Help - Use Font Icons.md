# Use Font Icons

When creating user interface elements in e.g., HTML Layout Editor and HTML Editor, you can add
icons which are defined in the default styles. For details, see the CSS Framework
Documentation .

3DS Icons

The CSS file containing the available styles is located in:

<drive>\Program Files\Dassault Systemes\DELMIA Apriso 2025\WebSite\Portal\Styles\Default\wux-
3ds-fonticons.css

Below is a simple example that uses the "check" icon, note that wux-ui-3ds must be included in the
class declaration:

   <i class="wux-ui-3ds wux-ui-3ds-check" ></i> confirm

You can set the size of the font using wux-ui-3ds-1x, wux-ui-3ds-2x etc.

   <div class="wux-ui-3ds-2x">
   <i class="wux-ui-3ds wux-ui-3ds-copy" ></i> copy
   <i class="wux-ui-3ds wux-ui-3ds-cut" ></i> cut
   <i class="wux-ui-3ds wux-ui-3ds-paste" ></i> paste
   </div>

  Note that you can set wux-ui-3ds as the class of the parent element to avoid redundancy:

      <div class="wux-ui-3ds">
      <i class="wux-ui-3ds-copy" ></i> copy
      <i class="wux-ui-3ds-cut" ></i> cut
      <i class="wux-ui-3ds-paste" ></i> paste
      </div>

  You can also use values of Inputs (either Screen Interface Inputs or HTML View Inputs) inside the
  class:

      <i class="wux-ui-3ds wux-ui-3ds-{icon}"></i>

 Font Awesome Icons

The CSS file containing the available styles is located in:

<drive>\Program Files\Dassault Systemes\DELMIA Apriso 2025\WebSite\Default\Apr\apr.css

Examples:

   <i class="fa fa-check"></i>
   <i class="fa fa-check fa-2x"></i>

For more information, refer to the Font Awesome website.

  Note that using the latest font awesome icons requires updating the icons on the DELMIA
  Apriso server.
