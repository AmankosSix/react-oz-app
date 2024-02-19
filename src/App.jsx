import { useCallback } from 'react';

export const App = () => {
  const handleClick = useCallback(() => {
    if (!window.OzLiveness) {
      console.error('OzLiveness is not available');
      return;
    }

    console.log('OzLiveness is available!');

    try {
      window.OzLiveness.open({
        lang: 'en',
        action: ['video_selfie_scan'],
        params: {
          extract_best_shot: true
        },
        meta: {
          transaction_id: 'transaction_id'
        },
        on_complete: (response) => {
          console.log('OzLiveness response', response);
        },
        on_capture_complete: (response) => {
          console.log('OzLiveness capture complete', response);
        },
        on_error: (error) => {
          console.error('OzLiveness error', error);
        }
      });
    } catch (error) {
      console.error('Error opening OzLiveness', error);
    }
  }, []);

  return (
    <>
      <h1>Testing Oz Liveness!</h1>
      <button onClick={handleClick}>Check OzLiveness</button>
    </>
  );
};
