export interface GdProject {
  id?: string;
  name: string;
  description: string;
  image?: string;
  color?: string;
  youtube?: string;
  attempts?: number;
  completed: boolean;
  collabMembers?: {
    name: string;
    role: string;
  }[];
}

export const projects: GdProject[] = [
  {
    name: "Shikeji",
    description: "Nhelv remake",
    completed: false,
    image: "/images/shikeji.png",
    youtube: "https://www.youtube.com/watch?v=fogMsQslMOk",
  },

  {
    name: "Hells Gate",
    description: "Hells Gate",
    completed: false,
    image: "/images/hellsgate.png",
    youtube: "https://www.youtube.com/watch?v=oIN2RL5Sevc",
  },
];
