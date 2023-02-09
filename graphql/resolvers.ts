
export const resolvers = {
  Query: {
    getBooks:() => {
      return [
        { name: "성공", title:"입니다"},
      ]
    }
  },
}