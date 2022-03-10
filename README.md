# Full Web App with Nodejs NestJS framwork GraphQL MySQL  React &&Tailwind

   Frontend : React ApolloClient@GraphQL & Tailwind CSS
   
    #using: npx create-react-app my-app --template tailwindcss-typescript
    
    #tailwind init 
    
    # good sample tailwind config:
    
    module.exports = {
      purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
      darkMode: false, // or 'media' or 'class'
      theme: {
      extend: {},
      screens: {
         sm: "640px",
         // => @media (min-width: 640px) { ... }

         md: "768px",
         // => @media (min-width: 768px) { ... }

         lg: "1024px",
         // => @media (min-width: 1024px) { ... }

         xl: "1280px",
         // => @media (min-width: 1280px) { ... }

         "2xl": "1536px",
         // => @media (min-width: 1536px) { ... }
         },
      },
      variants: {
         extend: {},
      },
      plugins: [],
    };
    
    # Using Graphql codegen to autogenerate code :
    
    "schema:download": "npx apollo service:download --endpoint=http://localhost:9000/graphql ./src/app/graphql.schema.json",
    "schema:generate-watch": "npx apollo codegen:generate --localSchemaFile=./src/app/graphql.schema.json --target=typescript --tagName=gql --watch",
    
    # bad choice :  Redux with apolloClient should use apolloclient only for handling the data state and pipe line
   
   Backend: Nodejs=> NestJs framwork with GranphQL and TypeORM, MySQL database
   
    # why nestjs --> easy to use, and powerful
    
    # typeORM is strongly recommended rather than othe ORM
    
    

   
   
