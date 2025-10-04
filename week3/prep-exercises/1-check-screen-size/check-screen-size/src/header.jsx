import useWindowSize from './usewindow';

export default function Header() {
  const { width } = useWindowSize('Header');
  return <h1>Header width: {width}px</h1>;
}