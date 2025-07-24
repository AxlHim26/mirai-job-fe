export type Message = {
  id: number;
  content?: string;
  time: string;
  isSender: boolean;
  senderName: string;
  file?: string;
};

export type Conversation = {
  id: number;
  name: string;
  position: string;
  company: string;
  messages: Message[];
};

export const mockConversations: Conversation[] = [
  {
    id: 1,
    name: "Jan Mayer",
    position: "Recruiter",
    company: "Nomad",
    messages: [
      {
        id: 1,
        senderName: "Jan Mayer",
        content: "Hey Jake, I wanted to reach out because we saw your work contributions and were impressed by your work.",
        time: "12 mins ago",
        file: "https://res.cloudinary.com/multi-library/raw/upload/v1753340920/%C4%90%C3%A1p_%C3%A1n_Paraphrasing_PART_3_4_-_TEST_3_attczg.docx",
        isSender: false,
      },
      {
        id: 2,
        senderName: "Jan Mayer",
        content: "We want to invite you for a quick interview",
        time: "11 mins ago",
        isSender: false,
      },
      {
        id: 3,
        senderName: "Jan Mayer",
        content: "Would you be available this Friday at 2PM?",
        time: "11 mins ago",
        isSender: false,
      },
      {
        id: 4,
        senderName: "Jake Gyll",
        content: "Hi Jan, sure I would love to. Thanks for taking the time to see my work!",
        time: "10 mins ago",
        isSender: true,
      },
    ],
  },
  {
    id: 2,
    name: "Joe Bartmann",
    position: "Recruiter",
    company: "FPT",
    messages: [
      {
        id: 1,
        senderName: "Joe Bartmann",
        content: "Hey thanks for your interview response. We’ll get back soon.",
        time: "3:40 PM",
        isSender: false,
      },
    ],
  },
  {
    id: 3,
    name: "Ally Wales",
    position: "CEO",
    company: "Nomad",
    messages: [
      {
        id: 1,
        senderName: "Ally Wales",
        content: "Hey thanks for your interview response. We’ll get back soon.",
        time: "3:40 PM",
        isSender: false,
      },
    ],
  },
];
