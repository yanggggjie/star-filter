export const config = {
  runtime: 'edge',
}

export default (request: Request) => {
  return new Response(`{name:"yangjie", VITE_A:${process.env.VITE_A}}`)
}
