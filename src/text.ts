export const text = `All right.

Now in the last lesson, we created a brand new Material App, which is going to be the basis for all the

other widgets that we're going to construct on-screen. And by including the Material App,

we also get to tap into all of the components or widgets that the Material apps come with, such as a

text or an image widget.

But in this lesson, we're going to look at creating a scaffold in this Material app, so that we can have

an app bar, we can have a body where most of our app is going to go, or we can have a floating button if

we wanted to.

And the scaffold widget is pretty much exactly that. You can use it to place common items onto your screen.

I recommend reading the scaffold class documentation and seeing what it allows you to do.

So inside our app, instead of having a centered piece of text, we're going to go ahead and delete all

of that.

So select everything up to the closing comment for the center widget, and you can go ahead and delete

that.

Now notice that these comments get created automatically, and it shows you for example,

this is the end of the center widget.

This is the end of the Material app widget.

And if I added a comma here, and hit save, it separates out the text widget and shows me that this is

the final closing brace. And this makes it easy for us to be able to, for example, take this part out, which

is the text widget, or take this part out, which is the center widget just to be able to see where that's

coming from.

Now if it bothers you having a lot of this extra stuff that gets written on the screen, making your code

look more wordy, you can also go into the preferences and going to the editor section, then general, then

appearance, and you can either enable or disable this if you want.

I'm going to leave it in.

Just to make it easier for you to see where each part ends.

But it's again up to you as a personal preference.

So we were going to go and delete the center widget from here.

So we're going to leave the part where it says home, but we're going to delete the center widget which we set as

the home of our Material app.

Well, it's going to be a scaffold widget. And a scaffold widget,

you can see, can have a lot of different properties or different things that you can set.

And that includes adding in a floating action button or changing what's inside the body of the app, adding

in an app bar and a whole bunch of other things that you can do. In our case,

we're going to firstly, add a comma at the end of every new parentheses we create.

And inside the parentheses for our scaffold, we're going to add an app bar, by writing the words appBar.

We're setting one of the properties of our scaffold. We're telling it that in the position where it expects

to have an AppBar,

we're going to put an AppBar widget there.

Now an AppBar widget is simply a bit of pre-built material design, and it adds a top up bar to your app.

And if we take a look at the AppBar class, it tells us there's all sorts of things that you can change

about the AppBar.

For example, it could have a title, or it could have a button on the left, or it could have multiple buttons

on the right, or could have a bottom or a flexible space.

So we're not gonna make our AppBar that complicated.

And it also has a whole bunch of properties that you can change. Such as it's background color, or its

brightness.

Let's go ahead and first add a title to our AppBar.

So we're going to happen to the title property, and we're going to give it a title. And our title is going

to be made up of a text widget. And we're simply going to write the title for our app, which is 'I Am

Rich'

So now let's go ahead and run our app. And you can see, we have something that looks a little bit more

like a real app now.

It's got a real AppBar, it's got a title for the AppBar, and it's got a body, that's kind of just blank

at the moment. On the top right corner,

you see this little banner here.

And it says debug. It's basically telling you that whatever is running at the moment, is not the final

version of the app.

And when you finally build your app and run it on a real device, then that little banner will go away.

But when it's in the debug mode, it's there to tell you that this is not the fastest version of the app.

It might have a few lags.

It's not optimized. It's just for development and debugging.

Now if that little banner bothers you, a really quick way of getting rid of it is by going into the Flutter

Inspector, while your app is running, and going into the more actions button, and you can click on hide

debug mode banner. And it will just make that disappear for you, like some sort of mafia boss. Now that

we've got our app bar,

And in the docs, you can see that the app bar has a whole bunch of things that we can change about it.

For example it's title, and we did in fact give it a title.

You can also add buttons to it. But you can also scroll down to see all of the possible properties that

you can change.

And one of the ones that I'm quite keen on changing is the background color of my app bar.

I don't really want it to be blue.

I kind of want it to be a fancier blue. And very often, your client will say things like, "That color doesn't

feel classy enough.

Give me a classy color."

So let's give them a classy color.

So in order to change the background color of our app bar, we can take a look at its properties.

And one of those properties looks suspiciously like it's going to do exactly what it is that we want.

And we can read the description or it says this is the color that's going to be used for the app bar's

material.

So that seems pretty much like what we need to change the background color,

right?

So let's go ahead and do that. Now for the app bar,

you can see at the moment, it's got one property set, which is the title property. And the title property

expects a widget. Some sort of widget that will be displayed in that position of the title in the app bar.

But the property that we want to add is called backgroundColor.

And this particular property expects something that is a color.

So how can we put a color in here?

Well, when you're creating a material app, as I mentioned, you get access to a whole bunch of material

widgets, but you also get access to all of the material colors.

So when Google came up with the material design system, they also came up with a color palette for you

to use.

And if you take a look at this page you can see all of the material colors. And they have different shades,

darker or lighter or accent tones that look just a little bit brighter, and a little bit more catchy.

And you have access to all of these colors straight away, by making your app a material app. If you want

to go and change the color,

you can tap into colors, and this will tap into all of the material colors. And then you add a '.' and

you get to choose which color you want.

So in our case, I'm going to make the app bar a blue-grey color. And this looks kind of like this.

And I want it to be a kind of dark shade of blue grey.

So I quite fancy this blueGrey 900.

So that's what I'm going to type in here.

I'm going to type blueGrey, and then inside some square brackets, I'm going to write 900.

So now, if I run my app again you'll notice that the background of the app are changes to a dark blue

color.

And it looks a lot classier.

I hope you might agree.

Now we've got our app bar and it's looking pretty nice.

The next thing to change is the main body of our app. Going back to our scaffold class,

you can see that the app bar is one of the things that we can change about it.

But it's also got the body, which is the primary content of the scaffold.

It's everything that's going to go in here pretty much.

Let's go ahead and provide a widget for it, so that we can actually show something there.

Now inside are scaffold,

we have a single property that we've said, which is the apple.

And for the app bar position of our scaffold, we've created an actual app bar widget. Inside that widget,

we've changed two of its properties.

1. We've given it a title to say, "I Am Rich" as a piece of text widget.

2. And we've also set the background color of our app bar widget, to a dark blue gray color.

What if I wanted to change the entire background of my scaffold, so that this is no longer white but

a nice sort of standard blue grey color?

How can I do that?

So as a challenge, I want you to look through the documentation of the scaffold widget, and see if you

can figure out how to change the background color of our scaffold. Pause the video, and try to complete this

challenge.

All right. So let's first try and find the scaffold class in the documentation. And we can read a little

bit about what it does.

But more importantly, if we scroll down we can see that there's a whole bunch of properties or things

that we can change and customize for our particular scaffold.

Now we've already added an app bar, but we now want a background color.

So this is going to change the entire scaffold background color. And we can do that by simply adding

it as another property that we set.

If we collapse the app bar part, you can see that in our scaffold widget, we've set a single property

could AppBar.

But, what if we wanted to add another property. Let's add the background color property in here. And we

can provide a color using Colors.blueGrey

And now, if I hit run, you can see that the entirety of my background has turned into this blue-grey color,

because I've changed that property called background color for my scaffold widget.

It's through the use of different widgets, different types of widgets, such as layout widgets or components

such as app bars, and then by setting the properties for each of these widgets, that we start to customize

the appearance and the functionality of our apps.

Now all we need is to actually have some content in our app. Right?

There's currently nothing in app, other than an app bar, and a blank background.

If we look at the scaffold class again, you can see that in the example code, the example shows a scaffold

with an AppBar, BottomAppBar and a FloatingActionButton. And then it talks about the body.

Now the body, is where the primary content of the scaffold is gonna go.

And that refers to this area right here. And you can see that when you set the body property, it's expecting

a widget to be set there.

Let's go ahead and do that.

Let's firstly add a property, that's the body property, and we're going to provide a widget right here.

The widget that I'm gonna use is going to be an image widget, and you can creat it by writing the word

image and a set of parentheses.

And inside the parentheses, we get to define what type of image we're going to show.

So for the body of my scaffold, I'm going to add a image widget, and the image widget is almost like a

picture frame. You create it and it starts out blank. But you can change one of its properties.

Now when we search for the documentation for the image class, for example if I type it in here, you'll

notice that there's actually two different images that we could be tapping into.

One, is an image from Dart,

and another is an image from widgets.

Now because we want an actual image widget, because it will show up on screen, then we want to look at

the documentation for that particular selection.

So this is just the tip to remember that when you're searching in the search box for the documentation,

there might be multiple things that are named the same, but they come from different libraries of code.

And if you're putting something on screen that's gonna show up, it's always going to be a widget. In our

image class,

you can see that there's a whole bunch of different ways of creating a new image.

And we can either create an image from our asset bundle, or we can create an image from a file, or we

can create an image from the network.

So the image class is actually just a placeholder.

It's like a picture frame that we put onto the screen, and it doesn't come with an image by default.

Instead, we have to use one of its properties. For example the image property to tell it what image it

should display.

Here is all image widget, and we're going to set it's image property.

Now there's different types of images that we can display.

We can either display an asset image, that's an image that comes from our project folders, or we can display

a network image that comes from the Internet.

So let's try this one first you can see that this particular widget expects a URL, and this has to

be a URL that corresponds to an image, so that it will show up inside our image picture frame.

If we go on to Google and we just search for image, we go in to images. Then let's pick one of these images,

let's say this one some northern lights to go into an app.

If we right click on the image and we say open image in new tab, then it will open it with URL

that we need to fetch this particular image.

Notice that there's nothing else on screen.

This is just where the image resides.

So let's copy that URL, and paste it inside here.

In order to use text, not code, but actual strings, we have to add some single quotes around the text. so

we will paste

our URL inside two single quotes.

And while in other programming languages, such as Swift or Java, we'll be using double quotes. When we're

writing Dart code,

by convention, we should work always with single quotes at the end and at the beginning.

Now we're telling our app that it should display an image in the main body of our scaffold, and the image

that it should display is going to be one that's fetched from the Internet.

And the place where that image resides is right here.

So now if we hit play, and we run our app, then you can see it shows up our image right in there in the

body of our app. Here's a challenge, at the moment,

our image is right at the top of our app.

Can you make it such that the image is centered inside the body of our scaffold?

You've seen this before. Pause the video and try to complete this challenge. As we saw before,

if we want to center a widget inside another widget, we can use the center widget.

And in order to do that, we would have to wrap the image widget inside a center widget.

Now we can either do that by, what we did before, which is where we cut out that widget put in the center

widget, and then inside the center widget we told it what's going to be the child or the thing that's

going to be centered.

And then we paste it in, the thing that needed to be in the center.

Now there's a much easier way that I want to show you. I've reversed the code back to what we had before.

And if you click on the widget that you want to embed in another widget, and you either click on the

little yellow light bulb that shows up, or hold down ALT on Windows, or OPTION on Mac, and hit ENTER. You'll

see a little menu pop up. And this will menu makes it really convenient for you to embed the current

thing that's selected inside something else.

So we can wrap it with a column, wrap it with a row, put it in a new container and also put it in a center

widget. And that automatically puts in the center widget, adds in a child property, and puts our previous

widget that we had selected, inside there.

So now when we run our app again, you'll see that our image gets automatically centered in the body of

our scaffold, which is exactly what we told it to do. So we now have a really simple app that's written

with very few lines of code. But it actually does quite a lot of powerful stuff.

It's laid out and created a new app structure for us using the scaffold.

We provided an app bar and set the background color of our apple to a color that comes from the material

palette which is this dark blue-grey color.

We gave it a title using a text widget and then we added a body property to our scaffold to tell it

what it should display in the main body of the app.

And here we have an image that's fetched from the Internet using a URL, where that image lives.

And then we centered that widget using our convenient menu, and we now have an app that does pretty complicated

things especially for how few lines of code we've written. So it's a good time to review the structure

of our current app.

And I'm gonna go onto a website called draw.io which makes it really easy to create flow charts

and diagrams. And I'm going to create a diagram for my 'I Am Rich' app. Let's start from the beginning. We

have a Material App, right at the top of the tree. So let's drag in a rounded rectangle, and let's call

it Material App.

Now that material app has a single item that's embedded inside it, and that's a scaffold.

So let's add that as a descendant, and that's going to be our scaffold. And inside the scaffold,

we've got a couple of things. We've got a app bar,

we've got a body, and we've got a background color. so the background color is a color widget. Let's

add that here.

We've got a color widget and we've got an app bar widget,

and finally we've got a center widget.

These are the three children or descendants of our scaffold.

And then these widgets each have their own children.

So the center widget has an image as a child,

so let's add that.

And remember we said that the image widget is kind of just like a picture frame.

And it has to have some content for it to actually display something.

So the image widget actually has a child that is a network image, because it has to fetch the image from

the Internet.

And the app bar has two children, a title that's a text widget, and a background color,

that's another color widget.

So let's add that in there as well.

So we've got a text widget and a color widget. And this is all widget tree. By embedding widgets inside

other widgets, and setting the properties of each of these widgets,

we've ended up creating an app that actually looks like it's almost ready for the app store.

There's certainly a lot simpler apps that I've seen, and all that we've written is just twenty two lines

of code. But we've effectively created an iOS app and an Android app that has an image, that has an app

bar, that has backgrounds, that has a whole lot of things.

All because we're leveraging the power of these pre-built widgets from Flutter. And in the next lesson,

we're going to learn about another type of widget that will allow us to load images from our assets

folder in our project, and display it inside our app.

So for all of that and more, I see on the next lesson.`