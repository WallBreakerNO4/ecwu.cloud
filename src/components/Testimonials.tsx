import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              自从用了伍导的服务器，我的代码再也没有 bug 了，NPL 实验的精度也提升了 <Mark>20 个点</Mark>！
            </p>

            <Avatar
              image={userOneImg}
              name="一位不愿透露姓名的群友"
              title="HCC 知名潜水怪"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              只要 5$，你买不了吃亏，买不了上当，但你可以买到 <Mark>SLA</Mark> 6 个 6 的运维服务！
            </p>

            <Avatar
              image={userTwoImg}
              name="群友 K"
              title="HCC 核心成员"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              套餐中的 <Mark>在线陪聊</Mark> 太超值了！我打游戏时再也不用担心没有朋友陪我玩了！ &lt;3
            </p>

            <Avatar
              image={userThreeImg}
              name="某位可爱小狐狸"
              title="群里的 CFA (Chief Fine Artist)"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-xl w-14 h-14">
        <Image
          src={props.image}
          width="56"
          height="56"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <span className=" ">
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>
    </span>
  );
}
