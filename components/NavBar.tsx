import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const NavBar = () => {
  return (

//     flex-between: Custom class (likely justify-between items-center)
// fixed: Navbar stays at top of screen (doesn't scroll)
// z-50: High z-index (appears above other elements)

    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          YOOM
        </p>
      </Link>
{/* 
      What This Does:
Link href="/": Clicking logo takes you home
Logo Image: 32x32px on desktop, 40x40px on mobile
"YOOM" Text: 26px bold white text, hidden on small screens
Result: Clean logo + brand name combination */}




{/* //👤 Right Side (User & Mobile) */}

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
        {/* MobileNav: Mobile hamburger menu (shows on small screens) */}

      </div>
    </nav>
  );
};

export default NavBar;