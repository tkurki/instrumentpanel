#### Welcome in SignalK Instrument Panel help page
___
Instrument panel is implemented as a grid with draggable &amp; resizable components.  
Components are added dynamically eg. when the panel receives data it hasn't seen before a new cell is added to the grid by the bottom.  

![demo](./dist/help/main-page.png)

    1. Connect to your SignalK server  
![connect](./dist/help/connect.png)  
When you open the main page of Instrument Panel,  
you have to enter the address of your SignalK server (1).  
In most case, the address is the same as URL of Instrument Panel or auto detected by mdns.  
Then click on the connect button(2) to join your SignalK server.  


    2. Discover your main page  
At the first login, a initial first page is auto generated with all paths know in your SignalK Server.  
SignalK paths are displayed in different cells with dedicated component depending on there type.  
Component are arrange on virtual grid with vertical compaction.  
Units on component are set to default and fetched from your SignalK Server metadata if provided.  
![main-page](./dist/help/main-page-default.png)  

On the right of main bar, ![disconnect](./dist/help/disconnect-icon.png) is button to disconnecting from your SignalK server and return to the connect page.  
On the left of disconnect button, a ![heart](./dist/help/heartbeat-icon.png) blinking every second.  
This indicates that you are connected to your SignalK server.  
If heart not blinking, your connexion is broken and value displayed in your components may be obsolete.  
In furure version a auto-reconnect will be implemented.  

    2.1. Change display page:  
![multi-page](./dist/help/multi-page.png)  
You can have up to 10 pages with a specific component organization.  
To change page, just clic on page number.  

    2.2. Arrange your page design:  
Use the ![lock](./dist/help/button-lock.png) / ![unlock](./dist/help/button-unlock.png) button on the main bar to free your grid,  
and organize your component placement on it.  
When grid is unlocked, component background change to gold color and feature are hidden.  
![widget-unlock](./dist/help/widget-gold.png)  

    2.3. Move and resize your component:  
On a unlocked grid, you can :  
- Resize a component by dragging the anchor to the bottom right of it.  
![resize](./dist/help/widget-resize.png)  

- You can also move a component by draging it on the grid.  
![drag](./dist/help/widget-drag.png)  


    2.3.1. For iOS users:  
On unlocked grid, for draging or resizing a component, in first click one or twice on the center of the component to get focus on it and after you can drag or resize the component with grid's scroll locked.  
If you don't click before on center of the component, the grid scroll before you can drag or resize the component.  
For scrolling the grid, it's better to do by the left side even if vertical scroll bar is on the right side.  
In vertical scrolling by the the right side, you risk resizing a component instead of scrolling the grid.  

    2.4. Change settings of your components:  

    2.4.1. Switching in setting mode:  
Use this button ![settings](./dist/help/settings-icon.png) to switch in setting mode.  
The grid display each component with his setting options.  
In setting mode, use view button ![view](./dist/help/view-icon.png) to return in main view.  

    2.4.2. Hide / Show component:  
A common option for all components is the ```visible``` option  
![visible](./dist/help/widget-settings-visible.png)  
Unselect/Select checkbox to hide/show the component on main page.  
By default, all new component is visible.  

    2.4.3. Set unit setting:  
Most of components have a unit settings.  
Select your prefered unit in listbox.  
![unit](./dist/help/widget-settingUnit.png)  
To make the unit change active, please disconnect and reconnect.  

    2.5. Universal component settings:  
    
This component have 2 displays view possible (digital/analog).  
Chose your prefered view by selecting the radio button.  
- digital view  
![universal-digital](./dist/help/widget-settings-digital.png)  
- analog view have more settings.  
You can set the minimal and maximal values displayed.  
And also set the red line value.  
![universal-analog](./dist/help/widget-settings-analog.png)  


    2.6. Compass component settings:  
This component have 3 displays view possible (rose/reading/digital).  
Chose your prefered view by selecting the radio button.  
- Rose view:  
![compass-rose](./dist/help/widget-settings-compass-rose.png)  
- Reading view  
![compass-reading](./dist/help/widget-settings-compass-reading.png)  
- Digital view  
![compass-digital](./dist/help/widget-settings-compass-digital.png)  


    2.7. Windmeter component settings:  
This component have just unit option settings.  
Apparent Wind, True Wind over Ground and True Wind through Water values are automaticaly bind on component.  
![settings-windmeter](./dist/help/widget-settings-windmeter.png)  

    2.8. Windmeter component settings:  
This component have just timezone option settings.  
In timezone list, DST mean Daylight Saving Time and dispay time automaticaly in timezone set on your device running the browser.  
![settings-digitaldatetime](./dist/help/widget-settings-digitaldatetime.png)  

    3. Trouble?  

InstrumentPanel stores some of the settings in the browser's localstorage.  
In case there is some garbage there you can get it cleared  
by using a url with query parameter `?reset=true`.  
The units and labels are also stored in the browser's localstorage  
and fetched from the signalK's server only the first time.  
If you change a unit or a display label on the server,  
you can clear the cache without destroying your layout  
by using a url with query parameter  `?flushCache=true`.  


![](./dist/help/)  
[(React-Grid-Layout)](https://github.com/STRML/react-grid-layout)