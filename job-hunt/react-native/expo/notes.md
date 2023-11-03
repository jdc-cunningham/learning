### React Native

4:39

I read companies don't use expo

using expo in this project, need to try react native cli

easier to use but limited by what expo allows

can eject from Expo to get Android/iOS

setting up VSC

keep getting distracted

9:35

`expo init AppName`

managed no ios/android folders

will use blank here

damn couple hours went by

I'm tired today, watched BL monocle AR AMA

10:40 PM

passed out, back on

start expo server `npm start`

cool lots of options including running on your phone

this shit is slow

skipping iOS part since doing on web

long download

got a virtual device running

so can run app on avd

cool expo installed on avd on its own and running the app

`ctrl + m` in AVD to show developer menu

Jesus I keep getting distracted lol, I like don't really want to do it, I know react/have used RN before

I need to come up with an app I want to use like one for monocle

fuck distracted, blah blah blah

28:06 logging

cool you can see log for each device/os

debugging -> developer menu (shake device)

Debug Remote JS (goes to Chrome) - this slows down app

Can read raw JS in sources tab

going to skip around some of this is like "how to publish an app"

debugging in vs code

never used debug much

`launch.json` - uncheck android, check packager

can't get my debugger to wrok

it's because the folder is not at root... `.vscode/launch.json`

fuck oh well I'll move on

46:30 fundamental concepts

- view | text | image | button | touchables | alert

core components (cross platform APIs)

`flex: 1` means grows horizontally and vertically

`SafeAreaView` for notch

`numberOfLines` truncates with ellipsis

prefix functions with handle

network images

`{ uri: "url" }`

`fadeDuration`image fades in slowly, Android only not iOS

`touchable components` wrap around stuff

nice commands

- `cltr + d` to select start/end lines
- highlight code then `alt + arrow` to move

`touchableOpacity` reduces image opacity when touched

`touchableNativeFeedback` for background color

each button for mobile os works differently

1:06:16

alert box

my prompt doesn't work

2nd interview scheduled let's go

`Alert.prompt` only for iOS

`Stylesheet.create` validates what is passed into it eg. for typo

`SafeAreaView`does not work on Android

use `Platform`

`StatusBar`

DIPs - density independent pixels

Physical pixels = DIPS x scale factor

uses points hmm... with scale factor, pixels and view width

points x scale factor = pixels

view width x scale factor

use percentage

Dimensions API - does not respond to orientation changes

`app.json` can set `orientation`value to support both portrait and landscape

`react-native-community` hooks for `useDimensions`

that doesn't work anymore but other ways

at 1:28:10

04/03/2023

lol interview coming up, barely got any of this down great
