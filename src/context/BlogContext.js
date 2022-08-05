// import { createContext, useReducer } from 'react';
// import blogsReducer from './BlogReducer';
// const BLOGS = [
//   {
//     id: '1',
//     title: 'React Basic',
//     type: 'Web Development',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     id: '2',
//     title: 'React Hooks',
//     type: 'Web Development',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     id: '3',
//     title: 'React Router',
//     type: 'Web Development',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
// ];
// const BlogsContext = createContext({});
// export const BlogProvider = ({ children }) => {
//   const [blogs, blogDispatch] = useReducer(blogsReducer, BLOGS);
//   return (
//     <BlogsContext.Provider value={{ blogs: blogs, blogDispatch: blogDispatch }}>
//       {children}
//     </BlogsContext.Provider>
//   );
// };

// export default BlogsContext;










import { createContext, useReducer } from 'react';
import blogsReducer from './BlogReducer';
const BLOGS = [
  {
    id: '1',
    title: 'React Basic',
    type: 'Web Development',
    description:
      `We're all about building meaningful relationships based on trust, respect, and mutual success, whether they're peer-peer, teacher-student, manager-employee, or company-customer. People come first.`
  },
  {
    id: '2',
    title: 'React Hooks',
    type: 'Web Development',
    description:
      `We aspire to offer an inclusive and welcoming culture, and we believe people deserve equal access to opportunities and resources. You can't have equality without equity.`
  },
  {
    id: '3',
    title: 'React Router',
    type: 'Web Development',
    description:
      `Our software makes lifelong learning easier. We strive for clarity and ease of use across the board, from product design to communication to customer experience. Simpler is smarter.`
  },
];
const BlogsContext = createContext({});
export const BlogProvider = ({ children }) => {
  const [blogs, blogDispatch] = useReducer(blogsReducer, BLOGS);
  return (
    <BlogsContext.Provider value={{ blogs: blogs, blogDispatch: blogDispatch }}>
      {children}
    </BlogsContext.Provider>
  );
};

export default BlogsContext;