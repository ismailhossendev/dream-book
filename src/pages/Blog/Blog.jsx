import React from 'react';

const Blog = () => {
    return (
        <div className="space-y-4 min-h-screen">
            <details className="group rounded-lg bg-gray-50 p-6" open>
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="font-medium text-gray-900">
                        "What are the different ways to manage a state in a React application?
                    </h2>
                    <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700">
                    The Four Kinds of React State to Manage When we talk about state in our applications, it's important to be clear about what types of state actually matter. There are four kinds of state that we need to manage in our applications: local state, global state, session state, and persistent state.
                </p>
            </details>
            <details className="group rounded-lg bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="font-medium text-gray-900">
                        How does prototypical inheritance work?
                    </h2>
                    <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700">
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.
                </p>
            </details>
            <details className="group rounded-lg bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="font-medium text-gray-900">
                        What is a unit test? Why should we write unit tests?
                    </h2>
                    <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700">
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </details>
            <details className="group rounded-lg bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="font-medium text-gray-900">
                        React vs. Angular vs. Vue?
                    </h2>
                    <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700">
                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option
                </p>
            </details>
        </div>
    );
};

export default Blog;