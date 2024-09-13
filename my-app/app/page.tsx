import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1>Typescript</h1>
    <h2>Previous Knowledge needed</h2>
    <p>You should have basic knowledge of Javascript (loops,variables,basic syntax,operators etc) </p>
    <h2>What is TypeScript?</h2>
    <p>TypeScript is an extension of JavaScript that adds **static typing** to the language. This means that, in TypeScript, you can define the types of variables, function parameters, and return values (e.g., whether a variable should be a string, number, etc.). This helps catch errors during development instead of when the code runs, making it easier to debug and maintain.

It builds on JavaScript, so any valid JavaScript code is also valid TypeScript. The main benefit is that it helps developers write more predictable and robust code by catching type-related errors early on.

In summary:

- **JavaScript-compatible**: TypeScript is a superset of JavaScript.
- **Static typing**: You can define types for variables and functions.
- **Compile-time error detection**: Bugs are caught during development, not during runtime.

TypeScript is great when working on larger codebases or collaborating in teams, as it makes the code more reliable and easier to manage.</p>
    </>
  );
}
