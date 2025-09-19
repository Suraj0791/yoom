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




after building navbar sidebar basic layout skeletion folder of the app , we will now move to clekr 
setup clekr
add signin signup comp 
now add middlware and in middleware add protetcted routes also


after setting clerk component , we wont use the clerk signup signin ui we want our own ui 
so in env we will add two varibale next publci clerk signin url nd signup url that is telling clerk ki where to go when 
someone try to sign in 

and in (auth) folder inside we got we crrate two pages sign-in amnd sign-up page


next we build home page of the root 
home page has sidebar navbar 4 different card in middle like new meeting  join meeting schdeule meeting virew recording 
then below todays upcoming meeting and card so like this is the homepgae
we need different compoenents 

first we need a compone t meetying type list which will render the 4 meetings available i mean these 4 different card in middle like new meeting  join meeting schdeule meeting virew recording 

HOME CARD COMPONENT IS THE SINGLE CARD ELEMENT ( wo jo chaar card redner ho rhe h uska reusable compone thome card with logo desc time nd all) 
meeting type list wo compone t h jo jo 4 card ko list kreag map homecard ko 



now when we click on any card like new meeting in zoom a new modal opens up 
in all card same 
so next step is to make meeting modal component
and to build a modla we use dialog comp of shadcn

MeetingTypeList (Parent)
    ↓ (manages state & passes props)
HomeCard (Child) × 4
    ↓ (triggers state changes)
MeetingModal (Sibling)
    ↓ (renders based on state)
Dialog (UI Component)


🔄 Complete User Flow Examples
Scenario 1: User Wants Instant Meeting
Step 1: User Action
// User clicks "New Meeting" card
<HomeCard handleClick={() => setMeetingState('isInstantMeeting')} />

Step 2: State Change
// State updates from undefined to 'isInstantMeeting'
meetingState = 'isInstantMeeting'

Step 3: Modal Renders
// Somewhere in MeetingTypeList (you haven't shown this part yet)
{meetingState === 'isInstantMeeting' && (
  <MeetingModal
    isOpen={true}
    onClose={() => setMeetingState(undefined)}
    title="Start an Instant Meeting"
    handleClick={startInstantMeeting}
    buttonText="Start Meeting"
  />
)}


User clicks HomeCard
        ↓
handleClick() executes
        ↓
setMeetingState('specific-type')
        ↓
Component re-renders
        ↓
Modal opens with:
- isOpen = true
- title = specific title
- handleClick = specific action
- children = specific form/content
        ↓
User interacts with modal
        ↓
Either:
- handleClick() → perform action
- onClose() → close modal


🚀 Key Benefits of This Pattern
1. 🎯 Single Responsibility
MeetingTypeList: Manages state & layout
HomeCard: Handles click events
MeetingModal: Displays content
2. 🔄 Reusability
Same MeetingModal for all meeting types
Just pass different props
3. 🎨 Consistency
All modals look the same
Same UX patterns
4. 🛠️ Maintainability
Easy to add new meeting types
Centralized modal logic



next is to setup stream for video calls 
for stream see dedicated stream guide
