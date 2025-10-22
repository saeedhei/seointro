// src\app\page.tsx
import { gql } from '@apollo/client';
import { initializeApollo } from '@/lib/apollo-client';
import Providers from './providers';

export const revalidate = 60; // ISR: صفحه هر 60 ثانیه دوباره ساخته می‌شود

// Type-safe تعریف کردن query result
interface Viewer {
  id: string;
  name: string;
  status: string;
}

interface ViewerData {
  viewer: Viewer;
}

// GraphQL query
const VIEWER_QUERY = gql`
  query Viewer {
    viewer {
      id
      name
      status
    }
  }
`;

export default async function Home() {
  // ایجاد Apollo Client سمت سرور با SchemaLink
  const apolloClient = initializeApollo(null, true);

  // اجرای query در سرور (SSR prefetch)
  const { data } = await apolloClient.query<ViewerData>({
    query: VIEWER_QUERY,
  });

  // استخراج cache برای hydration
  const initialState = apolloClient.cache.extract();

  return (
    <Providers initialApolloState={initialState}>
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-2">🚀 SSR Prefetch + Apollo</h1>

        {data?.viewer ? (
          <p>
            وارد شدی به عنوان <b>{data.viewer.name}</b> و وضعیت: <b>{data.viewer.status}</b>
          </p>
        ) : (
          <p>❌ داده‌ای برای نمایش وجود ندارد</p>
        )}
      </main>
    </Providers>
  );
}
