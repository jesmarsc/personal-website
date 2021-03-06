---
path: '/projects/portfolio'
title: 'Portfolio'
featuredImage: '../assets/portfolio-thumb.jpg'
technologies: [React, GatsbyJS, GraphQL, SCSS]
github: https://github.com/jesmarsc/personal-website
website: https://jesmar.info/
---

##Description
You're viewing it right now! My portfolio was the first website where all the React components and styling were made by me. I enjoyed the creativity that came with designing a website and iterating over previous designs.

##Architecture
###GatsbyJS
When I was beginning to look at building a portfolio, I was also starting to learn React. I wanted to use React, but of course it seemed like overkill. That's where I found GatsbyJS, a static website generator that lets you build your UI by using React. GatsbyJS, along with React Helmet, helped streamline much of the SEO. Not to mention, performance is also very good, sometimes reaching a score of 100 in Lighthouse.

###GraphQL
Originally, I handled the images myself. This meant scaling them down to the proper size in Photoshop and compressing them to reduce their file size. I would also handle project information directly in React. This became annoying after a while since I would have to resize every project image for different scenarios. Recently though, I finally incorporated gatsby-image and GraphQL. Now, gatsby automatically creates properly sized, compressed images! I simply pull them in through a GraphQL query and they're ready to use.

GraphQL also lets me source the project information you're currently reading. By using gatsby-source-filesystem and gatsby-transformer-remark, I can source markdown files and use their data in templates, like this one.

###Styling
All styling is also done by me. I used SCSS and CSS modules for the styling. This was also where I practiced CSS grid and flexbox for my navigation and project grid. The mountain background was originally a PNG that I converted to an SVG. It didn't have many colors and I wanted it to scale seamlessly to any device. I ended up using a program named Vector Magic for this and then touched it up in Inkscape since the gradients looked terrible and the mountain edges weren't clearly seperated. I think it came out awesome!
