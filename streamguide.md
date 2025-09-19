first of all we crrate a providers folder 
what r providers ? providers a re something which wrap our whole app so stream provider will wrap wholw app
create a new file streamclient provider inside that folder 
VVVVI 
WE NEED ALSO TO CONNECT CLERK TO STREAM SO THAT EACH CLERK USER IS CONNECTED TO STREAM USER 

WE CREATE A STREAM ACTION FILE COZ WE CANT VERIFY TOKENS/API KEYS ENV VARIBALE IN CLIENT SIDE THATS WHY WE NEED AVTIONS 
WHY BEACUSE WHENEVER A VARIBALE STARTSS WITH NEXT PUBLIC IT CAN BE ACCESSED FROM CLEINT SIDE BUT IF NOT THEN ONLY SERVER SIDE SO STREAM SECRET KEY DOESNT STARTS FROM NEXT 

so we crrate a action file and make a fucntion call tokenand then at end we crrate a strwam server side client using our api key and secret 

to create a stream user we will need an id nd their role .optionally we can also specify their names nd images tokens need to be genrated server side 
Tokens need to be generated server side. You can use our server side SDKs to quickly add support for this. Typically, you integrate this into the part of your codebase where you login or register users. The tokens provide a way to authenticate a user or give access to a specific set of calls.

Different types of users
Authenticated users are users that have an account on your app.
Guest users are temporary user accounts. You can use it to temporarily give someone a name and image when joining a call.
Anonymous users are users that are not authenticated. It’s common to use this for watching a livestream or similar where you aren’t authenticated

Anonymous users don’t establish an active web socket connection, therefore they won’t receive any events. They are just able to watch a livestream or join a call. The token for an anonymous user should contain the call_cids field, which is an array of the call cid’s that the user is allowed to join.

Connecting a user and error handling
Users can be connected in two ways:

Automatically when the client is created:

const client = new StreamVideoClient({
  apiKey,
  user,
  token,
  options: {
    maxConnectUserRetries: 3,
    onConnectUserError: (err: Error, allErrors: Error[]) => {
      console.error("Failed to connect user", err, allErrors);
      // handle the connect error, i.e. ask the user to retry
      // later when they have better connection or show an error message
    },
  },
});


Manually by calling the client.connectUser() method:

const client = new StreamVideoClient({ apiKey });
try {
  await client.connectUser(user, token);
} catch (err) {
  console.error("Failed to connect user", err);
  // handle the connect error
}

Disconnecting a user
To discard a client instance, or to disconnect a user, call the client.disconnectUser() method:


await client.disconnectUser();


Client options
token or tokenProvider
To authenticate users you can either provide a string token or a tokenProvider function that returns Promise<string>. If you use the tokenProvider the SDK will automatically call the provider whenever the token is expired.




Providers = React Context Providers
They wrap your entire app
Share data/functionality to all child components
No prop drilling needed!


📁 Step 1: Create Providers Folder Structure
Created providers


🎬 Step 2: Create StreamClientProvider

🎬 StreamClientProvider - Deep Breakdown
Explained
🔑 API Key Setup
Why NEXT_PUBLIC_?
NEXT_PUBLIC_ = Can be accessed on client-side
Without it = Only server-side accessible
Stream needs this = Client needs API key to connect


🔗 Clerk ↔ Stream User Connection
This Magic Connection:
Clerk User logs in → Gets user data
Stream gets same data → Creates matching Stream user
Result: Same user in both systems! 🎯


1. User visits app
   ↓
2. Clerk checks authentication
   ↓
3. If logged in → Get user data
   ↓
4. Create Stream client with user data
   ↓
5. Wrap app with Stream provider
   ↓
6. Every component can now use video features!


1. Browser: "I need video access"
   ↓
2. Server Action: "Let me check..." 
   ↓
3. Server: Uses SECRET_KEY to create token
   ↓  
4. Server: Returns safe token to browser
   ↓
5. Browser: Uses token for video calls
   ↓
6. Stream: "Token is valid, allow access!"





now when u done with client provider and stream server action token provider 
we will wrap our application i mean layout .tsx with this client provider so now our whole app knows about the stream user nd video

now we will move to meetingtypelist  page again and complete the fucntion crerate meeting there 

