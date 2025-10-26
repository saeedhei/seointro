// src\apollo\resolvers.ts
export const resolvers = {
  Query: {
    viewer: () => ({
      id: 1,
      name: 'John Smith',
      status: 'Server-rendered ✅',
    }),
  },
};
