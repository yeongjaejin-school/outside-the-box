export const LEVEL_COUNT = 20;

export interface LevelEntry {
  title: string;
  lines: string[];
  skippable?: boolean;   // defaults to true if omitted
}

export const LEVEL_DATA: LevelEntry[] = [
  { title: "Q1",  lines: ["Hello, candidate. Please enter your name below.", "Leave it blank and I will refer to you as 'Box.'"] },
  { title: "Q2",  lines: ["Accept the terms to proceed.", "Read carefully. Every word matters."] },
  { title: "Q3",  lines: ["Click the dot."] },
  { title: "Q4",  lines: ["Do not click anything.", "Wait. That is all."] },
  { title: "Q5",  lines: ["There is a button up there.", "You know what to do with it."] },
  { title: "Q6",  lines: ["A brief intermission, candidate.", "Defeat the A.I. to proceed."] },
  { title: "Q7",  lines: ["How many F's do you count on the board above?", "Take your time. Everything you need is on the desk."] },
  { title: "Q8",  lines: ["An unregistered individual has approached you during the examination.", "This interaction is not part of the official assessment."], skippable: false },
  { title: "Q9",  lines: ["Focus, candidate. Show all work.", "Select the correct answer from the options above."] },
  { title: "Q10", lines: ["This question is still being prepared.", "Stand by, candidate."] },
  { title: "Q11", lines: ["This question is still being prepared.", "Stand by, candidate."] },
  { title: "Q12", lines: ["This question is still being prepared.", "Stand by, candidate."] },
  { title: "Q13", lines: ["This question is still being prepared.", "Stand by, candidate."] },
  { title: "Q14", lines: ["This question is still being prepared.", "Stand by, candidate."] },
  { title: "Q15", lines: ["This question is still being prepared.", "Stand by, candidate."] },
  { title: "Q16", lines: ["This question is still being prepared.", "Stand by, candidate."] },
  { title: "Q17", lines: ["This question is still being prepared.", "Stand by, candidate."] },
  { title: "Q18", lines: ["This question is still being prepared.", "Stand by, candidate."] },
  { title: "Q19", lines: ["This question is still being prepared.", "Stand by, candidate."] },
  { title: "Q20", lines: ["This question is still being prepared.", "Stand by, candidate."] },
];
