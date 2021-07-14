# StorybookContextPrototype
A working prototype of how to combine a fake Context Provider with Storybook

## Demo

Below is a context-dependent component ([CreateScreen](src/CreateScreen.tsx)) using a fake context provider ([FakeNetworkProvider](src/FakeNetworkProvider.tsx)) in storybook ([here](src/stories/CreateScreen.stories.tsx)) to simulate the creation of "things" in a database. In the real app, a real [NetworkProvider](src/NetworkProvider.tsx) would be used.

![context storybook](https://user-images.githubusercontent.com/79208198/125683872-89df7348-d088-407d-bca2-a0797b003ba8.gif)
