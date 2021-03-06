---
path: '/projects/sorting-visualizer'
title: 'Sorting Visualizer'
featuredImage: '../assets/sorting-visualizer.jpg'
technologies: [React, MobX]
github: https://github.com/jesmarsc/sorting-visualizer
website: https://sorting-algorithms.netlify.com/
---

##Description
A sorting visualizer for Selection Sort, Merge Sort, Quick Sort, Bubble Sort, and Heap Sort. After watching Youtube videos of these sorting alogithms, I thought it would be a neat project to create an interactive version. It not only solidified my understanding of these algorithms, but I also learned about more performant state management through MobX.

##Architecture
###Generator Functions
All of the algorithms are implemented using generator functions. These functions return an iterator that can be used to iterate through the sorting steps by calling its next() function. Rather than executing the entire sorting algorithm and then animating it, I was able to execute each step and then animate it right away using setInterval and the iterator returned by the generator function. This helped improve performance since executing the entire algorithm first had a noticable delay before any animations started. I was also able to pause the interation, allowing the user to examine each step.

###MobX
Originally, this project used React's useReducer hook. This resulted in major performance loss since React requires immutable data structures. This meant I would have to copy the state whenever I tried to swap elements while sorting. The render function in the main component would also remap the entire array to make the bar components (the green rectangles) since the copied array was effectively refering to a new array. When looking for solutions, I ran into MobX. MobX not only let me change the state without copying it, but it also created a dependency graph so that state changes directly affected the corresponding bar without remapping the entire array.

I then created two stores, one responsible for handling array mutations and the other to handle animations. A local store was also used for the menu to keep track of the options selected.
