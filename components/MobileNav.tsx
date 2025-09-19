'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="yoom logo"
            />
            <p className="text-[26px] font-extrabold text-white">YOOM</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className=" flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                          {
                            'bg-blue-1': isActive,
                          }
                        )}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;


// How Sheet Works:
// SheetTrigger: The hamburger icon that opens menu
// SheetContent: The sliding panel that appears
// side="left": Panel slides in from left side
// sm:hidden: Hamburger only visible on small screens

// Active Link Logic:
// isActive = pathname === item.route || pathname.startsWith(item.route + '/')
// This highlights the link if you're on that page or any subpage   


// 🍔 Hamburger Icon

// CSS Breakdown:
// cursor-pointer: Shows hand cursor on hover
// sm:hidden: Hidden on screens 640px and above
// 36x36px: Bigger than desktop icons (easier to tap)

// 🔄 User Experience Flow
// Desktop Experience:
// User sees fixed navbar at top
// User sees sidebar on left
// User clicks sidebar links to navigate
// Active states show current section
// Mobile Experience:
// User sees navbar with hamburger icon
// User taps hamburger to open side menu
// User sees same navigation options
// User taps link → menu closes + navigates
// Only exact page is highlighted (simpler)
