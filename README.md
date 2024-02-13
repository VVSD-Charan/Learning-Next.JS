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

## Image component in Next.js
<li>It is an extension of standard HTML element.</li>
<li>Next.JS provides automatic image optimization , enabling provision of correctly sized images for diffferent devices using modern formats like AVIF and WebP.</li>
<li>Optimization of images enhances website performance.</li>
<li>Next.JS image component allows lazy loading (Only images in viewport are loaded i.e images which are at bottom and still not seen are not loaded)</li>
<li>This optimization provided by Next.JS allows building of SEO friendly web applications.</li>

## Dynamic routes in Next.JS
<li>For dynamic routes we can use slug and get the dynamic segment using <strong>useRouter</strong></li>
<li>If url pattern to see specific blog is /blogs/[blog_title] , then we need to create blogs folder in pages directory and a file named [slug].js inside blogs folder.</li>
<li>Inside the [slug].js file , we can get the dynamic segment using <strong>useRouter</strong></li>

![Screenshot (174)](https://github.com/VVSD-Charan/Learning-Next.JS/assets/105978561/f8155652-fd59-424c-b2d1-7379f3d076eb)

## HTML anchor tag (<a>) vs Next.JS Link (<Link>)
<li>Next.JS Link offers features like prefetching and automatic need based fetching of static files , which improves performance of Next.JS application.</li>
<li>Navigating using Next.JS link will not require loading , but HTML anchor tag requires loading.</li>

## Component level CSS in Next.JS
<li>Next.JS provides component level / module css using .module.css extension.</li>
<li>CSS modules locally scope CSS using unique class name.</li>
<li>Import css from .module.css will create an object which has key-value pairs. <strong>Key</strong> in the object is class name and <strong>value</strong> for the key is a unique name given by next.js to identify that class.</li>
<li>This allowsto use the same class name in different files without worrying about collisions.</li>
<li>This module css helps us choose a styling from particular css file , by not allowing collisions or over-riding of styles.</li>
This behavior makes CSS Modules the ideal way to include component-level CSS

## Global CSS in Next.JS
<li>To load global css , then we must import files in <strong>_app.js</strong> file.</li>
<li>In pages , we can only import component level css i.e css files with extension .module.css .</li>
<li>Importing .css files in pages will give an error.</li>
<li>The default export of _app.js is a top-level React component that wraps all the pages in the application. We can use this component to keep state when navigating between pages, or to add global styles.</li>

## Styled jsx in Next.JS
<li>Styled JSX is a CSS-in-JS library that allows us to write encapsulated and scoped CSS to style components.</li>
<li>The styles introduced for one component won't affect other components, allowing us to add, change and delete styles without worrying about unintended side effects.</li>
<li>Styled JSX ensures the styles are scoped to this component only.</li>

![Screenshot (175)](https://github.com/VVSD-Charan/Learning-Next.JS/assets/105978561/99eda9d8-6de5-4409-b266-74594793b8a4)

<li>Most projects need some global styles to style the body element or provide css resets. Styled JSX allows us to add global styles using <strong><style jsx global></strong></li>

## Pre-rendering in Next.JS
<li>By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.</li>
<li>Because of pre-rendering , application is rendered without JavaScript. That’s because Next.js has pre-renders application into static HTML, allowing us to see the UI without running JavaScript.</li>
<li>If an application is a plain React.js one (without Next.js),then there’s no pre-rendering, so we won’t be able to see the application if we disable JavaScript</li>

![Screenshot (176)](https://github.com/VVSD-Charan/Learning-Next.JS/assets/105978561/8dddf3e7-dcf7-4745-9b1a-88ed149f424f)

![Screenshot (177)](https://github.com/VVSD-Charan/Learning-Next.JS/assets/105978561/25045ca4-f278-4601-ae21-afc46d760d06)

## Types of pre-rendering done by Next.JS
<ol>
  <li><h3>Static Site Generation</h3></li>
  <li><h3>Server Side rendering</h3></li>
</ol>

## Static Site Generation
<li>The HTML is generated at the build-time and re-used for each request</li>
<li>Static site generation is faster but less flexible.</li>

![Screenshot (178)](https://github.com/VVSD-Charan/Learning-Next.JS/assets/105978561/01579ce3-cec0-42b8-b51f-c3bad73fc3bb)

## Server Side Rendering
<li>The HTML is generated on each request.</li>
<li>Server-side rendering is more flexible, but requires more resources</li>

![Screenshot (179)](https://github.com/VVSD-Charan/Learning-Next.JS/assets/105978561/85695cc3-6c61-482b-aabf-02f33ff3ccf7)

## Server side rendering vs Static Site Generation
<li>Static Site Generation is preferable if the page is not frequently updated as it is much faster than having a server render the page on every request.</li>
<li>But if the page is frequently updated , then Server side rendering will be a better choice.</li>

## Implementing server side rendering
<li>In server side rendering , HTML will be populated at request time.</li>
<li>So, when we perform server side rendering , we can view entire data as HTML code in <strong>page source</strong></li>
<li>When server side rendering is implemented then there is no requirement for browser for executing javaScript code and call an API . All these tasks will be done by server itself.</li>
<li>In server side rendering , HTML is generated by Next.JS server by executing JavaScript before sending it to client. </li>

![Screenshot (180)](https://github.com/VVSD-Charan/Learning-Next.JS/assets/105978561/ea117e89-3a51-4ee2-980a-2638d8ed5628)

![Screenshot (181)](https://github.com/VVSD-Charan/Learning-Next.JS/assets/105978561/b7ce4451-a141-458b-9e6a-e54ee874d607)

The entire data in the page can be viewed if we use server side rendering


## Implementing static site generation
<li>If static site generation is implemented , then there is no requirement to call API or server .</li>
<li>Implmenting static site generation will build a static site like locally written HTML page.</li>
<li>For implementing static site generation , we make use of two functions :
    <ol>
        <li>getStaticPaths()</li>
        <li>getStaticProps</li>
    </ol>
</li>
<li>In static site generation , Next.JS server executes all javaScript beforehand and keeps static pages which will be delivered on request.</li>
<li>We use getStaticPaths to find out all possible data points.</li>

## Hydration in JavaScript
Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)





