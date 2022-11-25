import React from 'react';

const Blog = () => {
    return (
        <>
            <h1 className='text-center underline my-6 text-5xl'>Our Blogs</h1>
            <div className="collapse my-5">
                <input type="checkbox" className="peer" />
                <div className=" rounded collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-gray-200 text-black peer-checked:bg-gray-200 peer-checked:text-black">
                    <p>There are four main types of state you need to properly manage in your React apps
                        <ul>
                            <li><b>1. Local State</b></li>
                            <li><b>2. Global State</b></li>
                            <li><b>3. Server State</b></li>
                            <li><b>4. URL State</b></li>
                        </ul>
                    </p><br />
                    <p>
                        <b className='underline block mb-3'>Also are</b>
                        <ul>
                            <li><b>1. Lifted State</b></li>
                            <li><b>2. Derived State</b></li>
                            <li><b>3. Web Storage</b></li>
                        </ul>
                    </p>
                    <p>
                        <b>Local (UI) state: </b> Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s input.<br /><br />
                        <b>Global (UI) state: </b> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.<br /><br />
                        <b>Server state: </b>Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier.<br /><br />
                        <b>URL state: </b> Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.<br/>
                    </p>
                    <p className='underline'><b>For more info:</b> </p>
                    <a className='underline mr-3' href="https://blog.saeloun.com/2021/11/11/8-ways-to-handle-react-state-part1.html">Link 1</a>
                    <a className='mr-3 underline' href="https://www.freecodecamp.org/news/how-to-manage-state-in-your-react-apps/">Link 2</a>
                </div>
            </div>

            <div className="collapse my-5">
                <input type="checkbox" className="peer" />
                <div className=" rounded collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How does prototypical inhertance work?
                </div>
                <div className="collapse-content bg-gray-200 text-black peer-checked:bg-gray-200 peer-checked:text-black">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p><br/>
                    <img className='block m-auto' src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png" alt="" /><br/>
                    <p>JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.</p>
                </div>
            </div>

            <div className="collapse my-5">
                <input type="checkbox" className="peer" />
                <div className=" rounded collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What is unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-gray-200 text-black peer-checked:bg-gray-200 peer-checked:text-black">
                    <p><b>Unit Test: </b>A unit test verifies the behavior of a unit of software in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended.<br/>Unit tests verify the smallest parts or components of an application by comparing their actual behavior with the expected behavior in complete isolation. Here, “complete isolation” means that, during unit testing, devs do not connect the application with external dependencies such as databases, the filesystem, or HTTP services. This allows unit tests to be fast and stable since they won’t fail due to problems integrating with those external services.</p><br/>
                    <p><b>Why write Unit tests?</b><br/>Usually, developers write unit tests first, then write the software code. This approach is known as test-driven development (TDD). In TDD, the requirements are turned into specific test cases, then the software is improved to pass the new tests. In the case of unit tests, it allows for the modification of code without affecting the functionality of other units or the software in its entirety. This makes the job easier for developers as the bugs are easy to locate at this stage, which saves time and money.Also, within unit test environments, the individual modules of a product become isolated from one another and have their own area of responsibility. In this scenario, tests are more reliable because they are run in a contained environment. The code too, because of said reliability, becomes reliable<br/><b className='text-2xl'>Benefits of Unit Tests:</b><ul>
                        <li>1. Unit tests help to find and fix bugs quickly and easily.</li>
                        <li>2. Unit tests contribute to higher code quality.</li>
                        <li>3. Unit tests contribute to better application architecture.</li>
                        <li>4. Unit tests act as documentation.</li>
                    </ul><br/>The main advantage of unit tests is their laser-sharp focus. Since they test a single function, they give precise feedback. If a unit test fails, then in the vast majority of cases testers can be sure that the specific function being tested is the problem. Unit tests are also known for their speed. Since they’re fast, they’re executed more often, making them a source of nearly constant valuable feedback.</p>
                </div>
            </div>

            <div className="collapse my-5">
                <input type="checkbox" className="peer" />
                <div className=" rounded collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    React vs Angular vs Vue?
                </div>
                <div className="collapse-content bg-gray-200 text-black peer-checked:bg-gray-200 peer-checked:text-black">
                    <p> <b>React vs Angular: </b>React is a JavaScript library, whereas Angular is a front-end framework. React uses one-way data binding and virtual DOM, whereas Angular uses two-way data binding and real DOM. Moreover, React is faster than Angular as it has a smaller bundle size</p>
                    <p><b>React vs Vue: </b>React requires solid JavaScript skills, while Vue. js is more oriented to novice developers. Similar to React, Vue. js enables writing with JSX, but the components are written with HTML templates.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;