import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://full-backend-six.vercel.app/api/graphql',
  documents: ['./graphql/documents/**/*.graphql'],
  generates: {
    './graphql/generated/index.ts': {
      overwrite: true,
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
