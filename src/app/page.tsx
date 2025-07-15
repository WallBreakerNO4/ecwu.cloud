import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="ECWU Cloud 特色"
        title="深入了解我们的特色"
      >
        我们不仅提供强大的算力，更提供无微不至的博士级关怀。选择 ECWU Cloud，就是选择与最前沿的 NPL 技术为伍。
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="伍导风采"
        title="了解我们的首席科学家"
      >
        本视频将带您深入了解ECWU Cloud的灵魂人物——伍导。看他如何在代码的世界里挥洒自如，在学术的海洋里乘风破浪。
      </SectionTitle>

      <Video videoId="dQw4w9WgXcQ" />

      <SectionTitle
        preTitle="群友好评"
        title="听听他们怎么说"
      >
        用户的口碑是我们前进的最大动力。以下内容来自HCC群友的真实反馈，绝无半点虚假（大概）。
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="常见问题" title="你想知道的，这里都有">
        我们整理了一些大家最关心的问题。如果在这里找不到答案，欢迎随时在HCC群里@伍导。
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
