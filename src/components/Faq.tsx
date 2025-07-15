"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <div>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "这个服务真的只卖5$吗？",
    answer: "是的，我们致力于提供普惠算力，5$即可拥有伍导同款服务器，让每一位群友都能享受到前沿科技的乐趣。",
  },
  {
    question: "伍导是真人在线陪聊吗？",
    answer: "当然！购买服务后，您将获得与伍导一对一深入交流的机会，探讨从NPL到人生哲学的各种问题。",
  },
  {
    question: "服务器的稳定性如何？",
    answer: "我们承诺99.99%的在线率，剩下的0.01%取决于伍导的NAS是否需要重启。",
  },
  {
    question: "购买后可以退款吗？",
    answer:
      "一旦购买，概不退款。毕竟，你失去的只是5$，但你获得的是与伍导的珍贵友谊（和一台服务器）。",
  },
];
