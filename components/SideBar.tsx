'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

/*
use client': Makes this a client component (needed for hooks like usePathname)
usePathname(): React hook that returns the current URL pathname
cn() function: Combines clsx + tailwind-merge for conditional styling
*/






const Sidebar = () => {
  const pathname = usePathname();  // Get current route

  return (

   /*
CSS Breakdown:
sticky left-0 top-0: Sidebar stays fixed to the left side
h-screen: Full viewport height (100vh)
w-fit: Width adjusts to content
lg:w-[264px]: Fixed width of 264px on large screens
flex-col justify-between: Vertical layout with space distribution
bg-dark-1: Custom dark background color (from theme)
pt-28: Top padding of 7rem (112px) - space for navbar
max-sm:hidden: Hidden on mobile devices (responsive design)









   */




    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start',
                {
                  'bg-blue-1': isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;



//const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

// 🔍 What This Line Does
// This line determines if a sidebar link should be highlighted/active based on the current page URL. It returns true or false.


// 🧩 Breaking It Into Parts
// Part 1: pathname === item.route (Exact Match)
// This checks if the current URL exactly matches the link's route.

// // If user is on homepage
// pathname = "/"
// item.route = "/"
// pathname === item.route  // "/" === "/" → TRUE ✅

// // If user is on recordings page
// pathname = "/recordings"
// item.route = "/recordings"
// pathname === item.route  // "/recordings" === "/recordings" → TRUE ✅

// // If user is on different page
// pathname = "/recordings"
// item.route = "/previous"
// pathname === item.route  // "/recordings" === "/previous" → FALSE ❌


// Part 2: pathname.startsWith(${item.route}/) (Nested Route Match)
// This checks if the current URL starts with the link's route followed by a /.

// Why is this needed? For sub-pages and dynamic routes!

// // Scenario 1: User viewing a specific recording
// pathname = "/recordings/abc123"
// item.route = "/recordings"
// // First check: "/recordings/abc123" === "/recordings" → FALSE
// // Second check: "/recordings/abc123".startsWith("/recordings/") → TRUE ✅
// // Result: Recordings link stays active even on sub-page

// // Scenario 2: User in personal room settings
// pathname = "/personal-room/settings"
// item.route = "/personal-room"
// // First check: "/personal-room/settings" === "/personal-room" → FALSE
// // Second check: "/personal-room/settings".startsWith("/personal-room/") → TRUE ✅
// // Result: Personal Room link stays active

// // Scenario 3: User on different main section
// pathname = "/recordings/abc123"
// item.route = "/previous"
// // First check: "/recordings/abc123" === "/previous" → FALSE
// // Second check: "/recordings/abc123".startsWith("/previous/") → FALSE ❌
// // Result: Previous link is NOT active

// const isActive = (condition1) || (condition2);
// //                  ↓              ↓
// //            exact match    OR   nested match

// // If EITHER is true → isActive = true
// // If BOTH are false → isActive = false


// 🎨 How This Affects the UI
// className={cn(
//   'flex gap-4 items-center p-4 rounded-lg justify-start',
//   {
//     'bg-blue-1': isActive, // ← This is where isActive is used
//   }
// )}

// If isActive = true: Link gets bg-blue-1 (blue background)
// If isActive = false: Link has no background (transparent)


// 📋 Summary
// The line const isActive = pathname === item.route || pathname.startsWith(\${item.route}/`)` is saying:

// "A sidebar link should be highlighted if:

// The user is exactly on that page, OR
// The user is on any sub-page of that section"
// This creates a smart navigation system where the main section stays highlighted even when you're deep in sub-pages! 🎯







// 🔍 Think of it Like This
// Imagine you have 4 buttons on your sidebar:

// Home Button → Goes to /
// Previous Button → Goes to /previous
// Recordings Button → Goes to /recordings
// Personal Room Button → Goes to /personal-room
// When the user is on /recordings/meeting-123, the code asks:

// "Should I highlight the Home button?" → NO
// "Should I highlight the Previous button?" → NO
// "Should I highlight the Recordings button?" → YES (because URL starts with /recordings)
// "Should I highlight the Personal Room button?" → NO


// 🔄 How the Loop Works

// {sidebarLinks.map((item) => {
//   // This runs 4 times - once for each sidebar link!
//   const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
  
//   return (
//     <Link href={item.route} key={item.label}>
//       // Link content
//     </Link>
//   );
// })}

// The sidebar component loops through ALL links and checks each one:

