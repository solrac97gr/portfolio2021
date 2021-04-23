import React from "react";
import {BsGraphUp,BsCodeSlash} from "react-icons/bs";
import {BiVector} from "react-icons/bi"

const iconColor = "#63f3aa";
const iconSize = 21;

export const projectResumes = [
  {
    title: "Design",
    subtitle: "Create digital products with unique ideas",
    number: 3,
    icon: <BiVector color={iconColor} size={iconSize} />,
  },
  {
    title: "Development",
    subtitle: "I develop front-end with coding super smooth",
    number: 13,
    icon: <BsCodeSlash color={iconColor} size={iconSize} />,
  },
  {
    title: "Data",
    subtitle: "I transform data into money",
    number: 5,
    icon: <BsGraphUp color={iconColor} size={iconSize} />,
  },
];
