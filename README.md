# CS260, Home of my CS260 project - Gym Bro Buddy

## Elevator Pitch

- Have you ever wanted to remember what your best bench was? Do you want to physically see the progress that you make in the gym? Want to brag to your friends about those massive winter gains or the summer cut? With the absolute dullest blade technology I could find I present to you the Gym Bro Buddy<sup>©</sup> it will keep track of your stats, make you training plans, calculate your ORM and almost nothing else! What a steal!

## Requirements

### Authentication:
- Users will have to login using email and password in order to access everything and this account will be tied to them and their stats
- Login and Sign up will send different API calls to express and express will keep a local copy of stuff (eventually it will be done in mongo DB), and it will send you to the right page now logged in
### Database data:
- I'm going to track the data of the user for their gym stats and graph it visually for them. They can see their progress from numbers pulled from mongo DB that I will maintain.
- For now I think I'm goiong to have it on express
### WebSocket data: 
- This will be pulling the most recent data and being able to share stats with friends. Everyone wants to show off to friends, or if you just want to see where your at so you would be able to pull up live time feed and see how its going for them
- ![Image of my sketch](https://github.com/Dashx7/Startup/blob/main/IMG_7540.JPG)

## TODO
- Holdiay web pages
- Predict stats from other stats?
- The actual Node.js tracker and grapher
- The send message thing


## Notes
Check out [My Google Doc](https://docs.google.com/document/d/1kt-fd8KEM64hTFWVifAqa3g5ZAjUoWANesyJ6xcsqHk/edit)
Workout Buddy web development idea? Gym bro buddy, bench bro buddy Buddy
- ./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s <type>
- ./deployFiles.sh -k ../JoshWiseman.pem -h JoshWiseman.click -s startup
- Change units
- Predict stats from other stats, like incline bench from regular bench
- Create workout plans for push pull and legs
- Tracker
-Track progress with graphs
- Have users
- Send messages to friends and look at their live time stats

> `Lets get this bread` - Unknown

# Midterm notes
Removed
