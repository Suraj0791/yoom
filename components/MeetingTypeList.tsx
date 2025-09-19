/* eslint-disable camelcase */
'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import HomeCard from './HomeCard';

const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >(undefined);
  
//   What This State Does:
// undefined: No modal open (default state)
// 'isInstantMeeting': "New Meeting" modal open
// 'isJoiningMeeting': "Join Meeting" modal open
// 'isScheduleMeeting': "Schedule Meeting" modal open





  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState('isInstantMeeting')}
      />
      {/* Flow: User clicks → State becomes 'isInstantMeeting' → Modal opens */}


      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        className="bg-blue-1"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      {/* Flow: User clicks → State becomes 'isJoiningMeeting' → Modal opens */}


      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-purple-1"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />

      {/* Flow: User clicks → State becomes 'isScheduleMeeting' → Modal opens */}


      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-yellow-1"
        handleClick={() => router.push('/recordings')}
      />
        {/* Flow: User clicks → Navigates to /recordings page NO MODAL */}

    </section>
  );
};

export default MeetingTypeList;