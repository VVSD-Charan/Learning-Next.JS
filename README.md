## About Next.js
Next is a react framework built as an open-source on top of React library. <br>
Next.JS uses file based routing which makes creation of applications easy. <br>
Features provided by Next.js :
<li>Server Side Rendering</li>
<li>Static site generation</li>
<li>Built in router</li>
<li>Various tools to optimize Search Engine Optimization.</li>

## Folders in Next.js

#### Public Folder :
<li>Contains public directory of our next.js application.</li>
<li>Anything put inside public folder will be publicly accessible on web application's server.</li>
<li>We should not keep secret files inside this folder as they can easily be accessed by public users.</li>


#### Pages Folder:
<li>Pages are like react components.</li>
<li>Pages follow file based routing approach.</li>

#### Styles folder
Contains all CSS styles of our Next.JS application.

## No page found
Next.JS automatically displays no page found if a route is not valid , instead of giving an error.
![Screenshot (172)](https://github.com/VVSD-Charan/Learning-Next.JS/assets/105978561/f603f595-fad1-45d9-b7aa-6dbcae061564)

## Is Next.JS a frontend or a backend framework ?
NextJS is both frontend and backend framework as it can generate frontend along with APIs which run on the server. 

## React JS vs Next JS
We cannot compare which is better as NextJS uses react and has additional functionalities . NextJS comes up with more functionalities like file based routing , Server side rendering , Static site generation and a built in router.

## File based routing
<li>While using react , we must install third party packages to get routing.</li>
<li>Next.JS comes with an incredible feature called file-based routing.</li>
<li>Using file based routing , developers can simple create files inside pages folder and those pages will serve as routes for the application.</li>
<li>If we create a page called contact.js inside pages folder of next.js application , we can view the component by visiting localhost:port/contact </li>
<li>When a file is added to the page folder , it automatically acts like a route.</li>
<li>Each page exports a react component which is rendered when corresponsing URL is visited by person visiting the page.</li>

## Head in Next.JS
<li>Like html files , we can also use head inside pages in next.JS.</li>
<li>We can include scripts , use title tag and link stylesheets seperately in each page.</li>
<li>To use head inside pages we must import head from Nex.JS using command <strong>import Head from 'next/head'</strong></li>

## Scripts in Next.JS
<li>The Next.JS script component is extension of HTML script element.</li>
<li>It enables developers to set loading property of third-party scripts anywhere in their application without needing to append directly to 'next/head'</li>
<li>Using script elements saves time of developers as well as improves loading performance.</li>


