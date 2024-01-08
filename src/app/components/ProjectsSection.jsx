"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
 
  
  {
    id: 16,
    title: "Modelo de machine leraning pedra papel tesoura",
    participation:"Criei um modelo de machine learning feito para ganhar 60% das vezes de 4 jogadores pre-criados.",
    image: "/images/projects/pe3.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 15,
    title: "Portifolio Web Designer",
    participation:"Colaborei na criação de um portifolio usando React.js e Tailwind.",
    image: "/images/projects/p11.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 17,
    title: "Portifolio Coding Student",
    participation:"Colaborei na criação de um portifolio usando HTML, CSS e Javacript",
    image: "/images/projects/p9.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Associação de estudantes",  
    participation:"Atuei como líder de equipe e desenvolvedora durante a execução do site",
    image: "/images/projects/p4.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 6,
    title: "Antigo portifolio",
    
    participation:"Nesse projeto explorei animações usando CSS e iniciei meus conhecimentos em desenvolvimento web responsivo",
    image: "/images/projects/p1.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Woman Pi",
   
    participation:"Fui lider do time de desenvolvedoras do projeto para criar a página web e criar uma presença oline para o projeto",
    image: "/images/projects/p2.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Smart Routes",
    participation:"Criei um App usando React Native feito para otimizar rotas e diminuir o congestinoamento nas estradas.",
    image: "/images/projects/pe3.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
 
  {
    id: 10,
    title: "Meu portifolio pessoal",
    participation:"Projeto criado com Next.js, Tailwind e Typescript usado pra armazenar apenas meu proejtos pessoais",
    image: "/images/projects/p6.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Re-criação de uma rede social",
    participation:"Recriei a tela de uma rede social que permite comentar e curtir usando React.js",
    image: "/images/projects/p7.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Palavras de Paz",
    participation:"Fui desenvolvedora voluntária nessa Ong, trabalhando com Hooks, Next.js e Typescript. Criei interfaces a partir de designs no figma, e trabalhei na responsividade.",
    image: "/images/projects/p8.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 13,
    title: "Artigos",
    participation:"Artigos escritos por mim sobre inteligência artificial",
    image: "/images/projects/p10.jpg",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
   {
    id: 2,
    title: "Pegada ecológica",
    
    participation:"Nesse projeto eu fui lider da equipe e criei o site usando HTML, CSS e Javascript. ",
    image: "/images/projects/e2.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Meu hub de links",
    participation:"Criei um site com todos os meus links mais importantes usando HTML, CSS e Javascript",
    image: "/images/projects/p5.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Tecnico de informática",
    
    participation:"Nesse projeto eu programei o website usando HTML, CSS e Javascript",
    image: "/images/projects/e4.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 1,
    title: "Exercícios da linguagem C",
    participation:"Fizemos algoritmos simples para resolver problemas propostos",
    image: "/images/projects/e1.jpg",
    tag: ["All", "School" ],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Exercícios de SQL",
    
    participation:"Criei base de dados explorando conceitos como tabelas e colunas",
    image: "/images/projects/e3.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="School"
          isSelected={tag === "School"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              participation={project.participation}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
