export default function Loading() {
  return (
    <div className={'h-dvh flex items-center justify-center'}>
      <div
        className={
          'border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600'
        }
      />
    </div>
  );
}
