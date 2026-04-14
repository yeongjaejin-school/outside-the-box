export const LEVEL_COUNT = 30;

export interface LevelEntry {
  title: string;
  lines: string[];
  skippable?: boolean;   // defaults to true if omitted
}

export const LEVEL_DATA: LevelEntry[] = [
  { title: "Q1",  lines: ["Hello, candidate. Please enter your name below."] },
  { title: "Q2",  lines: ["Accept the terms to proceed.", "Read carefully. Every word matters."] },
  { title: "Q3",  lines: ["Click the dot"] },
  { title: "Q4",  lines: ["Watch the button.", "Press it only when it tells you to."] },
  { title: "Q5",  lines: ["There is a button up there.", "You know what to do with it."] },
  { title: "Q6",  lines: ["A brief intermission, candidate.", "Defeat Frodrick Rederer to proceed."] },
  { title: "Q7",  lines: ["I think we are counting something here?"] },
  { title: "Q8",  lines: ["An unregistered individual has approached you during the examination.", "This interaction is not part of the official assessment."], skippable: false },
  { title: "Q9",  lines: ["Focus, candidate. Show all work.", "Select the correct answer from the options above."] },
  { title: "Q10", lines: ["Navigate to the exit.", "The path is yours to find."] },
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
  { title: "Q21", lines: ["He is back.", "Frodrick seems to have trained a lot...", "maybe this time you need to cheat on the exam for once???"] },
  { title: "Q22", lines: ["did you catch that??"] },
  { title: "Q23", lines: ["Logic before instinct, candidate.", "Prove your reasoning, then draw your conclusion."] },
  { title: "Q24", lines: ["This should be an easy one..."] },
  { title: "Q25", lines: ["Some walls are only visible under the right conditions.", "Toggle your perspective to navigate."] },
  { title: "Q26", lines: ["The light switch is somewhere in this room.", "We believe in you. Probably."] },
  { title: "Q27", lines: ["A vote is being held for Head Examination Officer.", "Choose your candidate wisely."] },
  { title: "Q28", lines: ["Click what you see.", "Trust nothing. Not even this sentence."] },
  { title: "Q29", lines: ["The treasure is marked on the map above.", "It is not staying still."] },
  { title: "Q30", lines: ["Final question.", "Take your time."] },
];
