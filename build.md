on homepage u can see the sidebar and navbar but as soon as u jump in the meeting there no sidebar nd navbar 
so w eneed sidebar nd navbar in hoempage just  not i meeeting page


see sidebar matters the most as we will do all the routing here only 
add sidebar links in a different file constants/index.ts and import this at sidebar 
this makes code cleaner exporting the arrays and importing it in sidebar 



i can say our first main thing was to build a basic skeletion layout and routes using constant index file 
so basically the first major step was to build a sidebar with working routes/link isactive nd all properties using taileind nd next js pathname and homepage beside sidebar 

now we will move ahead to make navbar


bbai u see in mobile ki we click the 2 dot button or 3 menu line/hamburger  nd a new page type slides out to build that use sheet from shadcn


how u will build a navbar ?? see we need two navbar one for mobile and one for desktop 
mobile and desktop bpoth are different 
as in mobile navbar we will need  ahmburger menu and when we click the sidebar will come from it  from right/left either side u decide using sheet compone tin shadcn 

🔄 User Experience Flow
Desktop Experience:
User sees fixed navbar at top
User sees sidebar on left
User clicks sidebar links to navigate
Active states show current section
Mobile Experience:
User sees navbar with hamburger icon
User taps hamburger to open side menu
User sees same navigation options
User taps link → menu closes + navigates
Only exact page is highlighted (simpler)
