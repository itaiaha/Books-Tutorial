# Books-Tutorial
Following along with Todd's book list tutorial that uses Firebase database as the backend.

Ionic2 and Firebase

Tutorial 1 https://www.youtube.com/watch?v=bAqAuegNoD4&t=931s
Tutorial 2 https://www.youtube.com/watch?v=r6I7GFLsUPA
Tutorial 3 https://www.youtube.com/watch?v=rGKFUqRPu8E

Prerequisites:
You'll need to make sure you have Ionic, Cordova and Typescript installed e.g.
> npm install -g ionic typescript cordova

Create your project e.g.
> ionic start BookList blank --v2
> cd BookList

Test that your basic app is useable by doing the following
> ionic serve

Need to do this next step so that it installs latest app-scripts as it will provide webPack support. Open up a new terminal and do the following:
> npm install @ionic/app-scripts@latest --save-dev

Bring in everything we need for Fire2 that works with Angular2
> npm install @types/request@0.0.30 --save-exact

Now we need to add and initialise Firebase
> npm install firebase angularfire2 --save

From here you should be able to follow along with the clips.

Trust me, if I can do it, then you definitely can :)
