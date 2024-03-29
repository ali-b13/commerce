import Grid from '@/components/layout/grid';

export default function Loading() {
  return (
    <Grid className="grid-cols-2 h-[90vh] lg:grid-cols-3">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return (
            <Grid.Item key={index} className="animate-pulse bg-neutral-100 " />
          );
        })}
    </Grid>
  );
    }