import { ProductsList } from '@/components/products-list';

import { FilterBar } from '../components/filter-bar';
import styles from './page.module.css';

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <main className={styles.main}>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </main>
  );
}
