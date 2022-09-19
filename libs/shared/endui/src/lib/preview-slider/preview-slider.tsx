import styles from './preview-slider.module.scss';

/* eslint-disable-next-line */
export interface PreviewSliderProps {}

export function PreviewSlider(props: PreviewSliderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PreviewSlider!</h1>
    </div>
  );
}

export default PreviewSlider;
