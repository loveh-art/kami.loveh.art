// (dropdown has: preview banner at top, video link (if available), desc of mod, contributors (if available), download link (if available (if not, just state "WORK IN PROGRESS")))

interface CelesteProject {
  name: string;
  description: string;
  image?: string;
  color?: string;
  youtube?: string;
  completed: boolean;
  contributors?: {
    name: string;
    role: string;
  }[];
}

export const CelesteProjects: CelesteProject[] = [];
