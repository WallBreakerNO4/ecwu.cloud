import {
  ShieldCheckIcon,
  BanknotesIcon,
  CpuChipIcon,
  CheckBadgeIcon,
  ServerStackIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "珠三角最大IDC供应商",
  desc: "ECWU Cloud，您身边的云服务专家。我们提供从 NAS 组建到云服务器租赁的全方位解决方案，由 NPL 方向的在读博士伍导亲自为您服务。",
  image: benefitOneImg,
  bullets: [
    {
      title: "强大的技术支持",
      desc: "伍导拥有多年虚拟化和容器技术经验，为您提供5x8(UTC+0)小时的间断技术支持。",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "价格实惠",
      desc: "仅需5$，即可拥有伍导的贴心服务和强大的服务器资源。",
      icon: <BanknotesIcon />,
    },
    {
      title: "AI 计算优化",
      desc: "我们的 NAS 配备了顶级显卡，专为 AI 计算优化，助您在 NPL 领域取得突破。",
      icon: <CpuChipIcon />,
    },
  ],
};

const benefitTwo = {
  title: "为什么选择我们？",
  desc: "我们不仅仅是云服务商，更是您在 HCC 中的老朋友。选择我们，就是选择一份信任和欢乐。",
  image: benefitTwoImg,
  bullets: [
    {
      title: "HCC 官方认证",
      desc: "作为 HCC 群聊的官方指定云服务商，我们值得信赖。",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "伍导亲自部署",
      desc: "每一台服务器都由伍导亲自部署和优化，确保最佳性能。",
      icon: <ServerStackIcon />,
    },
    {
      title: "无限欢乐时光",
      desc: "购买我们的服务，即可获得与伍导在线吹水的宝贵机会。",
      icon: <ChatBubbleLeftRightIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
