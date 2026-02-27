/* ============================================
   PROJECT DATA TYPES
   Shape of each card in projectCardData.
   ============================================ */

export interface ProjectCard {
  title: string;
  image: string;
  text: string;
  linkTo: string;
  bubbleText: string;
  pageId: string;
  lineBreaks: number;
  tags: string[];
  passwordProtected: boolean;
}
