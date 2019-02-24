<style
  type="text/css">
  img[src*="#maxwidth"] {
    max-width: 100%;
  }
  .help {
    width: 100%;
    margin: 2px;
    padding: 5px;
    border-width: 1px;
    border-radius: 5px;
    border-color: black;
    border-style: solid;
    max-width: 600px
  }
  .help hr {
    border-color: black;
    margin-top: 0px;
  }
  .help blockquote {
    border-left: none;
  }
</style>
#### Help and Instructions
___
**Signal K InstrumentPanel** is implemented as a grid with draggable &amp; resizable widgets.  
Widgets are added dynamically:
 when the panel receives data it hasn't seen before a new cell is added to the at the bottom of the column.
For some data, like wind, there is a composite gauge that displays several items at the same time. Most
individual data items are added as separate cells. The cells are grouped into three columns:
- navigation
- environment
- everything else (electrical, propulsion etc)

>
>![demo](./dist/help/main-page.png#maxwidth)  
>
   
**1. Connect to a Signal K Server**  
___
>
>![connect](./dist/help/connect.png#maxwidth)  
>
When you open InstrumentPanel for the first time you need to specify the server
you want to connect to. The default value is the server that you loaded InstrumentPanel
from (1).
Click on the connect button(2) to connect  to the server. The button's text changes to
_Connecting_ indicate the connection status and once connected disappears. In most cases
you won't see the _Connecting_ text at all.
  
**2. Top Bar Buttons**  
___
After connecting an initial first page is auto generated with all paths known in your SignalK Server.
Signal K data items are displayed in different cells with dedicated widgets depending on their types.
Widgets are arranged on a virtual grid with vertical compaction.  
**Units** on widgets are set to default and fetched from the server metadata.
>
>![main-page](./dist/help/main-page-default.png#maxwidth)  
>
  
At the right edge of the top bar is the  ![disconnect](./dist/help/disconnect-icon.png) button
 to disconnect from your Signal K server and to return to the initial state that allows you to specify the server to connect to.  
Beside the disconnect button is the ![heart](./dist/help/heartbeat-icon.png) data indicator icon.
When data is received it blinks every second.
 If the indicator is not blinking, either your connection is broken or the server is not sending any data and values displayed in your widgets may be obsolete.
  
**2.1. Change Page**  
___
>
>![multi-page](./dist/help/multi-page.png#maxwidth)  
>
You can have up to 10 pages, each with a separate selection, configuration and layout of  widgets.  
To switch pages, just click on the page number. To create a new page activate settings and add a new one
with the plus button.

  
**2.2. Modify Layout**  
___
Use the ![lock](./dist/help/button-lock.png) button on the main bar to unlock the layout. 
When the layout is unlocked, widget background changes to yellow and features are hidden.  
>
>![widget-unlock](./dist/help/widget-gold.png#maxwidth)  
>
To return to normal mode and to lock & save the layout, click on the ![unlock](./dist/help/button-unlock.png) button.
  
**2.2.1. Moving and Resizing Widgets**  
___
On an unlocked layout  
**resize** a widget by dragging the anchor located at the bottom right.  
>
>![resize](./dist/help/widget-resize.png#maxwidth)  
>
  
**Move** a widget by dragging.  
>
>![drag](./dist/help/widget-drag.png#maxwidth)  
>

The layout adjusts automatically to changes, compacting the widgets vertically.
  
**2.2.2. Notes for iOS users:**  
___
On an unlocked grid, to drag or to resize a widget,
 first click once or twice in the center of the widget
 to bring focus to it and then you can drag or resize the widget with the screen's scroll locked.
 If you don't click first in the center of the widget,
 the page starts scrolling before you can drag or resize the widget.  
To scroll the grid, it's easiest to do it from the left side even
 if the vertical scroll bar is to the right side.
 Using the vertical scrollbar on the right side,
 you risk resizing a widget instead of scrolling the page.  
  
**2.3 Settings**  
___
Use the ![settings](./dist/help/settings-icon.png) to switch to settings. This will change the display to a grid that shows all widgets, including ones you have previously hidden, with their individual settings.
In setting mode, use the ![view](./dist/help/view-icon.png) to return to the main view.  
  
**2.3.1. Add or Delete Pages**  
___
>
>![multi-page](./dist/help/add-page-before.png#maxwidth)  
>
You can have up to 10 pages with a specific widget organization.  
To add a new page, just click on ![button-plus](./dist/help/button-plus.png) button.
 The new page is automatically selected.  
>
>![add-page-after](./dist/help/add-page-after.png#maxwidth)  
>
To delete a page, activate the page by clicking on the page number and
 then on the ![button-delCurrent](./dist/help/button-delCurrent.png) button  
  
**2.3.2. Hide / Show Widgets**  
___
A common option for all widgets is the **visible** option  
>
>![visible](./dist/help/widget-settings-visible.png#maxwidth)  
>
Unselect/Select checkbox to hide/show the widget on the page.  
By default, all new widgets are visible. 
  
**2.3.3. Unit selection**  
___
Most widgets have a unit selection.  
Select your preferred unit from the listbox.  
>
>![unit](./dist/help/widget-settingUnit.png#maxwidth)  
>
To make the unit change active, please disconnect and reconnect. or reload the page.
  
**2.3.4. Widget Specific Settings:**  
___
Each widget type has specific settings.  
  
**2.3.4.1. Universal Widget**  
___
This widget has 2 display views possible (digital/analog).  
Choose your preferred view by selecting the radio button.  
- **digital view**  
![universal-digital](./dist/help/widget-settings-digital.png#maxwidth)  
- **analog view** has more settings.  
You can set the minimal and maximal values displayed.  
And also set the red line value.  
![universal-analog](./dist/help/widget-settings-analog.png#maxwidth)  
  
**2.3.4.2. Compass Widget**  
___
This widget has 3 displays view possible (rose/reading/digital).  
Choose your preferred view by selecting the radio button.  
- **Rose view**  
![compass-rose](./dist/help/widget-settings-compass-rose.png#maxwidth)  
- **Reading view**  
![compass-reading](./dist/help/widget-settings-compass-reading.png#maxwidth)  
- **Digital view**  
![compass-digital](./dist/help/widget-settings-compass-digital.png#maxwidth)  
  
**2.3.4.3. Windmeter Widget**  
___
This widget has only the unit selection.  
Apparent Wind, True Wind over Ground and True Wind through Water values are automatically bound on widget.  
>
>![settings-windmeter](./dist/help/widget-settings-windmeter.png#maxwidth)  
>
  
**2.3.4.4. Digital DateTime Widget**  
___
This widget has just a timezone option setting.  
In timezone list, **DST** means Daylight Saving Time and displays time automatically in the timezone
 set on the device running your browser.  
>
>![settings-digitaldatetime](./dist/help/widget-settings-digitaldatetime.png#maxwidth)  
>

**3 Options Available on the Widgets**

**3.1 Changing Display Mode**  
___
Some widgets have the ability to change their display mode directly.  
They are identified by a ![clickme-icon](./dist/help/clickme-icon.png) icon in the top left corner.
 Click on this icon to change the display mode.  
New display mode is automatically saved.  

**3.2 Display SourceID**  
___
To display the source Id of a widget's data stream,
 click on to the top right corner of widget.  
>
>![sourceID-hidden](./dist/help/widget-sourceID-hidden.png#maxwidth)  
>
To hide the source Id, just click in the displayed source Id field.  
>
>![sourceID-visible](./dist/help/widget-sourceID-visible.png#maxwidth)  
>
  
**3.3. Wind Widget Modes**  
___
The wind widget displays by default apparent wind.  
>
>![widget-windmeter](./dist/help/widget-windmeter.png#maxwidth)  
>
This widget can also display True Wind over Ground and True Wind through Water,
 if your Signal K server provides them. You can change the mode by clicking on the widget.  
If there is no data, an alert message is raised when you try to display these values.  
>
>![windmeter-alert](./dist/help/widget-windmeter-alert.png#maxwidth)  
>
You can have you server automatically calculate these values with the **Derived Data** plugin available in Signal K server AppStore:  
>
>![DerivedData-appStore](./dist/help/plugin-DerivedData-appStore.png#maxwidth)  
>
Install the plugin and restart your Signal K server.  
Then locate the pluging in the **Server/Plugin Config**:  
>
>![skServer-PluginConfig](./dist/help/skServer-PluginConfig.png#maxwidth)  
>
Activate the plugin:  
>
>![DerivedData-active](./dist/help/plugin-DerivedData-active.png#maxwidth)  
>
Enable the options for True Wind over Ground and True Wind through Water:  
>
>![DerivedData-options](./dist/help/plugin-DerivedData-options.png#maxwidth)  
>
And then click on the ![DerivedData-submit](./dist/help/plugin-DerivedData-submit.png) button to save and activate these options.  

**4. Trouble?**  
___
InstrumentPanel stores some of its settings in the browser's local storage.  
In case you have invalid stuff displayed, you can reset it
 by adding the following query parameter **?reset=true** to the url.  
  
Units and labels are also stored in the browser's local storage and
 are fetched from the Signal K server only during startup.  
If you change a unit or a display label on the server,
 you can clear the cache without destroying your layout
 by modifying the url with the following query parameter  
 **?flushCache=true**.  
