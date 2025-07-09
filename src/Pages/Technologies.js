import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    spring,
    docker,
    node,
    mysql,
    mongo,
    python,
    angular,
    java,
    postgre ,
    aws,
    azure,
    ansible,
    jenkins,
    oracle
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={java} title="JAVA" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={spring} title="SPRING" alt="" />
        <img src={angular} title="ANGULAR" alt="" />
        <img src={react} title="React" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={sass} title="SASS" alt="" />
        
        <img src={docker} title="DOCKER" alt="" />
        <img src={node} title="NODE" alt="" />
        <img src={mysql} title="MYSQL" alt="" />
        <img src={postgre} title="POSTGRE" alt="" />
        <img src={mongo} title="MONGO" alt="" />
        <img src={python} title="PYTHON" alt="" />
        <img src={oracle} title="ORACLE" alt="" />
        <img src={jenkins} title="JENKINS" alt="" />
        <img src={ansible} title="ANSIBLE" alt="" />
        <img src={aws} title="AWS" alt="" />
        <img src={azure} title="AZURE" alt="" />
        
         
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
