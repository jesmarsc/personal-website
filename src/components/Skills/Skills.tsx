import React from 'react';
import tw, { styled } from 'twin.macro';

import {
  SvgGatsby,
  SvgJava,
  SvgMysql,
  SvgReact,
  SvgSpring,
  SvgJavascript,
  SvgNode,
  SvgFirebase,
  SvgMobx,
  SvgKubernetes
} from 'src/components/Logos';
import { IconWithText } from 'src/components';

const Skills = () => {
  return (
    <Container>
      <Category>
        <CategoryTitle>Languages</CategoryTitle>
        <CategorySkills>
          <IconWithText icon={SvgJavascript}>JavaScript</IconWithText>
          <IconWithText icon={SvgJava}>Java</IconWithText>
        </CategorySkills>
      </Category>

      <Category>
        <CategoryTitle>Front-End</CategoryTitle>
        <CategorySkills>
          <IconWithText icon={SvgReact}>React</IconWithText>
          <IconWithText icon={SvgGatsby}>Gatsby</IconWithText>
          <IconWithText icon={SvgMobx}>MobX</IconWithText>
        </CategorySkills>
      </Category>

      <Category>
        <CategoryTitle>Back-End</CategoryTitle>
        <CategorySkills>
          <IconWithText icon={SvgNode}>Node.js</IconWithText>
          <IconWithText icon={SvgFirebase}>Firebase</IconWithText>
          <IconWithText icon={SvgSpring}>Spring</IconWithText>
          <IconWithText icon={SvgMysql}>MySQL</IconWithText>
          <IconWithText icon={SvgKubernetes}>Kubernetes</IconWithText>
        </CategorySkills>
      </Category>
    </Container>
  );
};

const Container = styled('div')(
  tw`p-6 rounded-lg bg-black bg-opacity-80 all-child:(not-first:(mt-8))`
);

const Category = styled('div')(tw`flex flex-col items-center`);

const CategoryTitle = styled('h3')(tw`text-2xl font-semibold mb-2`);

const CategorySkills = styled('div')(
  tw`flex flex-wrap justify-center text-2xl all-child:(flex items-center mx-3)`
);

export default Skills;
