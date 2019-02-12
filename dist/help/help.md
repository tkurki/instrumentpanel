Signal K Instrument Panel
=========================
Instrument panel implemented as a grid with draggable &amp; resizable components. Components are added dynamically eg.  
when the panel receives data it hasn't seen before a new cell is added to the grid.  

![demo](./dist/help/main-page.png)

Step 1 (connect):
---
When you open main page of Instrument Panel (IP), you have to enter the address of your SignalK server (1).  
In most case, the address is the same as URL of Instrument Panel and box is auto filled.  
Then click on the connect button(2).  
![connect](./dist/help/connect.png)

Step 2 (discover your main page):
---
At the first login, a initial first page is auto generated with all paths know in your SignalK Server.  
SignalK paths are displayed with different dedicated widgets depending on their type.  
Widgets are arrange on virtual grid [(React-Grid-Layout)](https://github.com/STRML/react-grid-layout) with compaction vertical.  
Units are set to default and feched from your SignalK Server metadata if provided.  
![main-page](./dist/help/main-page-default.png)  

- lock ![lock](./dist/help/button-lock.png) and unlock ![unlock](./dist/help/button-unlock.png) the widget position:  
Use this button to unlock your grid to move and resize your widgets (see Arrange your page design below).  
- Change settings ![settings](./dist/help/settings-icon.png):  
Use this button to display the settings page (See settings page below )  
- 

- Arrange your page design:  
A button at the top left of the main bar, locks ![lock](./dist/help/button-lock.png) and unlocks ![unlock](./dist/help/button-unlock.png) your widgets on the grid.  
When grid is unlocked, widget background change to gold color and feature are hidden.  
![widget-unlock](./dist/help/widget-gold.png)  

- Move and resize your widget:  
Before unlock your grid as explained above.  
You can resize a widget by draging anchor on right bottom of widget.  
![resize](./dist/help/widget-resize.png)  
You can also move a widget by draging it on the grid.  
![drag](./dist/help/widget-drag.png)  


Trouble?
---
InstrumentPanel stores some of the settings in the browser's localstorage. In case there is some garbage there you can
get it cleared by using a url with query parameter `?reset=true`.  
The units and labels are also stored in the browser's localstorage and fetched from the signalK's server only the first time.
If you change a unit or a display label on the server, you can clear the cache without destroying your layout by using a url with query parameter  `?flushCache=true`.  

For iOS users:
---
In `edit mode` for draging or resizing a widget, click one or twice on the center of the widget to get focus on it and after you can drag or resize widget with grid's scroll locked.  
If you don't click before on center of the widget, the grid scroll before you can drag or resize widget.  
For scrolling the grid, it's better to do by the left side even if vertical scroll bar is on the right side.  
In vertical scrolling by the the right side, you risk resizing the widget instead of scrolling the grid.  


