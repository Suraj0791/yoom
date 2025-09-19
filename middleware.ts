import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoute = createRouteMatcher([
  '/',
  '/upcoming',
  '/meeting(.*)',
  '/previous',
  '/recordings',
  '/personal-room',
]);

export default clerkMiddleware((auth, req) => {
  if (protectedRoute(req)) auth().protect();

//  if (protectedRoute(req))
// Checks: "Is the user trying to visit a protected route?"
// protectedRoute(req): Returns true or false
// Logic: If user visits /recordings → returns true


// auth().protect()
// What it does: Forces user to login if not authenticated
// If user is logged in: Continues to the page ✅
// If user is NOT logged in: Redirects to login page 🔄


});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};


// 1. User visits URL
//         ↓
// 2. Next.js checks: "Should middleware run?"
//    (Uses config.matcher)
//         ↓
// 3. If YES → Middleware runs
//         ↓
// 4. Check: "Is this a protected route?"
//         ↓
// 5. If YES → Check: "Is user logged in?"
//         ↓
// 6. If NO → Redirect to login
//    If YES → Continue to page


// Think of this middleware like a bouncer at a club:

// Config matcher: "I only check people going to certain areas"
// Protected routes: "These VIP areas need special access"
// auth().protect(): "Show me your VIP pass!"
// Result: Either you get in, or you're sent to get a pass




//'/meeting(.*)' 

// (.*) = Regex pattern meaning "match anything after /meeting"
// Examples it matches:
// /meeting ✅
// /meeting/123 ✅
// /meeting/abc/settings ✅
// /meeting/room-456/participants ✅


// User visits: /recordings
// 1. protectedRoute(req) → checks "/recordings" → returns TRUE
// 2. auth().protect() → checks user auth → USER IS LOGGED IN ✅
// 3. Result: User sees the recordings page



// User visits: /recordings  
// 1. protectedRoute(req) → checks "/recordings" → returns TRUE
// 2. auth().protect() → checks user auth → USER NOT LOGGED IN ❌
// 3. Result: User redirected to login page

// User visits: /about (not in protected list)
// 1. protectedRoute(req) → checks "/about" → returns FALSE
// 2. auth().protect() → SKIPPED (not executed)
// 3. Result: User sees the page (no auth required)

