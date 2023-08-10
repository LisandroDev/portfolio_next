import styles from './Welcome.module.css';
import { Stack } from './Stack/Stack';

export const Welcome = () => {
  return (
    <div
      id='welcome'
      className={
        'mx-auto flex flex-col tracking-wide text-slate-50 justify-center align-center gap-y-4 h-screen w-screen ' +
        styles.imageBackground
      }
    >
      <div className='max-w-sm self-center md:max-w-3xl'>
        <h1 className={'text-center text-4xl md:text-6xl font-bold'}>
          Lisandro Rubianes
        </h1>
        <p className={'text-center text-xs mt-4 text-semibold md:text-xl'}>
          Hi! I&apos;m a passionate Developer based in Buenos Aires, Argentina
          🇦🇷.
        </p>
      </div>
      <Stack />
    </div>
  );
};
