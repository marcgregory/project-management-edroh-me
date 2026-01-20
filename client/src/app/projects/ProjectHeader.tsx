"use client";
import Header from "@/src/components/Header";
import ModalNewProject from "./ModalNewProject";
import { cn } from "@/src/lib/utils";
import {
  Clock,
  FilterIcon,
  Grid3X3,
  List,
  PlusSquare,
  Share2,
  Table,
} from "lucide-react";
import React, { ReactNode, useState } from "react";

type Props = {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
};

const ProjectHeader = ({ activeTab, setActiveTab }: Props) => {
  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);
  return (
    <div className="px-4 xl:px-6">
      <ModalNewProject
        isOpen={isModalNewProjectOpen}
        onClose={() => setIsModalNewProjectOpen(false)}
      />
      <div className="pt-6 pb-6 lg:pt-8 lg:pb-4">
        <Header
          name="Product Design Development"
          buttonComponent={
            <button
              className="bg-blue bg-blue-primary flex cursor-pointer items-center rounded-md px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsModalNewProjectOpen(true)}
            >
              <PlusSquare className="mr-2 size-5" /> New Boards
            </button>
          }
        />
      </div>
      {/* TABS */}
      <div className="dark:border-stroke-dark flex flex-wrap-reverse gap-2 border-y border-gray-200 pt-2 pb-2 md:items-center">
        <div className="flex flex-1 items-center gap-2 md:gap-4">
          <TabButton
            name="Board"
            icon={<Grid3X3 className="size-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name="List"
            icon={<List className="size-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name="Timeline"
            icon={<Clock className="size-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name="Table"
            icon={<Table className="size-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="cursor-pointer text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300">
            <FilterIcon className="size-5" />
          </button>
          <button className="cursor-pointer text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300">
            <Share2 className="size-5" />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Task"
              className="dark:border-dark-secondary dark:bg-dark-secondary rounded-md border py-1 pr-4 pl-10 focus:outline-none dark:text-white"
            />
            <Grid3X3 className="absolute top-2 left-3 size-4 text-gray-400 dark:text-neutral-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

type TabButtonProps = {
  name: string;
  icon: ReactNode;
  setActiveTab: (tabName: string) => void;
  activeTab: string;
};

const TabButton = ({ name, icon, setActiveTab, activeTab }: TabButtonProps) => {
  const isActive = activeTab === name;

  return (
    <button
      className={cn(
        "relative flex cursor-pointer items-center gap-2 px-1 py-2 text-gray-500 after:absolute after:-bottom-2.25 after:left-0 after:h-px after:w-full hover:text-blue-600 sm:px-2 lg:px-4 dark:text-neutral-500 dark:hover:text-white",
        {
          "text-blue-600 after:bg-blue-600 dark:text-white": isActive,
        },
      )}
      onClick={() => setActiveTab(name)}
    >
      {icon}
      {name}
    </button>
  );
};

export default ProjectHeader;
