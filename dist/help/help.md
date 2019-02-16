<style
  type="text/css">
  img[src*="#minimize"] {
    max-width: 100%;
  }
</style>
#### Welcome in SignalK Instrument Panel help page
___
**Instrument panel** is implemented as a grid with draggable &amp; resizable components.  
Components are added dynamically eg.
 when the panel receives data it hasn't seen before a new cell is added to the grid by the bottom.  

![demo](./dist/help/main-page.png#minimize)
___
**1. Connect to your SignalK server:**  
___
![connect](./dist/help/connect.png#minimize)  
When you open the main page of Instrument Panel,
 you have to enter the address of your SignalK server (1).
 In most case, the address is the same as URL of Instrument Panel or automatically filled in by mdns.  
Then click on the connect button(2) to join your SignalK server.  
___
**2. Discover your main page:**  
___
At the first login, a initial first page is auto generated with all paths know in your SignalK Server.
SignalK paths are displayed in different cells with dedicated component depending on there type.
Component are arrange on virtual grid with vertical compaction.  
**Units** on component are set to default and fetched from your SignalK Server metadata if provided.  
![main-page](./dist/help/main-page-default.png#minimize)  
  
On the right of main bar, ![disconnect](./dist/help/disconnect-icon.png) is button
 to disconnecting from your SignalK server and return to the connect page.  
On the left of disconnect button, a ![heart](./dist/help/heartbeat-icon.png) blinking every second.
 This indicates that you are connected to your SignalK server and that data is being received.
 If heart not blinking, your connexion is broken and value displayed in your components may be obsolete.  
In furure version a auto-reconnect will be implemented.  
___
**2.1. Change display page:**  
___
![multi-page](./dist/help/multi-page.png#minimize)  
You can have up to 10 pages with a specific component organization.  
To change page, just click on page number.  
___
**2.2. Change display options on components:**  
___
Some components have the possibility to change their display mode directly.  
They are identify by ![clickme-icon](./dist/help/clickme-icon.png) icon on top left.
 Click on this icon to change display mode.  
New display mode is automatically save in your personal settings.  
___
**2.3. Arrange your page design:**  
___
Use the ![lock](./dist/help/button-lock.png) button on the main bar to free your grid,  
After, organize your component placement as you want.  
When grid is unlocked, component background change to gold color and feature are hidden.  
![widget-unlock](./dist/help/widget-gold.png#minimize)  
To return in normal mode and lock your grid, click on ![unlock](./dist/help/button-unlock.png) button  
___
**2.3.1. Move and resize your component:**  
___
On a unlocked grid:  
**Resize** a component by dragging the anchor located on the bottom right of it.  
![resize](./dist/help/widget-resize.png#minimize)  
  
**Move** a component by draging it on the grid.  
![drag](./dist/help/widget-drag.png#minimize)  
___
**2.3.2. For iOS users:**  
___
On unlocked grid, for draging or resizing a component,
 in first click one or twice on the center of the component
 to get focus on it and after you can drag or resize the component with grid's scroll locked.
 If you don't click before on center of the component,
 the grid scroll before you can drag or resize the component.  
For scrolling the grid, it's better to do by the left side even
 if vertical scroll bar is on the right side.
 In vertical scrolling by the the right side,
 you risk resizing a component instead of scrolling the grid.  
___
**2.4. Display sourceID of component's stream:**  
___
To display source Id of one component's data stream,
 click on to top right of component.  
![sourceID-hidden](./dist/help/widget-sourceID-hidden.png#minimize)  
To hide sourceId, just click in zone of sourceId displayed.  
![sourceID-visible](./dist/help/widget-sourceID-visible.png#minimize)  
___
**3. Switch in setting mode:**  
___
Use this button ![settings](./dist/help/settings-icon.png) to switch in setting mode.
 The grid display each component with his setting options.  
In setting mode, use view button ![view](./dist/help/view-icon.png) to return in main view.  
___
**3.1. Add /delete page:**  
___
![multi-page](./dist/help/add-page-before.png#minimize)  
You can have up to 10 pages with a specific component organization.  
To add a new page, just click on ![button-plus](./dist/help/button-plus.png) button.
 The new page is automatically selected ![add-page-after](./dist/help/add-page-after.png#minimize)  
To delete an unnecessary page, click on the page number and
 then on ![button-delCurrent](./dist/help/button-delCurrent.png) button  
___
**3.2. Hide / Show component:**  
___
A common option for all components is the **visible** option  
![visible](./dist/help/widget-settings-visible.png#minimize)  
Unselect/Select checkbox to hide/show the component on main page.  
By default, all new components are visible.  
___
**3.3. Set unit setting:**  
___
Most of components have a unit settings.  
Select your prefered unit in listbox.  
![unit](./dist/help/widget-settingUnit.png#minimize)  
To make the unit change active, please disconnect and reconnect.  
___
**3.4. Components settings:**  
___
Each component type have specifics settings (details below)  
___
**3.4.1. Universal component settings:**  
___
This component have 2 displays view possible (digital/analog).  
Chose your prefered view by selecting the radio button.  
- **digital view**  
![universal-digital](./dist/help/widget-settings-digital.png#minimize)  
- **analog view** have more settings.  
You can set the minimal and maximal values displayed.  
And also set the red line value.  
![universal-analog](./dist/help/widget-settings-analog.png#minimize)  
___
**3.4.2. Compass component settings:**  
___
This component have 3 displays view possible (rose/reading/digital).  
Chose your prefered view by selecting the radio button.  
- **Rose view**  
![compass-rose](./dist/help/widget-settings-compass-rose.png#minimize)  
- **Reading view**  
![compass-reading](./dist/help/widget-settings-compass-reading.png#minimize)  
- **Digital view**  
![compass-digital](./dist/help/widget-settings-compass-digital.png#minimize)  
___
**3.4.3. Windmeter component settings:**  
___
This component have just unit option settings.  
Apparent Wind, True Wind over Ground and True Wind through Water values are automatically bind on component.  
![settings-windmeter](./dist/help/widget-settings-windmeter.png#minimize)  
___
**3.4.4. Windmeter component settings:**  
___
This component have just timezone option settings.  
In timezone list, **DST** mean Daylight Saving Time and dispay time automatically in timezone
 set on your device running the browser.  
![settings-digitaldatetime](./dist/help/widget-settings-digitaldatetime.png#minimize)  
___
**4. Trouble?**  
___
InstrumentPanel stores some of the settings in the browser's localstorage.  
In case there is some garbage there you can get it cleared
 by using a url with query parameter `?reset=true`.  
  
The units and labels are also stored in the browser's localstorage and
 fetched from the signalK's server only the first time.  
If you change a unit or a display label on the server,
 you can clear the cache without destroying your layout
 by using a url with query parameter  `?flushCache=true`.  
