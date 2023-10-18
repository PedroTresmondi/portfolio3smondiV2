import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full red-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Sobre mim</p>
        <h2 className={styles.sectionHeadText}>Visão geral.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Com habilidades em JavaScript, Node.js, React.JS e AWS.
        Trabalhei em projetos internos, aplicando metodologias ágeis como Scrum e desenvolvendo soluções inovadoras.
        Também sou designer gráfico freelancer com experiência em Adobe Illustrator e Photoshop.
        Animado para aplicar minhas habilidades em projetos desafiadores e inovadores.
        Me formei em Análise de Sistemas de Computação na São Paulo Tech School,
        adquirindo conhecimentos em diversas tecnologias 
        como monitoração de sistemas com dashboards, HTML, Java, JavaScript, SQL, Bootstrap, React, AWS e Azure.
      </motion.p>

    
    </>
  );
};

export default SectionWrapper(About, "about");