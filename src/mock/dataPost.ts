export type PostType = {
  id: number;
  author: string;
  content: string;
  dateCreated: string;
};

export const dataPostList: PostType[] = [
  {
    id: 1,
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
    dateCreated: "2024-03-04",
  },
  {
    id: 2,
    author: "Jane Smith",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    dateCreated: "2024-03-03",
  },
  {
    id: 3,
    author: "Michael Johnson",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    dateCreated: "2024-03-02",
  },
  {
    id: 4,
    author: "Emily Brown",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    dateCreated: "2024-03-01",
  },
  {
    id: 5,
    author: "David Wilson",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    dateCreated: "2024-02-29",
  },
  {
    id: 6,
    author: "Sarah Taylor",
    content:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    dateCreated: "2024-02-28",
  },
  {
    id: 7,
    author: "Robert Martinez",
    content:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    dateCreated: "2024-02-27",
  },
  {
    id: 8,
    author: "Olivia Rodriguez",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    dateCreated: "2024-02-26",
  },
  {
    id: 9,
    author: "Daniel Anderson",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    dateCreated: "2024-02-25",
  },
  {
    id: 10,
    author: "Sophia Garcia",
    content:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    dateCreated: "2024-02-24",
  },
];

export default dataPostList;
