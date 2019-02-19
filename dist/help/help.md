<style
  type="text/css">
  img[src*="#maxwidth"] {
    max-width: 100%;
  }
</style>
#### Welcome in SignalK Instrument Panel help page
___
**Instrument panel** is implemented as a grid with draggable &amp; resizable components.  
Components are added dynamically eg.
 when the panel receives data it hasn't seen before a new cell is added to the grid from the bottom.  

![demo](./dist/help/main-page.png#maxwidth)
___
**1. Connect to your SignalK server:**  
___
![connect](./dist/help/connect.png#maxwidth)  
When you open the main page of Instrument Panel,
 you have to enter the address of your SignalK server (1).
 In most cases, the address is the same as URL of Instrument Panel or automatically filled in by mdns.  
Then click on the connect button(2) to join your SignalK server.  
___
**2. Discover your main page:**  
___
During the first login, an initial first page is auto generated with all paths known in your SignalK Server.
SignalK paths are displayed in different cells with dedicated components depending on their types.
Component are arranged on a virtual grid with vertical compaction.  
**Units** on component are set to default and fetched from your SignalK Server metadata if provided.  
![main-page](./dist/help/main-page-default.png#maxwidth)  
  
To the right of the main bar, ![disconnect](./dist/help/disconnect-icon.png) is the button
 to disconnect from your SignalK server and to return to the connect page.  
To the left of the disconnect button, a ![heart](./dist/help/heartbeat-icon.png) icon blinking every second.
 This indicates that you are connected to your SignalK server and that data is being received.
 If the heart is not blinking, your connexion is broken and values displayed in your components may be obsolete.  
In future version an auto-reconnect feature will be implemented.  
___
**2.1. Change display page:**  
___
![multi-page](./dist/help/multi-page.png#maxwidth)  
You can have up to 10 pages with specific component organizations.  
To switch pages, just click on the page number.  
___
**2.2. Change display options of components:**  
___
Some components have the ability to change their display modes directly.  
They are identified by a ![clickme-icon](./dist/help/clickme-icon.png) icon in the top left corner.
 Click on this icon to change display mode.  
New display mode is automatically saved in your personal settings.  
___
**2.3. Arrange your page design:**  
___
Use the ![lock](./dist/help/button-lock.png) button on the main bar to unlock your grid,  
then you can organize your component placement as you want.  
When the grid is unlocked, component background changes to gold color and features are hidden.  
![widget-unlock](./dist/help/widget-gold.png#maxwidth)  
To return to normal mode and to lock your grid, click on ![unlock](./dist/help/button-unlock.png) button  
___
**2.3.1. Move and resize your component:**  
___
On a unlocked grid:  
**Resize** a component by dragging the anchor located on the bottom right of it.  
![resize](./dist/help/widget-resize.png#maxwidth)  
  
**Move** a component by draging it on the grid.  
![drag](./dist/help/widget-drag.png#maxwidth)  
___
**2.3.2. For iOS users:**  
___
On an unlocked grid, to drag or to resize a component,
 first click once or twice in the center of the component
 to bring focus to it and then you can drag or resize the component with grid's scroll locked.
 If you don't click first in the center of the component,
 the grid starts scrolling before you can drag or resize the component.  
To scroll the grid, it's easierth to do it from the left side even
 if the vertical scroll bar is to the right side.
 Using the vertical scrollbar to the the right side,
 you risk resizing a component instead of scrolling the grid.  
___
**2.4. Display sourceID of component's stream:**  
___
To display source Id of one component's data stream,
 click on to top right corner of component.  
![sourceID-hidden](./dist/help/widget-sourceID-hidden.png#maxwidth)  
To hide sourceId, just click in the displayed sourceId field.  
![sourceID-visible](./dist/help/widget-sourceID-visible.png#maxwidth)  
___
**3. Switch to settings:**  
___
Use this button ![settings](./dist/help/settings-icon.png) to switch to settings.
 The grid displays each component with its setting options.  
In setting mode, use view button ![view](./dist/help/view-icon.png) to return to the main view.  
___
**3.1. Add /delete page:**  
___
![multi-page](./dist/help/add-page-before.png#maxwidth)  
You can have up to 10 pages with a specific component organization.  
To add a new page, just click on ![button-plus](./dist/help/button-plus.png) button.
 The new page is automatically selected ![add-page-after](./dist/help/add-page-after.png#maxwidth)  
To delete an unnecessary page, click on the page number and
 then on ![button-delCurrent](./dist/help/button-delCurrent.png) button  
___
**3.2. Hide / Show component:**  
___
A common option for all components is the **visible** option  
![visible](./dist/help/widget-settings-visible.png#maxwidth)  
Unselect/Select checkbox to hide/show the component on the main page.  
By default, all new components are visible.  
___
**3.3. Set unit setting:**  
___
Most components have an unit setting.  
Select your preferred unit in listbox.  
![unit](./dist/help/widget-settingUnit.png#maxwidth)  
To make the unit change active, please disconnect and reconnect.  
___
**3.4. Components settings:**  
___
Each component type has specific settings (details below)  
___
**3.4.1. Universal component settings:**  
___
This component has 2 display views possible (digital/analog).  
Choose your prefered view by selecting the radio button.  
- **digital view**  
![universal-digital](./dist/help/widget-settings-digital.png#maxwidth)  
- **analog view** has more settings.  
You can set the minimal and maximal values displayed.  
And also set the red line value.  
![universal-analog](./dist/help/widget-settings-analog.png#maxwidth)  
___
**3.4.2. Compass component settings:**  
___
This component has 3 displays view possible (rose/reading/digital).  
Choose your preferred view by selecting the radio button.  
- **Rose view**  
![compass-rose](./dist/help/widget-settings-compass-rose.png#maxwidth)  
- **Reading view**  
![compass-reading](./dist/help/widget-settings-compass-reading.png#maxwidth)  
- **Digital view**  
![compass-digital](./dist/help/widget-settings-compass-digital.png#maxwidth)  
___
**3.4.3. Windmeter component settings:**  
___
This component has only an unit option setting.  
Apparent Wind, True Wind over Ground and True Wind through Water values are automatically bound on component.  
![settings-windmeter](./dist/help/widget-settings-windmeter.png#maxwidth)  
___
**3.4.4. Digitaldatetime component settings:**  
___
This component has just a timezone option setting.  
In timezone list, **DST** means Daylight Saving Time and displays time automatically in the same timezone
 set on the device running your browser.  
![settings-digitaldatetime](./dist/help/widget-settings-digitaldatetime.png#maxwidth)  
___
**4. Trouble?**  
___
InstrumentPanel stores some of its settings in the browser's local storage.  
In case you have invalid stuff displayed, you can reset it
 by adding the following query parameter `?reset=true` to the url.  
  
Units and labels are also stored in the browser's local storage and
 are fetched from the signalK's server only during startup.  
If you change an unit or a display label on the server,
 you can clear the cache without destroying your layout
 by modifying the url with the following query parameter  
 `?flushCache=true`.  
