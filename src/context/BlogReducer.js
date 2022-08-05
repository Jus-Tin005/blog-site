// const createBlog = (state, blog) => {
//         return [...state, blog];
//       };
//       const deleteBlog = (state, payLoadblog) => {
//         let filtered = state.filter((stateBlog) => {
//           return stateBlog.id !== payLoadblog.id;
//         });
//         return filtered;
//       };
//       const blogsReducer = (state, action) => {
//         switch (action.type) {
//           case 'BLOG_CREATE':
//             return createBlog(state, action.payload);
//           case 'BLOG_DELETE':
//             return deleteBlog(state, action.payload);
//           default:
//             return state;
//         }
//       };

//       export default blogsReducer;






        const deleteBlog = (state, blog) => {
          let filtered = state.filter(stateblog => {
              return stateblog.id !== blog.id;
          });
          return filtered;
        }
        const createBlog = (state,blog) => {
          return [...state,blog];
        };
        const blogsReducer = (state, action) => {
        switch (action.type) {
          case 'BLOG_CREATE':
            return createBlog(state, action.payload);
          case 'BLOG_DELETE':
            return deleteBlog(state, action.payload);
          default:
            return state;
        }
      };

      export default blogsReducer;








