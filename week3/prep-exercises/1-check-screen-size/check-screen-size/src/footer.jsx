import useWindowSize from './usewindow';
export default function Footer() {
  const { width } = useWindowSize('Footer');
  return <h1>Footer width: {width}px</h1>;
}