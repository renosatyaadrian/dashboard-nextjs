import { fetchFilteredCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Customer',
};

export default async function Page(props: {
    searchParams?: Promise<{
      query?: string;
    }>;
  }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);
    
    return (
    <div className="w-full">
      <Suspense>
        <Table customers={customers} />
      </Suspense>
    </div>
  );
}